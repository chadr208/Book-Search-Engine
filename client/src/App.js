import Header from "./components/Header";
import { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Q from "./pages/Q";
import Charts from "./pages/Charts";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [isSubmitted, setIsSubmitted] = useState(
    localStorage.getItem("submitted")
  );

  const setSubmitted = (value) => {
    setIsSubmitted(value);
  };

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        {isSubmitted ? <Charts /> : <Q setSubmitted={setSubmitted} />}
      </ApolloProvider>
    </>
  );
}

export default App;
