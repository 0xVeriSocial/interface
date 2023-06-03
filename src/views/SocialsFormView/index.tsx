import { useState } from "react";
import {
  GenericContainer,
  GenericContent,
  GenericTitle,
} from "../GenericLayout";
import { AccountsType } from "@/utils/linkedAccounts";
import LinkedAccountsConnector from "@/components/LinkedAccountsConnector";
import LinkedAccountsOTPConnector from "@/components/LinkedAccountsOTPConnector";
import LinkedAccountsConnectorDummy from "@/components/LinkedAccountsConnectorDummy";
import ActionButton from "@/components/ActionButton";
import { useLinkedAccounts } from "@/context/AccountsContext";
import { useWorldID } from "@/context/WorldIDContext";
import useMintProfile from "@/hooks/useMintProfile";
import { generateSocialProof } from "@/services/internal";
import toast from "react-hot-toast";

const SocialsFormView = () => {
  const { state: LinkedAccountsState } = useLinkedAccounts();
  const { state: WorldIDState } = useWorldID();

  const {
    transactionHash,
    error,
    loading,
    submitProof,
    clearData,
    replaceProof,
  } = useMintProfile();

  const handleMint = async () => {
    const { data } = await generateSocialProof(
      LinkedAccountsState.github,
      LinkedAccountsState.twitter,
      LinkedAccountsState.instagram,
      LinkedAccountsState.telegram,
      WorldIDState.credential_type
    );
    console.log("new cid", data);
    await submitProof(data);
    toast.success("Minting your Social Proof!");
  };

  const handleUpdate = async () => {
    const { data } = await generateSocialProof(
      LinkedAccountsState.github,
      LinkedAccountsState.twitter,
      LinkedAccountsState.instagram,
      LinkedAccountsState.telegram,
      WorldIDState.credential_type
    );
    console.log("update cid", data);
    await replaceProof(data);
    toast.success("Updating your Social Proof!");
  };

  return (
    <GenericContainer>
      <GenericTitle>Enter your socials</GenericTitle>
      <GenericContent>
        <LinkedAccountsConnector type={AccountsType.GITHUB} />
        <LinkedAccountsConnectorDummy type={AccountsType.TWITTER} />
        <LinkedAccountsConnectorDummy type={AccountsType.INSTAGRAM} />
        <LinkedAccountsOTPConnector type={AccountsType.TELEGRAM} />

        {LinkedAccountsState.cid ? (
          <ActionButton
            label="Update"
            loading={loading}
            handleClick={handleUpdate}
          />
        ) : (
          <ActionButton
            label="Mint"
            loading={loading}
            handleClick={handleMint}
          />
        )}
      </GenericContent>
    </GenericContainer>
  );
};

export default SocialsFormView;
