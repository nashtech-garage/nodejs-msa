'use client'

import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/services/graphql/apolloClient";

export default function UsersProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
