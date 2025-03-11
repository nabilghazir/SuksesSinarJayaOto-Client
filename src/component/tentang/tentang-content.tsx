import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tentangData } from "./tentang-data";

export const TentangContent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack alignItems="center" spacing={3} padding={4}>
      <Stack spacing={2} width="100%" alignItems="center">
        {tentangData.map((pdf) => (
          <Card
            key={pdf.id}
            sx={{
              maxWidth: 600,
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              padding: "4px",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height={isSmallScreen ? "200" : "auto"}
              sx={{
                width: isSmallScreen ? "100%" : "40%",
                objectFit: "cover",
              }}
              image={pdf.image}
              alt={pdf.title}
            />
            <CardContent
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: isSmallScreen ? "16px" : "20px",
                }}
              >
                {pdf.title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleDownload(pdf.url, pdf.title)}
                sx={{
                  mt: 1,
                  color: "black",
                  backgroundColor: "rgba(236, 223, 204, 1)",
                  "&:hover": {
                    backgroundColor: "rgb(255, 239, 217)",
                    fontWeight: "600",
                  },
                  fontSize: isSmallScreen ? "12px" : "16px",
                }}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
