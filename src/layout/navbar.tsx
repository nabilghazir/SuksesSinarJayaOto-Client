import { Stack, useMediaQuery } from "@mui/material";
import { NavLeft } from "../component/navbar/nav-left";
import { NavList } from "../component/navbar/navlist";
import { customTheme } from "../theme/theme";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: "80px" }}></div>

      <Stack
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "80px",
          backgroundColor: isScrolled
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          transition: "background-color 0.3s ease-in-out",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "10px 20px" : "10px 60px",
          boxSizing: "border-box",
          zIndex: 1000,
        }}
      >
        <NavLeft />
        <NavList />
      </Stack>
    </>
  );
};
