import { Box } from "@mui/system";
import { Banner } from "../../component/home/banner";
import { BioHome } from "../../component/home/bio";

export const HomePage = () => {
  return (
    <Box
      sx={{
        paddingBottom: "50px",
      }}
    >
      <Banner />
      <BioHome />
    </Box>
  );
};

export default HomePage;
