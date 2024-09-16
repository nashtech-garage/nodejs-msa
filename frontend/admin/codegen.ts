import { CodegenConfig } from "@graphql-codegen/cli";

const bff_service_url = process.env.NEXT_PUBLIC_BFF_SERVICE_URL

const config: CodegenConfig = {
    schema: [
        bff_service_url || "http://localhost:3001/graphql",
    ],
    documents: ['src/**/*.ts', 'src/**/*.tsx'],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            plugins: [],
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    // ignoreNoDocuments: true,
};

export default config;