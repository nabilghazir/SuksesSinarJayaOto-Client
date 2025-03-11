import { Stack } from "@mui/system";
import {
  GaleriContent,
  GaleriHeader,
} from "../../component/galeri/galeri-content";

export const GaleriPage = () => {
  return (
    <Stack alignItems="center">
      <GaleriHeader />
      <GaleriContent />
    </Stack>
  );
};

export default GaleriPage;
