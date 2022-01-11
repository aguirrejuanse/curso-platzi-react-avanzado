import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { App } from "./App";
import { AppProvider } from "./Context";

const httpLink = createHttpLink({
  uri: "https://petgram-server-aguirrejuanse.vercel.app/graphql",
});

// const authLink = setContext((_, { headers }) => {
//   const token = window.sessionStorage.getItem("token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");

  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid token") {
    sessionStorage.removeItem("token");
    window.location = "/user";
  }
});

const client = new ApolloClient({
  link: from([errorMiddleware, authMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>,
  document.getElementById("app")
);
