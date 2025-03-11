import { createBrowserRouter } from "react-router";
import { ClientLayout, ClientLayoutInfinite } from "../layout/client";
import { GaleriPage } from "../pages/client/galeri";
import { KatalogPage } from "../pages/client/katalog";
import { LokasiPage } from "../pages/client/lokasi";
import { TentangPage } from "../pages/client/tentang";
import AdminLayout from "../layout/admin";
import Login from "../pages/admin/login";
import AdminDashboard from "../pages/admin/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayoutInfinite />,
  },
  {
    element: <ClientLayout />,
    children: [
      {
        path: "/galeri",
        element: <GaleriPage />,
      },
      {
        path: "/katalog",
        element: <KatalogPage />,
      },
      {
        path: "/lokasi",
        element: <LokasiPage />,
      },
      {
        path: "/tentang",
        element: <TentangPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
