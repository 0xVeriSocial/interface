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
import TextField from "../TextField";
import { SET_INSTAGRAM, SET_TWITTER } from "@/context/actionType";

interface IProps {
  type: AccountsType;
}

const LinkedAccountsConnectorDummy: FC<IProps> = ({ type }) => {
  const currentAccount = AccountsMetaMapping[type];
  const { state, dispatch } = useLinkedAccounts();
  const [handler, setHandler] = useState<string>("");

  const handleHandlerChange = (_handler: string) => {
    // setHandler(_handler);

    if (type === AccountsType.TWITTER) {
      dispatch({ type: SET_TWITTER, handler: _handler });
    }

    if (type === AccountsType.INSTAGRAM) {
      dispatch({ type: SET_INSTAGRAM, handler: _handler });
    }
  };

  useEffect(() => {
    if (type === AccountsType.INSTAGRAM) {
      setHandler(state.instagram);
    }

    if (type === AccountsType.TWITTER) {
      setHandler(state.twitter);
    }
  }, []);

  return (
    <LinkedAccountsConnectorContainer>
      <LinkedAccountsConnectorLogo>
        <Image src={currentAccount.logo} alt={currentAccount.label} fill />
      </LinkedAccountsConnectorLogo>
      <TextField
        label={currentAccount.label}
        type="text"
        value={handler}
        handleChange={handleHandlerChange}
      />
    </LinkedAccountsConnectorContainer>
  );
};

export default LinkedAccountsConnectorDummy;
