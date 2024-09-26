interface OpenIDConfiguration {
	userinfo_endpoint: string;
	token_endpoint: string;
	introspection_endpoint: string;
	end_session_endpoint: string;
	jwks_uri: string;
}

const openIDConfigurationEndpoint = process.env.AUTH_OPENID_CONFIGURATION_URL;
let openIDConfiguration: OpenIDConfiguration | null;

export async function getOpenIDConfiguration(
	key: keyof OpenIDConfiguration
): Promise<string> {
	if (!openIDConfiguration) {
		const response = await fetch(openIDConfigurationEndpoint);
		openIDConfiguration = (await response.json()) as OpenIDConfiguration;
	}
	return openIDConfiguration[key];
}
