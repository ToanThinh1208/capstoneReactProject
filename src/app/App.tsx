import "../App.css";
import { QueryProvider } from "./providers/QueryProvider";
import { RouterProvider } from "./providers/RouterProvider";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <QueryProvider>
        <RouterProvider />
        <Toaster position="bottom-right" richColors closeButton />
      </QueryProvider>
    </>
  );
}

export default App;
