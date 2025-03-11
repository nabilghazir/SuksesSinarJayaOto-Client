import { Typography } from "@mui/material";
import { useMediaQuery, Stack } from "@mui/system";
import { customTheme } from "../../theme/theme";

export const LokasiAddress = () => {
    const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
    return (
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "30px" : "40px",
            color: customTheme.palette.common.white,
          }}
        >
          Bengkel Mobil Mengerjakan Diesel & Bensin
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "16px" : "20px",
            color: "rgba(236, 223, 204, 0.7)",
          }}
        >
          Pekayon, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota
          Jakarta
        </Typography>
      </Stack>
    );
  };