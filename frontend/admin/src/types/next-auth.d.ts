/**
 * eslint-disable
 */
import NextAuth from 'next-auth';

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		accessToken: string;
	}

	interface Account {
		access_token: string;
		refresh_token: string;
		id_token: string;
		expires_at: number;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		idToken: string;
		accessToken: string;
		refreshToken: string;
		accessTokenExpires: number;
	}
}
