import config from "@/utils/config";
import request, { gql } from "graphql-request";
import { UserEntity } from "./type";

export const getSocialByUser = async (address: string): Promise<UserEntity> => {
  try {
    const response: any = await request(
      config.SUBGRAPH_URL,
      gql`
        query getUsers($address: String) {
          users(where: { id: $address }) {
            hash
          }
        }
      `,
      {
        address: address.toLowerCase(),
      }
    );

    return (
      response.users[0] || {
        hash: "",
      }
    );
  } catch (error) {
    console.error("Subgraph", error);
    return {
      hash: "",
    };
  }
};
