import { useLinkedAccounts } from "@/context/AccountsContext";
import { useWorldID } from "@/context/WorldIDContext";
import { SET_ALL, UPDATE_WORLDID_SUBINFO } from "@/context/actionType";
import { getSocialByUser } from "@/subgraph/getSocialByUser";
import { getIpfsData } from "@/utils/helper";
import { useEffect, useState } from "react";

interface IAttribute {
  trait_type: string;
  value: string;
}

const useFetchProfile = (address: string) => {
  const { dispatch: LinkedAccountDispatch } = useLinkedAccounts();
  const { dispatch: WorldIdDispatch } = useWorldID();
  const [loading, setLoading] = useState<boolean>(false);

  const getValue = (attrs: IAttribute[], type: string) => {
    const pair = attrs.filter(
      (attr) => attr.trait_type.toLowerCase() === type.toLowerCase()
    )[0];
    if (pair) {
      return pair.value;
    } else {
      return "";
    }
  };

  const fetchProofIpfs = async () => {
    setLoading(true);
    try {
      const user = await getSocialByUser(address);

      if (user && user.hash) {
        const { data } = await getIpfsData(user.hash, "socialFile.json");
        const { attributes } = data;
        LinkedAccountDispatch({
          type: SET_ALL,
          github: getValue(attributes, "github"),
          twitter: getValue(attributes, "twitter"),
          telegram: getValue(attributes, "telegram"),
          instagram: getValue(attributes, "instagram"),
          cid: user.hash,
        });

        WorldIdDispatch({
          type: UPDATE_WORLDID_SUBINFO,
          isVerified: !!getValue(attributes, "world id"),
          credential_type: getValue(attributes, "world id"),
        });
      }
    } catch (error) {
      console.log("Error from fetchProofIpfs", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (address) {
      fetchProofIpfs();
    }
  }, [address]);

  return { loading };
};

export default useFetchProfile;
