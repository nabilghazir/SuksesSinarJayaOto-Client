import { useState } from "react";
import { Stack, Drawer, IconButton, Box } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { NavItems } from "./nav-items";
import { NavComponent } from "./nav-component";
import { customTheme } from "../../theme/theme";

export const NavList = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "20px",
          display: { xs: "none", md: "flex" },
        }}
      >
        {NavComponent.map((item, index) => (
          <NavItems key={index} {...item} />
        ))}
      </Stack>

      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: "flex", md: "none" },
          color: "white",
          position: "absolute",
          right: 20,
          top: 20,
        }}
      >
        <FiMenu size={24} />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px",
            backgroundColor: customTheme.palette.grey[100],
            height: "100vh",
          }}
        >
          {NavComponent.map((item, index) => (
            <NavItems key={index} {...item} />
          ))}
        </Box>
      </Drawer>
    </>
  );
};
