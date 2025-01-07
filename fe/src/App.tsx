import { QueryClient } from "@tanstack/query-core";
import { Router } from "./Router";
import { FirebaseProvider } from "./contexts/FireBaseContext";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export function App() {
  return (
    <FirebaseProvider>
     <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
    </QueryClientProvider>
    </FirebaseProvider>
  );
}
