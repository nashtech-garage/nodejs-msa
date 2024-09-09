import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
    DefaultOptions,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";
  
  const httpLink = new HttpLink({
    uri: `/graphql`,
    fetchOptions: { cache: "no-store" },
    credentials: 'include'
  });
  
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  };

  const authLink = setContext((_, { headers }) => {
    // const accessToken = getAccessToken();
    const accessToken = "AccessToken"

    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        }
    };
});
  
  const client = new ApolloClient({
    link: from([authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
  });
  
  export default client;