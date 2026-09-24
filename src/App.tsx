import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { LikesProvider } from "./context/LikesProvider";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LikesProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </LikesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
