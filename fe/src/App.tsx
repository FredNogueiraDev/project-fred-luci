import { QueryClient } from "@tanstack/query-core";
import { Router } from "./Router";
import { FirebaseProvider } from "./contexts/FireBaseContext";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";

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
      <Theme
        accentColor="blue" // Escolha uma cor de destaque
        radius="medium"    // Controle de bordas arredondadas
        appearance="light" // Tema claro
        className="text-white-900 w-full h-full flex justify-center items-center"
      >
          <Router />
          <Toaster />
      </Theme>
    </QueryClientProvider>
    </FirebaseProvider>
  );
}
