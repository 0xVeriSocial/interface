import React from "react";
import { PropsWithChildren } from "react";
import { UPDATE_WORLDID_SUBINFO, UPDATE_WORLDID_VERIFIED } from "../actionType";

type UpdateVerified = {
  type: "UPDATE_WORLDID_VERIFIED";
  isVerified: boolean;
  credential_type: string;
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
};

type UupdatePartialVerified = {
  type: "UPDATE_WORLDID_SUBINFO";
  isVerified: boolean;
  credential_type: string;
};

type Action = UpdateVerified | UupdatePartialVerified;

type State = {
  isVerified: boolean;
  credential_type: string;
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  isVerified: false,
  credential_type: "",
  merkle_root: "",
  nullifier_hash: "",
  proof: "",
} as const;

const WorldIDContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function worldIdReducer(state: State, action: Action): State {
  switch (action.type) {
    case UPDATE_WORLDID_VERIFIED: {
      const {
        isVerified,
        credential_type,
        merkle_root,
        nullifier_hash,
        proof,
      } = action;
      return {
        ...state,
        isVerified,
        credential_type,
        merkle_root,
        nullifier_hash,
        proof,
      } as State;
    }

    case UPDATE_WORLDID_SUBINFO: {
      const { isVerified, credential_type } = action;
      return {
        ...state,
        isVerified,
        credential_type,
      };
    }

    default: {
      return state;
    }
  }
}

function WorldIDProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(worldIdReducer, initialState);
  const value = { state, dispatch };

  return (
    <WorldIDContext.Provider value={value}>{children}</WorldIDContext.Provider>
  );
}

function useWorldID() {
  const context = React.useContext(WorldIDContext);
  if (context === undefined) {
    throw new Error("useWorldID must be used within a MetaMaskProvider");
  }
  return context;
}

export { WorldIDProvider, useWorldID };
