import { useRouter } from "next/router";
import { useEffect } from "react";
import { LOCAL_STORAGE_GITHUB_ACCESS_TOKEN } from "@/utils/constants";

const CallbackPage = () => {
  const router = useRouter();
  const { username } = router.query;

  const storeHandlerInLocalStorage = (username: string) => {
    localStorage.setItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN, username);
  };

  useEffect(() => {
    if (username) {
      storeHandlerInLocalStorage(username as string);
      window.close();
    }
  }, [username]);

  return <div>REDIRECTING</div>;
};

export default CallbackPage;
