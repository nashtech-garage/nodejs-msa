declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_BFF_SERVICE_URL: string;
		AUTH_CLIENT_ID: string;
		AUTH_CLIENT_SECRET: string;
		NEXTAUTH_URL: string;
		AUTH_TENANT: string;
		AUTH_ISSUER: string;
		AUTH_PROVIDER_URL: string;
		AUTH_OPENID_CONFIGURATION_URL: string;
	}
}
