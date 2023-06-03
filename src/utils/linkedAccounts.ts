import { ActionType } from "@/context/AccountsContext";
import {
  SET_GITHUB,
  SET_TWITTER,
  SET_TELEGRAM,
  SET_INSTAGRAM,
} from "@/context/actionType";
import {
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
  LOCAL_STORAGE_TWITTER_ACCESS_TOKEN,
} from "./constants";
import GithubLogo from "@/assets/logo/Github.svg";
import TwitterLogo from "@/assets/logo/Twitter.svg";
import TelegramLogo from "@/assets/logo/Telegram.svg";
import InstagramLogo from "@/assets/logo/Instagram.svg";
import config from "./config";

export enum AccountsType {
  GITHUB = "GITHUB",
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM",
  TELEGRAM = "TELEGRAM",
}

export interface IAccounts {
  label: string;
  logo: string;
  localStorage: string;
  dispatchType: ActionType;
  backendUrl?: string;
  contextVariable: string;
  type: AccountsType;
}

export const AccountsMetaMapping: { [key: string]: IAccounts } = {
  [AccountsType.GITHUB]: {
    label: "Github",
    logo: GithubLogo,
    type: AccountsType.GITHUB,
    localStorage: LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
    dispatchType: SET_GITHUB,
    backendUrl: `${config.BACKEND_API_URL}/github/login`,
    contextVariable: "github",
  },
  [AccountsType.TWITTER]: {
    label: "Twitter",
    logo: TwitterLogo,
    type: AccountsType.TWITTER,
    localStorage: LOCAL_STORAGE_TWITTER_ACCESS_TOKEN,
    dispatchType: SET_TWITTER,
    backendUrl: `${config.BACKEND_API_URL}/twitter/login`,
    contextVariable: "twitter",
  },
  [AccountsType.TELEGRAM]: {
    label: "Telegram",
    logo: TelegramLogo,
    type: AccountsType.TELEGRAM,
    localStorage: LOCAL_STORAGE_TWITTER_ACCESS_TOKEN,
    dispatchType: SET_TELEGRAM,
    // backendUrl: `${config.BACKEND_API_URL}/twitter/login`,
    contextVariable: "telegram",
  },
  [AccountsType.INSTAGRAM]: {
    label: "Instagram",
    logo: InstagramLogo,
    type: AccountsType.INSTAGRAM,
    localStorage: LOCAL_STORAGE_TWITTER_ACCESS_TOKEN,
    dispatchType: SET_INSTAGRAM,
    // backendUrl: `${config.BACKEND_API_URL}/twitter/login`,
    contextVariable: "instagram",
  },
};
