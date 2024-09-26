import { getOpenIDConfiguration, refreshToken } from '@/services/identity';
import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

export default NextAuth({
	providers: [
		Keycloak({
			idToken: true,
			clientId: process.env.AUTH_CLIENT_ID,
			clientSecret: process.env.AUTH_CLIENT_SECRET,
			issuer: process.env.AUTH_ISSUER,
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			// Initial sign in
			if (account && user) {
				return {
					idToken: account.id_token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					accessTokenExpires: account.expires_at * 1000,
				};
			}

			// Return previous token if the access token has not expired yet
			// 30 seconds to allow for clock skew
			if (Date.now() < token.accessTokenExpires - 30 * 1000) {
				return token;
			}

			// Access token has expired, try to update it
			return refreshToken(token.refreshToken);
		},

		session: async ({ session, token }) => {
			session.accessToken = token.accessToken;
			return session;
		},
	},
	events: {
		signOut: ({ token }) => destroySsoSession(token.idToken),
	},
});

async function destroySsoSession(idToken: string) {
	try {
		const params = new URLSearchParams();
		params.append('id_token_hint', idToken);
		params.append('client_id', process.env.AUTH_CLIENT_ID);
		const endpoint = await getOpenIDConfiguration('end_session_endpoint');
		await fetch(`${endpoint}?${params.toString()}`);
	} catch (err) {
		console.log(err);
	}
}
