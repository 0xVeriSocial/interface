import { usePage } from "@/context/PageContext";
import {
  GenericContainer,
  GenericContent,
  GenericTitle,
} from "../GenericLayout";
import { ViewContainer, ViewText } from "./style";
import { NEXT_PAGE } from "@/context/actionType";
import ActionButton from "@/components/ActionButton";
import WorldID from "@/components/WorldID";

const ConnectWorldIDView = () => {
  const { dispatch: PageDispatch } = usePage();

  const goToPage3 = () => {
    PageDispatch({ type: NEXT_PAGE });
  };

  return (
    <GenericContainer>
      <GenericTitle>Onboarding WorldID</GenericTitle>
      <GenericContent>
        <ViewContainer>
          <ViewText>Verify your identity with WorldID</ViewText>
          <WorldID />
          {/* <div style={{ width: "200px", marginTop: "20px" }}>
            <ActionButton
              label="Skip"
              loading={false}
              handleClick={goToPage3}
            />
          </div> */}
        </ViewContainer>
      </GenericContent>
    </GenericContainer>
  );
};

export default ConnectWorldIDView;
