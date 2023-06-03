import { FC, useEffect, useState } from "react";
import {
  LinkedAccountsOTPConnectorLogo,
  LinkedAccountsOTPConnectorContainer,
  LinkedAccountsOTPConnectorHeader,
  LinkedAccountsOTPConnectorText,
} from "./styles";
import { useLinkedAccounts } from "@/context/AccountsContext";
import Image from "next/image";
import { AccountsType, AccountsMetaMapping } from "@/utils/linkedAccounts";
import TextField from "../TextField";
import ActionButton from "../ActionButton";
import { verifyTelegramOtp } from "@/services/internal";
import toast from "react-hot-toast";
import { SET_TELEGRAM } from "@/context/actionType";

interface IProps {
  type: AccountsType;
}

const LinkedAccountsConnector: FC<IProps> = ({ type }) => {
  const currentAccount = AccountsMetaMapping[type];

  const { state, dispatch } = useLinkedAccounts();
  const [verifiedHandler, setVerifiedHandler] = useState<string>();
  const [newlyVerifiedHandler, setNewlyVerifiedHandler] = useState<string>("");
  const [handler, setHandler] = useState<string>("");
  const [generatedOtp, setGeneratedOtp] = useState<string>("");

  const handleHandlerChange = (_handler: string) => {
    setHandler(_handler);
  };

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const triggerVerification = async () => {
    const isVerified = await verifyTelegramOtp(handler, generatedOtp);

    if (isVerified.data) {
      setNewlyVerifiedHandler(handler);

      if (type === AccountsType.TELEGRAM) {
        dispatch({ type: SET_TELEGRAM, handler });
      }
    } else {
      setHandler("");
      setGeneratedOtp("");
      toast.success("Unable to verify, please try again.");
    }
  };

  const generateOtpMessage = async () => {
    setGeneratedOtp(`VeriSocial${generateOtp()}`);
  };

  useEffect(() => {
    if (type === AccountsType.TELEGRAM) {
      setVerifiedHandler(state.telegram);
    }
  }, []);

  return (
    <LinkedAccountsOTPConnectorContainer>
      <LinkedAccountsOTPConnectorHeader>
        <LinkedAccountsOTPConnectorLogo>
          <Image src={currentAccount.logo} alt={currentAccount.label} fill />
        </LinkedAccountsOTPConnectorLogo>
        <LinkedAccountsOTPConnectorText>
          {newlyVerifiedHandler || (verifiedHandler ?? "Not Set")}
        </LinkedAccountsOTPConnectorText>
      </LinkedAccountsOTPConnectorHeader>

      {!newlyVerifiedHandler && (
        <>
          {generatedOtp ? (
            <div
              style={{ position: "relative", width: "100%", marginTop: "10px" }}
            >
              <LinkedAccountsOTPConnectorText>
                Head over to Telegram and search for VeriSocial_Bot and key in{" "}
                {generatedOtp}
              </LinkedAccountsOTPConnectorText>
              <LinkedAccountsOTPConnectorText>
                Once sent, key in the Telegram handler that you used to verify
                and click `Verify`
              </LinkedAccountsOTPConnectorText>
              <TextField
                label={currentAccount.label}
                value={handler}
                type="text"
                handleChange={handleHandlerChange}
              />
              <ActionButton
                label="Verify"
                loading={false}
                handleClick={triggerVerification}
              />
            </div>
          ) : (
            <div
              style={{ position: "relative", width: "100%", marginTop: "10px" }}
            >
              <ActionButton
                label="Generate OTP Message"
                loading={false}
                handleClick={generateOtpMessage}
              />
            </div>
          )}
        </>
      )}
    </LinkedAccountsOTPConnectorContainer>
  );
};

export default LinkedAccountsConnector;
