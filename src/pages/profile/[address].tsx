import SocialProfile from "@/views/SocialProfile";
import { useRouter } from "next/router";

const ProofPage = () => {
  const router = useRouter();
  const { address } = router.query;

  return <SocialProfile address={address as string} />;
};

export default ProofPage;
