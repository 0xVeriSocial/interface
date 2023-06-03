import {
  GenericContainer,
  GenericContent,
  GenericTitle,
} from "../GenericLayout";
import { useAccount } from "wagmi";
import { usePage } from "@/context/PageContext";
import ActionButton from "@/components/ActionButton";
import { NEXT_PAGE } from "@/context/actionType";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ViewContainer, ViewText } from "./style";
import { useEffect } from "react";

const HomeView = () => {
  const { address } = useAccount();
  const { dispatch: PageDispatch } = usePage();

  const goToPage2 = () => {
    PageDispatch({ type: NEXT_PAGE });
  };

  useEffect(() => {
    if (address) {
      goToPage2();
    }
  }, [address]);

  return (
    <GenericContainer>
      <GenericTitle>Welcome to VeriSocial</GenericTitle>
      <GenericContent>
        <ViewContainer>
          <ViewText>Connect your wallet to get started</ViewText>
          <ConnectButton showBalance={false} chainStatus="none" />
          {address && (
            <div style={{ width: "200px", marginTop: "20px" }}>
              <ActionButton
                label="Next"
                loading={false}
                handleClick={goToPage2}
              />
            </div>
          )}
        </ViewContainer>
      </GenericContent>
    </GenericContainer>
  );
};

export default HomeView;
