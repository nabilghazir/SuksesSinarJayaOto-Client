import { Box, useMediaQuery, useTheme } from "@mui/system";
import { imagesData } from "./galeri-data";
import { Typography } from "@mui/material";

export const GaleriContent = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "10px",
          maxWidth: "1200px",
          width: "100%",
          padding: { xs: "30px", sm: "30px", md: "30px" },
        }}
      >
        {imagesData.map((item, index) => (
          <Box
            key={index}
            component="img"
            src={item.url}
            alt={`Gallery Image ${index + 1}`}
            sx={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </Box>
    </>
  );
};

export const GaleriHeader = () => {
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
      Galeri
    </Typography>
  );
};
