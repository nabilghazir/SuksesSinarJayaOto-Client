import {
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Stack, Box } from "@mui/system";
import { customTheme } from "../../theme/theme";
import { useState } from "react";

export const Banner = () => {
  const [hover, setHover] = useState(false);
  const isMobile = useMediaQuery(customTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(customTheme.breakpoints.down("md"));

  return (
    <Stack sx={{ width: "100%", alignItems: "center", position: "relative" }}>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          width: isMobile ? "100%" : isTablet ? "95%" : "90%",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: isMobile ? "0" : "10px",
          overflow: "hidden",
          position: "relative",
          transition: "0.3s ease-in-out",
        }}
      >
        <Box
          component="img"
          src="./Banner.jpeg"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            transition: "0.3s ease-in-out",
          }}
        />

        <Card
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            padding: isMobile ? "10px" : "30px",
          }}
        >
          <CardContent
            sx={{ textAlign: "center", maxWidth: isMobile ? "90%" : "80%" }}
          >
            <Typography
              variant={isMobile ? "subtitle1" : isTablet ? "h6" : "h5"}
              fontWeight="bold"
              sx={{ mb: isMobile ? 0.5 : 1 }}
            >
              Mobil Anda Bermasalah? Hubungi Sukses Sinar Jaya Oto!
            </Typography>
            <Typography
              variant={isMobile ? "caption" : isTablet ? "body2" : "body1"}
              sx={{ mt: isMobile ? 0.5 : 1 }}
            >
              Kami Siap Memperbaiki Mobil Anda! Profesional - Cepat - Murah
              Melayani Kerusakan Segala Jenis Mobil di Area Jakarta Dan Depok
            </Typography>
            <Button
              variant="contained"
              href="https://wa.me/6281387127689"
              target="_blank"
              sx={{
                mt: isMobile ? 1 : 2,
                fontSize: isMobile ? "12px" : isTablet ? "14px" : "16px",
                padding: isMobile
                  ? "4px 8px"
                  : isTablet
                  ? "6px 12px"
                  : "10px 20px",
                color: customTheme.palette.common.black,
                backgroundColor: "rgba(236, 223, 204, 1)",
                "&:hover": {
                  backgroundColor: "rgb(255, 239, 217)",
                  fontWeight: "600",
                },
              }}
            >
              Hubungi Kami!
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};
