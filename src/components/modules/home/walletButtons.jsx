import { ConnectButton } from "@rainbow-me/rainbowkit";
import WagmiUtils from "../../../blockchain/wagmiUtils";
import "@rainbow-me/rainbowkit/styles.css";

const WalletButtons = () => {
  return (
    <>
      <WagmiUtils compo={<ConnectButton />} />
    </>
  );
};

export default WalletButtons;
