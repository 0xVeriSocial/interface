import { usePage } from "@/context/PageContext";
import { useWorldID } from "@/context/WorldIDContext";
import { JUMP_TO_PAGE } from "@/context/actionType";
import useFetchProfile from "@/hooks/useFetchProfile";
import ConnectWorldIDView from "@/views/ConnectWorldIDView";
import HomeView from "@/views/HomeView";
import SocialsFormView from "@/views/SocialsFormView";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const PageNav = {
  CONNECT_WALLET: 1,
  CONNECT_WORLDID: 2,
  SOCIAL_FORM: 3,
};

export default function Home() {
  const { address } = useAccount();
  const { state: WorldIDState } = useWorldID();
  const { state: PageState, dispatch: PageDispatch } = usePage();

  const { loading: fetchingProfile } = useFetchProfile(address as string);
  /**
   * Fix UI-hydration Issue
   */
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (address) {
      if (WorldIDState.isVerified && WorldIDState.credential_type) {
        PageDispatch({ type: JUMP_TO_PAGE, page: 3 });
        return;
      }
      PageDispatch({ type: JUMP_TO_PAGE, page: 2 });
      return;
    }
    PageDispatch({ type: JUMP_TO_PAGE, page: 1 });
    return;
  }, [address, WorldIDState]);

  if (domLoaded) {
    if (fetchingProfile) {
      return <p>Loading</p>;
    }

    if (PageState.page === PageNav.CONNECT_WALLET) {
      return <HomeView />;
    }

    if (PageState.page === PageNav.CONNECT_WORLDID) {
      return <ConnectWorldIDView />;
    }

    if (PageState.page === PageNav.SOCIAL_FORM) {
      return <SocialsFormView />;
    }
  }

  return <></>;
}
