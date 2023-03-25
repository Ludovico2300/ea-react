import { Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Create from "./pages/Create";
import View from "./pages/View";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        articles: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5001/graphql",
  cache,
});
const article = new ApolloClient({
  uri: "http://localhost:5001/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client} article={article}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allgames" element={<AllGames />} />
          <Route path="/allnews" element={<AllNews />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
