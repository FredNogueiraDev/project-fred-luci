import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
// import { Login } from "../view/pages/Login";
// import { Register } from "../view/pages/Register";
// import { Dashboard } from "../view/pages/Dashboard";
import { AuthLayout } from "../view/layouts/AuthLayouts";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<h1>LOGIN</h1>}></Route>
            <Route path="/register" element={<h1>register</h1>}></Route>
          </Route>
        </Route>


        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<h1>Dashboard</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
