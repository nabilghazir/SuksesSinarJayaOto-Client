import { Outlet } from "react-router";
import { InfiniteScrollContainer } from "./infinite-scroll";
import { Navbar } from "./navbar";

export const ClientLayoutInfinite = () => {
  return (
    <>
      <Navbar />
      <InfiniteScrollContainer />
    </>
  );
};

export const ClientLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};