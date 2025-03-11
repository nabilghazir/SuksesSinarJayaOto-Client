import { NavLink } from "react-router"
import { NavProps } from "./nav-props"
import { Box, Typography } from "@mui/material"
import { customTheme } from "../../theme/theme"

export const NavItems:React.FC<NavProps> = ({name,path}) => {
  return (
    <NavLink to={path} style={{textDecoration:"none"}} >
        {({isActive})=> (
            <Box
            className={`navlist ${isActive ? "active" : ""}`}
            sx={{
              color:customTheme.palette.common.white
            }}>
                <Typography
                sx={{
                  fontWeight:"bold",
                  fontSize:"17.5px"
                }}>
                  {name}
                </Typography>
            </Box>
        )}
    </NavLink>
  )
}
