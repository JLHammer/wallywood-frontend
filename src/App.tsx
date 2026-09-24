import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { LikesProvider } from "./context/LikesProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LikesProvider>
          <AppRouter />
        </LikesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
