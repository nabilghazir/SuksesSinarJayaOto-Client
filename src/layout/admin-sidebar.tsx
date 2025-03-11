import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import {
  Inventory,
  PhotoLibrary,
  Business,
  Dashboard,
} from "@mui/icons-material";
import { Link } from "react-router";
import { useTheme } from "@mui/material/styles";

const AdminSideBar = () => {
  const theme = useTheme(); // Access custom theme

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: theme.palette.grey[100], // Sidebar background
          color: theme.palette.common.white, // Text color
          padding: "16px",
        },
      }}
    >
      {/* Logo + Company Name */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ padding: "16px", mb: 2 }}
      >
        <img
          src="/logo.png"
          alt="Company Logo"
          style={{ width: 50, height: 50 }} // Adjusted for Drawer
        />
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.common.white,
              fontSize: "15px",
              whiteSpace: "nowrap",
            }}
          >
            CV. Sukses Sinar
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.common.white,
              fontSize: "15px",
              whiteSpace: "nowrap",
              marginLeft: "60px",
            }}
          >
            Jaya Oto
          </Typography>
        </Stack>
      </Stack>

      <List>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* Katalog */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/katalog">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <Inventory />
            </ListItemIcon>
            <ListItemText primary="Katalog" />
          </ListItemButton>
        </ListItem>

        {/* Galeri */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/galeri">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <PhotoLibrary />
            </ListItemIcon>
            <ListItemText primary="Galeri" />
          </ListItemButton>
        </ListItem>

        {/* Tentang */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/admin/tentang">
            <ListItemIcon sx={{ color: theme.palette.common.white }}>
              <Business />
            </ListItemIcon>
            <ListItemText primary="Tentang" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSideBar;
