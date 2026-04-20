import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { DashboardLayout } from "./components/DashboardLayout";
import { BerandaPage } from "./pages/BerandaPage";
import { KelolaDataIndukPage } from "./pages/KelolaDataIndukPage";
import { ManajemenGiziPage } from "./pages/ManajemenGiziPage";
import { OperasionalPage } from "./pages/OperasionalPage";
import { LaporanPage } from "./pages/LaporanPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <BerandaPage />,
      },
      {
        path: "kelola-data-induk",
        element: <KelolaDataIndukPage />,
      },
      {
        path: "manajemen-gizi",
        element: <ManajemenGiziPage />,
      },
      {
        path: "operasional",
        element: <OperasionalPage />,
      },
      {
        path: "laporan",
        element: <LaporanPage />,
      },
    ],
  },
]);
