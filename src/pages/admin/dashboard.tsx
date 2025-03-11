import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router";
import { customTheme } from "../../theme/theme";

const Dashboard = () => {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 5, color: customTheme.palette.common.white }}
      >
        Selamat Datang, Admin!
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "rgba(236,223,204,0.7)" }}>
        Kelola konten Anda dengan mudah dari sini.
      </Typography>

      <Stack spacing={3} sx={{ mt: 3 }}>
        {/* Katalog Card */}
        <Card sx={{ bgcolor: "#FFB200", color: "white", width: "80%" }}>
          <CardContent>
            <Typography variant="h6">Katalog</Typography>
            <Typography variant="body2">Kelola produk Anda di sini</Typography>
            <Button
              variant="contained"
              component={Link}
              to="/admin/katalog"
              sx={{
                mt: 1,
                bgcolor: customTheme.palette.common.white,
                color: customTheme.palette.common.black,
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              Pergi ke Katalog
            </Button>
          </CardContent>
        </Card>

        {/* Galeri Card */}
        <Card sx={{ bgcolor: "#EB5B00", color: "white", width: "80%" }}>
          <CardContent>
            <Typography variant="h6">Galeri</Typography>
            <Typography variant="body2">Kelola galeri gambar Anda</Typography>
            <Button
              variant="contained"
              component={Link}
              to="/admin/galeri"
              sx={{
                mt: 1,
                bgcolor: customTheme.palette.common.white,
                color: customTheme.palette.common.black,
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              Pergi ke Galeri
            </Button>
          </CardContent>
        </Card>

        {/* Tentang Card */}
        <Card sx={{ bgcolor: "#854836", color: "white", width: "80%" }}>
          <CardContent>
            <Typography variant="h6">Tentang</Typography>
            <Typography variant="body2">
              Perbarui informasi perusahaan Anda
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/admin/tentang"
              sx={{
                mt: 1,
                bgcolor: customTheme.palette.common.white,
                color: customTheme.palette.common.black,
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              }}
            >
              Pergi ke Tentang
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
};

export default Dashboard;
