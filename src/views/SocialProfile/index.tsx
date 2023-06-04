import { usePage } from "@/context/PageContext";
import {
  GenericContainer,
  GenericContent,
  GenericTitle,
} from "../GenericLayout";
import { ViewContainer, ViewCard, ViewCardLogo, ViewCardText } from "./style";
import { FC, useEffect, useState } from "react";
import { getSocialByUser } from "@/subgraph/getSocialByUser";
import { getIpfsData } from "@/utils/helper";
import Spinner from "@/components/Loaders/Spinner";
import Image from "next/image";
import { AccountsMetaMapping, AccountsType } from "@/utils/linkedAccounts";
import WorldIDLogo from "@/assets/icons/WorldID.svg";

interface IProps {
  address: string;
}

interface IAttribute {
  trait_type: string;
  value: string;
}

interface IData {
  github: string;
  twitter: string;
  telegram: string;
  instagram: string;
  cid: string;
  isVerified: boolean;
  credential_type: string;
}

const SocialProfile: FC<IProps> = ({ address }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IData>({
    github: "",
    twitter: "",
    telegram: "",
    instagram: "",
    cid: "",
    isVerified: false,
    credential_type: "",
  });

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

  const fetchSocialIpfs = async () => {
    setLoading(true);
    try {
      const user = await getSocialByUser(address);

      if (user && user.hash) {
        const { data } = await getIpfsData(user.hash, "socialFile.json");
        const { attributes } = data;

        setData({
          github: getValue(attributes, "github"),
          twitter: getValue(attributes, "twitter"),
          telegram: getValue(attributes, "telegram"),
          instagram: getValue(attributes, "instagram"),
          cid: user.hash,
          isVerified: !!getValue(attributes, "world id"),
          credential_type: getValue(attributes, "world id"),
        });
      }
    } catch (error) {
      console.log("Error from fetchSocialIpfs", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (address) {
      fetchSocialIpfs();
    }
  }, [address]);

  const translateCredentialType = (_type: string) => {
    switch (_type) {
      case "phone":
        return "Mid Tier";
      case "orb":
        return "High Tier";
      default:
        return "Low Tier";
    }
  };

  const constructExternalSocialLink = (
    _type: AccountsType,
    handler: string
  ) => {
    switch (_type) {
      case AccountsType.GITHUB:
        return `https://github.com/${handler}`;
      case AccountsType.TWITTER:
        return `https://twitter.com/${handler}`;
      case AccountsType.INSTAGRAM:
        return `https://www.instagram.com/${handler}`;
      default:
        return ``;
    }
  };

  return (
    <GenericContainer>
      <GenericTitle>{address}</GenericTitle>
      <GenericContent>
        {loading ? (
          <Spinner />
        ) : (
          <ViewContainer>
            {data.credential_type && (
              <ViewCard>
                <ViewCardLogo>
                  <Image src={WorldIDLogo} alt="WorldID" fill />
                </ViewCardLogo>
                <ViewCardText>
                  Unique Verification:{" "}
                  {translateCredentialType(data.credential_type)}
                </ViewCardText>
              </ViewCard>
            )}
            {data.github && (
              <ViewCard
                href={constructExternalSocialLink(
                  AccountsType.GITHUB,
                  data.github
                )}
                target="_blank"
              >
                <ViewCardLogo>
                  <Image
                    src={AccountsMetaMapping[AccountsType.GITHUB].logo}
                    alt={AccountsMetaMapping[AccountsType.GITHUB].label}
                    fill
                  />
                </ViewCardLogo>
                <ViewCardText>{data.github}</ViewCardText>
              </ViewCard>
            )}
            {data.twitter && (
              <ViewCard
                href={constructExternalSocialLink(
                  AccountsType.TWITTER,
                  data.twitter
                )}
                target="_blank"
              >
                <ViewCardLogo>
                  <Image
                    src={AccountsMetaMapping[AccountsType.TWITTER].logo}
                    alt={AccountsMetaMapping[AccountsType.TWITTER].label}
                    fill
                  />
                </ViewCardLogo>
                <ViewCardText>{data.twitter}</ViewCardText>
              </ViewCard>
            )}
            {data.instagram && (
              <ViewCard
                href={constructExternalSocialLink(
                  AccountsType.INSTAGRAM,
                  data.instagram
                )}
                target="_blank"
              >
                <ViewCardLogo>
                  <Image
                    src={AccountsMetaMapping[AccountsType.INSTAGRAM].logo}
                    alt={AccountsMetaMapping[AccountsType.INSTAGRAM].label}
                    fill
                  />
                </ViewCardLogo>
                <ViewCardText>{data.instagram}</ViewCardText>
              </ViewCard>
            )}
            {data.telegram && (
              <ViewCard>
                <ViewCardLogo>
                  <Image
                    src={AccountsMetaMapping[AccountsType.TELEGRAM].logo}
                    alt={AccountsMetaMapping[AccountsType.TELEGRAM].label}
                    fill
                  />
                </ViewCardLogo>
                <ViewCardText>{data.telegram}</ViewCardText>
              </ViewCard>
            )}
          </ViewContainer>
        )}
      </GenericContent>
    </GenericContainer>
  );
};

export default SocialProfile;
