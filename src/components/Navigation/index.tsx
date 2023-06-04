import Image from "next/image";
import {
  MainNavigationContainer,
  MainNavigationContent,
  MainNavigationItem,
  MainNavigationItemIcon,
  MainNavigationItemText,
  MainNavigationLogo,
  MainNavigationTitle,
} from "./style";
import MainLogo from "@/assets/logo/TransparentBg.svg";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WorldID from "../WorldID";
import { useAccount } from "wagmi";

const Navigation: FC = () => {
  const { address } = useAccount();

  /**
   * Fix UI-hydration Issue
   */
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (domLoaded) {
    return (
      <MainNavigationContainer>
        <MainNavigationLogo>
          <Image src={MainLogo} alt="VeriSocial Logo" width={64} height={64} />
          <MainNavigationTitle>VeriSocial</MainNavigationTitle>
        </MainNavigationLogo>
        {address && (
          <MainNavigationContent>
            <WorldID />
            <ConnectButton showBalance={false} chainStatus="none" />
          </MainNavigationContent>
        )}
      </MainNavigationContainer>
    );
  }

  return <></>;
};

export default Navigation;
