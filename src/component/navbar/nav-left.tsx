import { Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router";
import { customTheme } from "../../theme/theme";

export const NavLeft = () => {
  const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));

  return isMobile ? (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: "12.5px",
          color: customTheme.palette.common.white,
        }}
      >
        <img
          src="./logo.png"
          alt="Logo"
          style={{
            width: "60px",
          }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "12.5px",
          }}
        >
          CV. Sukses Sinar Jaya Oto
        </Typography>
      </Stack>
    </NavLink>
  ) : (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          color: customTheme.palette.common.white,
        }}
      >
        <img
          src="./logo.png"
          alt="Logo"
          style={{
            width: "80px",
          }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "17.5px",
          }}
        >
          CV. Sukses Sinar Jaya Oto
        </Typography>
      </Stack>
    </NavLink>
  );
};
