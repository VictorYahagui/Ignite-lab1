import { AppRoutes } from "./Router";
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
       <AppRoutes/>
    </ApolloProvider>
  );
}

export default App
