import { Stack } from "@mui/system";
import {
  KatalogContent,
  KatalogHeader,
} from "../../component/katalog/katalog-content";

export const KatalogPage = () => {
  return (
    <Stack>
      <KatalogHeader />
      <KatalogContent />
    </Stack>
  );
};

export default KatalogPage;
