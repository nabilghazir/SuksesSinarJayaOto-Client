import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { HomePage } from "../pages/client/home";
import { GaleriPage } from "../pages/client/galeri";
import { KatalogPage } from "../pages/client/katalog";
import { LokasiPage } from "../pages/client/lokasi";
import { TentangPage } from "../pages/client/tentang";

export const InfiniteScrollContainer = () => {
  const [loadedPages, setLoadedPages] = useState<string[]>(["/home"]);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const pagesOrder = ["/galeri", "/katalog", "/lokasi", "/tentang"];
          const nextPage = pagesOrder.find(
            (page) => !loadedPages.includes(page)
          );

          if (nextPage) {
            setLoadedPages((prev) => [...prev, nextPage]);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadedPages]);

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <HomePage />
      </motion.div>

      {loadedPages.includes("/galeri") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <GaleriPage />
        </motion.div>
      )}

      {loadedPages.includes("/katalog") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <KatalogPage />
        </motion.div>
      )}

      {loadedPages.includes("/lokasi") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <LokasiPage />
        </motion.div>
      )}

      {loadedPages.includes("/tentang") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <TentangPage />
        </motion.div>
      )}

      <div
        ref={observerRef}
        style={{ height: 50, background: "transparent" }}
      />

      {loadedPages.length < 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CircularProgress />
        </motion.div>
      )}
    </Box>
  );
};
