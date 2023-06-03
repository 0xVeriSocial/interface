import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import sfPro from "@/utils/fontConfig";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai, gnosisChiado } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import config from "@/utils/config";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import { AccountsProvider } from "@/context/AccountsContext";
import { WorldIDProvider } from "@/context/WorldIDContext";
import { PageProvider } from "@/context/PageContext";

const { chains, provider } = configureChains(
  [polygonMumbai, gnosisChiado],
  [alchemyProvider({ apiKey: config.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "VeriSocial",
  projectId: config.WALLET_CONNECT_PROJECTID,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sfPro.style.fontFamily} !important;
        }
      `}</style>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize="compact">
          <GlobalStyle />
          <Toaster position="bottom-right" reverseOrder={false} />
          <PageProvider>
            <WorldIDProvider>
              <AccountsProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AccountsProvider>
            </WorldIDProvider>
          </PageProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
