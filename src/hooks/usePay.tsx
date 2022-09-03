import { pay } from "@wagpay/id";

const API_KEY = "";

export const usePay = () => {
  // @types

  // export interface UserPayConfig {
  //     from_id: string
  //     from_address: string
  //     from_chain: string
  //     from_token: string
  // }

  // export interface PaymentConfig {
  //     to_id: string
  //     amount: string
  //     payment_request_id?: string
  //     to_token?: string
  //     to_address?: string
  //     to_chain?: string
  // }

  // config - PaymentConfig
  // user_config - UserPayConfig

  const payment = (config: any, user_config: any) => {
    return pay(config, user_config, API_KEY);
  };

  return {
    payment,
  };
};
