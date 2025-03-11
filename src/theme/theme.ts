import { createTheme } from "@mui/material";


export const customTheme = createTheme({
    palette: {
        primary: {
            main: "#181C14",
        },
        common:{
            white:"#ECDFCC",
            black:"#181C14"
        },
        grey:{
            "100":"#3C3D37"
        },
    },
    components:{
        MuiCard:{
            styleOverrides: {
                root: {
                  backgroundColor: "#3C3D37",
                },
              },
        }
    }
});