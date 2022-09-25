import { pay } from "@fetcch/id";

const API_KEY = "fa73b623-8a69-48f6-8997-6fc9cc3c8712";

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
    return pay({
      apiKey: API_KEY,
      data: {
        userConfig: user_config,
        toConfig: config,
      },
    });
  };

  return {
    payment,
  };
};
