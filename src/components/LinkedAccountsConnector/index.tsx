import { FC, useEffect, useState } from "react";
import {
  LinkedAccountsConnectorButton,
  LinkedAccountsConnectorContainer,
  LinkedAccountsConnectorLogo,
  LinkedAccountsConnectorText,
} from "./styles";
import { useLinkedAccounts } from "@/context/AccountsContext";
import Image from "next/image";
import { AccountsType, AccountsMetaMapping } from "@/utils/linkedAccounts";

interface IProps {
  type: AccountsType;
}

const LinkedAccountsConnector: FC<IProps> = ({ type }) => {
  let externalAccountWindow;
  const currentAccount = AccountsMetaMapping[type];
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const { state, dispatch } = useLinkedAccounts();
  const [handler, setHandler] = useState<string>("");

  const handleLogin = async () => {
    externalAccountWindow = window.open(
      currentAccount.backendUrl,
      `_blank`,
      `height=500,width=800`
    );
  };

  useEffect(() => {
    const validateToken = () => {
      const username = localStorage.getItem(currentAccount.localStorage);
      if (username) {
        setHandler(username);
        dispatch({
          type: currentAccount.dispatchType,
          handler: username,
        });
        localStorage.removeItem(currentAccount.localStorage);
      }
    };

    validateToken();
    window.addEventListener("storage", validateToken);

    return () => {
      window.removeEventListener("storage", validateToken);
    };
  }, [state.github, state.twitter]);

  return (
    <LinkedAccountsConnectorContainer>
      <LinkedAccountsConnectorButton type="button" onClick={handleLogin}>
        <LinkedAccountsConnectorLogo>
          <Image src={currentAccount.logo} alt={currentAccount.label} fill />
        </LinkedAccountsConnectorLogo>
        {handler ? (
          <LinkedAccountsConnectorText>{handler}</LinkedAccountsConnectorText>
        ) : (
          <LinkedAccountsConnectorText>
            Login with {currentAccount.label}
          </LinkedAccountsConnectorText>
        )}
      </LinkedAccountsConnectorButton>
    </LinkedAccountsConnectorContainer>
  );
};

export default LinkedAccountsConnector;
