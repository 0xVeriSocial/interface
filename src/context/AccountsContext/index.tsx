import React from "react";
import { PropsWithChildren } from "react";
import {
  SET_ALL,
  SET_GITHUB,
  SET_INSTAGRAM,
  SET_TELEGRAM,
  SET_TWITTER,
} from "../actionType";
import {
  AccountsMetaMapping,
  AccountsType,
  IAccounts,
} from "@/utils/linkedAccounts";

type SET_GITHUB_ACTION = {
  type: "SET_GITHUB";
  handler: string;
};

type SET_INSTAGRAM_ACTION = {
  type: "SET_INSTAGRAM";
  handler: string;
};

type SET_TWITTER_ACTION = {
  type: "SET_TWITTER";
  handler: string;
};

type SET_TELEGRAM_ACTION = {
  type: "SET_TELEGRAM";
  handler: string;
};

type SET_ALL_ACTION = {
  type: "SET_ALL";
  github: string;
  twitter: string;
  telegram: string;
  instagram: string;
  cid: string;
};

export type ActionType =
  | typeof SET_GITHUB
  | typeof SET_TWITTER
  | typeof SET_TELEGRAM
  | typeof SET_INSTAGRAM;

type Action =
  | SET_GITHUB_ACTION
  | SET_TWITTER_ACTION
  | SET_TELEGRAM_ACTION
  | SET_INSTAGRAM_ACTION
  | SET_ALL_ACTION;

type State = {
  github: string;
  twitter: string;
  telegram: string;
  instagram: string;
  cid: string;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  github: "",
  twitter: "",
  telegram: "",
  instagram: "",
  cid: "",
} as const;

const AccountsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function linkedAccountsReducer(state: State, action: Action): State {
  switch (action.type) {
    case SET_GITHUB: {
      const { handler } = action;
      return {
        ...state,
        github: handler,
      } as State;
    }
    case SET_TWITTER: {
      const { handler } = action;
      return {
        ...state,
        twitter: handler,
      } as State;
    }
    case SET_TELEGRAM: {
      const { handler } = action;
      return {
        ...state,
        telegram: handler,
      } as State;
    }
    case SET_INSTAGRAM: {
      const { handler } = action;
      return {
        ...state,
        instagram: handler,
      } as State;
    }
    case SET_ALL: {
      const { github, twitter, telegram, instagram, cid } = action;
      return {
        ...state,
        github,
        twitter,
        telegram,
        instagram,
        cid,
      };
    }
    default: {
      return state;
    }
  }
}

function AccountsProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(
    linkedAccountsReducer,
    initialState
  );
  const value = { state, dispatch };

  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  );
}

function useLinkedAccounts() {
  const context = React.useContext(AccountsContext);
  if (context === undefined) {
    throw new Error("useLinkedAccounts doesn't have proper context");
  }
  return context;
}

export { AccountsProvider, useLinkedAccounts };
