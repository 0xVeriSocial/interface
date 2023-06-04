import config from "@/utils/config";
import axios from "axios";

const BASE_URL = "https://api.nft.storage";

const apiConfig = {
  headers: {
    // accept: "application/json",
    // "x-agent-did": config.NFTSTORAGE_APIKEY,
    // "Content-Type": "image/*",
    Authorization: `Bearer ${config.NFTSTORAGE_APIKEY}`,
  },
};

export const uploadFile = async (imageFile: File) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/upload`,
      imageFile,
      apiConfig
    );
    if (response.status === 200) {
      return {
        data: response.data.value.cid as string,
        error: "",
      };
    }
    return {
      data: "",
      error: "Error generating WorldID Proof",
    };
  } catch (error: any) {
    return {
      data: "",
      error: error.toString(),
    };
  }
};
