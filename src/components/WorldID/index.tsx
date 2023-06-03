import dynamic from "next/dynamic";
import { VerificationResponse } from "@worldcoin/id";
import axios from "axios";
import Image from "next/image";
import WorldIDIcon from "@/assets/icons/WorldID.svg";
import { WorldIdLogo, WorldIdContainer, WorldIdText } from "./style";
import { useState } from "react";
// import useRegisterUser from "@/hooks/useRegisterUser";
// import useCheckRegisteredUser from "@/hooks/useCheckRegisteredUser";
import { useWorldID } from "@/context/WorldIDContext";
import { generateWorldIdProof } from "@/services/internal";
import { useAccount } from "wagmi";
import { NEXT_PAGE, UPDATE_WORLDID_VERIFIED } from "@/context/actionType";
import { usePage } from "@/context/PageContext";

const IDKitWidget = dynamic(
  () => import("@worldcoin/idkit" as any).then((mod) => mod.IDKitWidget),
  { ssr: false }
) as any;

const VerificationAction = "Sign In WorldID";
const VerificationSignal = "Verification with WORLDID";
const WorldCoin_AppId = "app_staging_80251b57de090b576b3c8c1d0eab9cfd";

const WorldID = () => {
  const { address } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const { state: WorldIDState, dispatch: WorldIDDispatch } = useWorldID();
  const { dispatch: PageDispatch } = usePage();

  // VerificationResponse
  const handleVerify = async (verificationResponse: any) => {
    setLoading(true);

    // console.log("verificationResponse", verificationResponse);

    WorldIDDispatch({
      type: UPDATE_WORLDID_VERIFIED,
      isVerified: true,
      credential_type: verificationResponse.credential_type,
      merkle_root: verificationResponse.merkle_root,
      nullifier_hash: verificationResponse.nullifier_hash,
      proof: verificationResponse.proof,
    });
    PageDispatch({ type: NEXT_PAGE });

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <WorldIdContainer>
          <WorldIdLogo>
            <Image src={WorldIDIcon} alt="World Id Icon" fill />
          </WorldIdLogo>
          <WorldIdText>Verifying</WorldIdText>
        </WorldIdContainer>
      ) : (
        <>
          {false ? (
            <WorldIdContainer>
              <WorldIdLogo>
                <Image src={WorldIDIcon} alt="World Id Icon" fill />
              </WorldIdLogo>
              <WorldIdText>Verified</WorldIdText>
            </WorldIdContainer>
          ) : (
            <>
              {WorldIDState.isVerified ? (
                <WorldIdContainer>
                  <WorldIdLogo>
                    <Image src={WorldIDIcon} alt="World Id Icon" fill />
                  </WorldIdLogo>
                  <WorldIdText>Verified</WorldIdText>
                </WorldIdContainer>
              ) : (
                <IDKitWidget
                  app_id={WorldCoin_AppId} // obtain this from developer.worldcoin.org
                  action={VerificationAction}
                  signal={VerificationSignal}
                  action_description="Verify with WorldID for generation for VeriSocial"
                  enableTelemetry
                  onSuccess={(result: any) => handleVerify(result)} // pass the proof to the API or your smart contract
                >
                  {({ open }: { open: any }) => (
                    <WorldIdContainer onClick={open}>
                      <WorldIdLogo>
                        <Image src={WorldIDIcon} alt="World Id Icon" fill />
                      </WorldIdLogo>
                      <WorldIdText>Verify</WorldIdText>
                    </WorldIdContainer>
                  )}
                </IDKitWidget>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default WorldID;
