import { Stack } from "@mui/system";
import { Outlet } from "react-router";
import AdminSideBar from "./admin-sidebar";
// import { useSelector } from "react-redux";

const AdminLayout = () => {
  //   const user = useSelector((state: any) => state.auth.user);

  //   if (!user) {
  //     return <Navigate to="/login" replace />;
  //   }

  //   if (user.role !== "admin") {
  //     return <Navigate to="/" replace />;
  //   }

  return (
    <Stack
      sx={{
        flexDirection: "row",
      }}
    >
      <Stack flex={0.2}>
        <AdminSideBar />
      </Stack>
      <Stack flex={0.8}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AdminLayout;
