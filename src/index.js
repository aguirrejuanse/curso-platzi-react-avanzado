import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { App } from "./App";
import { AppProvider } from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-aguirrejuanse.vercel.app/graphql",
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
