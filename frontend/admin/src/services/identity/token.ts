import { JWT } from 'next-auth/jwt';
import { getOpenIDConfiguration } from './config';

export async function refreshToken(rfToken: string): Promise<JWT> {
	const endpoint = await getOpenIDConfiguration('token_endpoint');
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: rfToken,
			client_id: process.env.AUTH_CLIENT_ID,
		}),
	}).then((res) => res.json());

	if (!response) {
		throw new Error('No response from token endpoint');
	}

	if (response.error) {
		throw new Error(response.error);
	}

	return {
		idToken: response.id_token,
		accessToken: response.access_token,
		refreshToken: response.refresh_token,
		accessTokenExpires: response.expires_at * 1000,
	};
}
