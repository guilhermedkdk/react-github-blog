import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Repository } from "./pages/Repository";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path=":user" element={<User />} />
        <Route path=":user/:repository" element={<Repository />} />
      </Route>
    </Routes>
  );
}
