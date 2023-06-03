import React from "react";
import { PropsWithChildren } from "react";
import { NEXT_PAGE, JUMP_TO_PAGE } from "../actionType";

type NextPage = {
  type: "NEXT_PAGE";
};

type JumpToPage = {
  type: "JUMP_TO_PAGE";
  page: number;
};

type Action = NextPage | JumpToPage;

type State = {
  page: number;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  page: 1,
} as const;

const PageContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function pageReducer(state: State, action: Action): State {
  switch (action.type) {
    case NEXT_PAGE: {
      return {
        ...state,
        page: state.page++,
      } as State;
    }

    case JUMP_TO_PAGE: {
      const { page } = action;
      return {
        ...state,
        page,
      };
    }

    default: {
      return state;
    }
  }
}

function PageProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(pageReducer, initialState);
  const value = { state, dispatch };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

function usePage() {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePage must be used within a MetaMaskProvider");
  }
  return context;
}

export { PageProvider, usePage };
