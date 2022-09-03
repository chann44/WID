import { create_id, get_id } from "@wagpay/id";

const API_KEY = "1015534407018348584";

export const useID = () => {
  // @types - params

  // "wagpay did this"

  // {
  //     id?: "satyam@wagpay",
  //     signed_msg: "0x0"
  // }

  const getId = (params: any) => {
    return get_id({
      apiKey: API_KEY,
      ...params,
    });
  };

  // @types params

  // wagpay_id: string
  // default: DefaultAddress,
  // others?: OtherAddress[],
  // forced_same_chain_payment?: boolean
  // phone_number?: string
  // requests?: Request[]
  // signedMsg: string

  // export interface Network {
  //     name: string
  //     id: string
  //     chain_type: ChainType
  // }

  // export interface DefaultAddress {
  //     address: string
  //     network: Network
  // }

  // export interface OtherAddress {
  //     address: string
  //     network: Network[]
  // }

  const createId = (params: any) => {
    return create_id(params, API_KEY);
  };

  return {
    getId,
    createId,
  };
};
