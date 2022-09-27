import { pay } from "@fetcch/id";

const API_KEY = "d4d8b48e-8554-4a95-a182-560b0e9d9731";

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

  const payment = (config: any, user_config: any): Promise<any> => {
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
