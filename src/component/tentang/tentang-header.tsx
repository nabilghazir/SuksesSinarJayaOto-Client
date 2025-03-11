import { Typography, useMediaQuery, useTheme } from "@mui/material";

export const TentangHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: isSmallScreen ? "30px" : "40px",
        color: "white",
        textAlign: "center",
        mt: 4,
      }}
    >
      Tentang Kami
    </Typography>
  );
};
