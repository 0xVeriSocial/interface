import axios from "axios";
import config from "@/utils/config";

interface IResponse {
  data: any;
  error: string;
}

const BACKEND_BASE_URL = config.BACKEND_API_URL;
const INTERNAL_BACKEND_URL = "http://localhost:3000/api";

export const generateWorldIdProof = async (
  address: string
): Promise<IResponse> => {
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/generateworld`, {
      address,
    });
    if (response.status === 200) {
      return {
        data: response.data.cid as string,
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

export const verifyTelegramOtp = async (handler: string, otp: string) => {
  try {
    const response = await axios.post(`${INTERNAL_BACKEND_URL}/telegram`, {
      handler,
      otp,
    });

    return {
      data: response.data.data,
      error: "",
    };
  } catch (error: any) {
    return {
      data: "",
      error: error.toString(),
    };
  }
};

export const generateSocialProof = async (
  github: string,
  twitter: string,
  instagram: string,
  telegram: string,
  worldId: string,
  image: string
): Promise<IResponse> => {
  try {
    // construct request body
    const requestBody: { [key: string]: string } = {};

    if (github) {
      requestBody["github"] = github;
    }

    if (twitter) {
      requestBody["twitter"] = twitter;
    }

    if (instagram) {
      requestBody["instagram"] = instagram;
    }

    if (telegram) {
      requestBody["telegram"] = telegram;
    }

    if (worldId) {
      requestBody["worldId"] = worldId;
    }

    requestBody["image"] =
      image ||
      "https://bafkreiccgw6xxhg2pvntkwd3gng2lqrzsowwb24lzhjiqzeeu4hc2t2kmm.ipfs.nftstorage.link/";

    const response = await axios.post(
      `${BACKEND_BASE_URL}/generate`,
      requestBody
    );
    if (response.status === 200) {
      return {
        data: response.data.cid as string,
        error: "",
      };
    }
    return {
      data: "",
      error: "",
    };
  } catch (error) {
    return {
      data: "",
      error: "",
    };
  }
};
