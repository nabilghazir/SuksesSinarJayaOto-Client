import { LokasiAddress } from "../../component/lokasi/lokasi-address";
import { PinPoint } from "../../component/lokasi/lokasi-content";
import { LokasiHeader } from "../../component/lokasi/lokasi-header";

export const LokasiPage = () => {
  return (
    <>
      <LokasiHeader />
      <PinPoint />
      <LokasiAddress />
    </>
  );
};

export default LokasiPage;
