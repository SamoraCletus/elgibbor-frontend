import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClassProvider } from "./utils/RouteHandler";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <ClassProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ClassProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
