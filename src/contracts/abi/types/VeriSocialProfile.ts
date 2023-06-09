/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface VeriSocialProfileInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "devMint(string)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "mint(address,uint256,uint256,uint256[8],string)": FunctionFragment;
    "name()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setTokenURI(uint256,string)": FunctionFragment;
    "setTokenURI(address,string)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "balanceOf"
      | "burn"
      | "devMint"
      | "getApproved"
      | "isApprovedForAll"
      | "mint"
      | "name"
      | "ownerOf"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "setTokenURI(uint256,string)"
      | "setTokenURI(address,string)"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "devMint", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BigNumberish[], string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenURI(uint256,string)",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenURI(address,string)",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "devMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenURI(uint256,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenURI(address,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Minted(address,uint256,string)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface MintedEventObject {
  to: string;
  tokenId: BigNumber;
  ipfsHash: string;
}
export type MintedEvent = TypedEvent<
  [string, BigNumber, string],
  MintedEventObject
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface VeriSocialProfile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VeriSocialProfileInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * Mint a NFT without WORLD ID Verification
     * @param cid The IPFS hash of the content to be minted
     */
    devMint(
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * @param cid The IPFS hash of the content to be minted
     * @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
     * @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
     * @param root The root of the Merkle tree (returned by the JS widget).
     * @param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)
     */
    mint(
      signal: string,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      proof: BigNumberish[],
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<[string]>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param tokenId token id
     */
    "setTokenURI(uint256,string)"(
      tokenId: BigNumberish,
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param userAddress token id
     */
    "setTokenURI(address,string)"(
      userAddress: string,
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the base URI for the token.
     * @param tokenId The token to get the base URI of
     */
    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  /**
   * See {IERC721-approve}.
   */
  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-balanceOf}.
   */
  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
   * Mint a NFT without WORLD ID Verification
   * @param cid The IPFS hash of the content to be minted
   */
  devMint(
    cid: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-getApproved}.
   */
  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * See {IERC721-isApprovedForAll}.
   */
  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
   * @param cid The IPFS hash of the content to be minted
   * @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
   * @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
   * @param root The root of the Merkle tree (returned by the JS widget).
   * @param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)
   */
  mint(
    signal: string,
    root: BigNumberish,
    nullifierHash: BigNumberish,
    proof: BigNumberish[],
    cid: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721Metadata-name}.
   */
  name(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-ownerOf}.
   */
  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-safeTransferFrom}.
   */
  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-safeTransferFrom}.
   */
  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-setApprovalForAll}.
   */
  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Update token CID
   * @param cid cid of the token
   * @param tokenId token id
   */
  "setTokenURI(uint256,string)"(
    tokenId: BigNumberish,
    cid: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Update token CID
   * @param cid cid of the token
   * @param userAddress token id
   */
  "setTokenURI(address,string)"(
    userAddress: string,
    cid: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * See {IERC721Metadata-symbol}.
   */
  symbol(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the base URI for the token.
   * @param tokenId The token to get the base URI of
   */
  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721-transferFrom}.
   */
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * Mint a NFT without WORLD ID Verification
     * @param cid The IPFS hash of the content to be minted
     */
    devMint(cid: string, overrides?: CallOverrides): Promise<void>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * @param cid The IPFS hash of the content to be minted
     * @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
     * @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
     * @param root The root of the Merkle tree (returned by the JS widget).
     * @param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)
     */
    mint(
      signal: string,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      proof: BigNumberish[],
      cid: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param tokenId token id
     */
    "setTokenURI(uint256,string)"(
      tokenId: BigNumberish,
      cid: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param userAddress token id
     */
    "setTokenURI(address,string)"(
      userAddress: string,
      cid: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the base URI for the token.
     * @param tokenId The token to get the base URI of
     */
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "Minted(address,uint256,string)"(
      to?: string | null,
      tokenId?: BigNumberish | null,
      ipfsHash?: null
    ): MintedEventFilter;
    Minted(
      to?: string | null,
      tokenId?: BigNumberish | null,
      ipfsHash?: null
    ): MintedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
  };

  estimateGas: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * Mint a NFT without WORLD ID Verification
     * @param cid The IPFS hash of the content to be minted
     */
    devMint(
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * @param cid The IPFS hash of the content to be minted
     * @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
     * @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
     * @param root The root of the Merkle tree (returned by the JS widget).
     * @param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)
     */
    mint(
      signal: string,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      proof: BigNumberish[],
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param tokenId token id
     */
    "setTokenURI(uint256,string)"(
      tokenId: BigNumberish,
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param userAddress token id
     */
    "setTokenURI(address,string)"(
      userAddress: string,
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the base URI for the token.
     * @param tokenId The token to get the base URI of
     */
    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * Mint a NFT without WORLD ID Verification
     * @param cid The IPFS hash of the content to be minted
     */
    devMint(
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Feel free to rename this method however you want! We've used `claim`, `verify` or `execute` in the past.
     * @param cid The IPFS hash of the content to be minted
     * @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget).
     * @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget).
     * @param root The root of the Merkle tree (returned by the JS widget).
     * @param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)
     */
    mint(
      signal: string,
      root: BigNumberish,
      nullifierHash: BigNumberish,
      proof: BigNumberish[],
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param tokenId token id
     */
    "setTokenURI(uint256,string)"(
      tokenId: BigNumberish,
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Update token CID
     * @param cid cid of the token
     * @param userAddress token id
     */
    "setTokenURI(address,string)"(
      userAddress: string,
      cid: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the base URI for the token.
     * @param tokenId The token to get the base URI of
     */
    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
