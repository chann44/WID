import { create_id, get_id } from "@wagpay/id";

const API_KEY = "fa73b623-8a69-48f6-8997-6fc9cc3c8712";

export const getId = (params: any) => {
  return get_id({
    apiKey: API_KEY,
    ...params,
  });
};

export const useID = () => {
  // @types - params

  // "wagpay did this"

  // {
  //     id?: "satyam@wagpay",
  //     signed_msg: "0x0"
  // }

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
