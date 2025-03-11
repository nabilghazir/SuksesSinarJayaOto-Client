import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/system";

export const LokasiHeader = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
    return (
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: isSmallScreen ? "30px" : "40px",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Lokasi
      </Typography>
    );
  };