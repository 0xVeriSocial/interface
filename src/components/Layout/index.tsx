import Meta from "../Meta";
import { LayoutContainer, LayoutContent } from "./style";
import Navigation from "../Navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // This will stop any animation happening before the page is loaded
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const layoutElement = document.getElementById(`layout`);
      if (layoutElement) {
        layoutElement.classList.remove("stopAnimation");
      }
    }
  }, []);

  const renderNavigation = router.pathname !== "/proof/[cid]";

  return (
    <>
      <Meta />
      <LayoutContainer id="layout" className="stopAnimation">
        {renderNavigation && <Navigation />}
        <LayoutContent>{children}</LayoutContent>
      </LayoutContainer>
    </>
  );
};
export default Layout;
