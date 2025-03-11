import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { customTheme } from "../../theme/theme";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          width: 400,
          p: 3,
          bgcolor: "grey.900",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            textAlign="center"
            gutterBottom
            sx={{ color: customTheme.palette.common.white }}
          >
            Admin
          </Typography>

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              input: { color: customTheme.palette.common.white },
              label: { color: customTheme.palette.common.white },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: customTheme.palette.common.white },
                "&:hover fieldset": {
                  borderColor: customTheme.palette.primary.light,
                },
                "&.Mui-focused fieldset": {
                  borderColor: customTheme.palette.primary.main,
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              input: { color: customTheme.palette.common.white },
              label: { color: customTheme.palette.common.white },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: customTheme.palette.common.white },
                "&:hover fieldset": {
                  borderColor: customTheme.palette.common.white,
                },
                "&.Mui-focused fieldset": {
                  borderColor: customTheme.palette.common.white,
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: "bold",
              letterSpacing: 1,
              transition: "0.3s ease-in-out",
              backgroundColor: customTheme.palette.common.white,
              color: customTheme.palette.common.black,
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "rgb(255, 239, 217)",
              },
            }}
          >
            Masuk
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
