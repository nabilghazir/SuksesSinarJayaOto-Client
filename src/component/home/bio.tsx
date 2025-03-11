import { Button, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { customTheme } from "../../theme/theme";

export const BioHome = () => {
  const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));

  return (
    <Stack
      sx={{
        marginTop: "50px",
        paddingX: isMobile ? "30px" : "100px",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "initial",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <Stack
        flex={isMobile ? 1 : 0.6}
        sx={{
          borderRight: isMobile ? "none" : "5px solid #ECDFCC",
          paddingRight: isMobile ? "0px" : "20px",
          marginBottom: isMobile ? "20px" : "0px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "30px" : "40px",
            color: customTheme.palette.common.white,
          }}
        >
          Mobil Anda Bermasalah?
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "30px" : "40px",
            color: customTheme.palette.common.white,
            marginBottom: "20px",
          }}
        >
          Hubungi Sukses Sinar Jaya Oto!
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "16px" : "20px",
            color: "rgba(236, 223, 204, 0.7)",
          }}
        >
          Kami Siap Memperbaiki Mobil Anda! Profesional - Cepat - Murah Melayani
          Kerusakan Segala Jenis Mobil di Area Jakarta Dan Depok
        </Typography>
      </Stack>

      <Stack
        flex={isMobile ? 1 : 0.4}
        sx={{
          paddingLeft: isMobile ? "0px" : "20px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "30px" : "40px",
            color: customTheme.palette.common.white,
            marginBottom: "20px",
          }}
        >
          Hubungi Kami !
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "18px",
            padding: isMobile ? "8px 16px" : "10px 20px",
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1EBE5D",
            },
          }}
          href="https://wa.me/6281387127689"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat via WhatsApp
        </Button>
      </Stack>
    </Stack>
  );
};
