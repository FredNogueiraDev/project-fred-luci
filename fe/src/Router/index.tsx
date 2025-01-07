import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { NotFound } from "../view/pages/NotFound";
import { Dashboard } from "../view/pages/Dashboard";
import { AuthLayout } from "../view/layouts/AuthLayouts";
import { PageLoader } from "../components/PageLoader";
import { Orders } from "../view/pages/Dashboard/orders";
import { Menu } from "../view/pages/Dashboard/menu";
import { Users } from "../view/pages/Dashboard/users";
import { Profile } from "../view/pages/Dashboard/profile";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/teste" element={<PageLoader />}></Route> {/* APENAS TESTE! TELA DE SPLASH PARA TRANSIÇÃO DE ROTAS! */}
        </Route>

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
