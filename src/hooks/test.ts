// import { usePay } from "./useID";
// import { useId } from "react";
// const testGetId = () => {
//   const { getId } = useId();

//   // if you have wagpay id
//   getId({
//     id: "satyam@wagpay",
//   })
//     .then((res) => console.log(res))
//     .catch((e) => console.error(e));

//   // if you have signed msg

//   getId({
//     signedMsg: "0x00000",
//   })
//     .then((res) => console.log(res))
//     .catch((e) => console.error(e));
// };

// testGetId();

// const testCreateId = () => {
//   const { createId } = useId();

//   createId({
//     wagpay_id: "chan@wagpay",
//     default: {
//       address: "0x444A900d6CC95F8d4568cB6e3096f518B9606294",
//       network: {
//         id: 2,
//         name: "polygon",
//         chain_type: "evm",
//       },
//     },
//     others: [
//       {
//         address: "0x444A900d6CC95F8d4568cB6e3096f518B9606294",
//         network: [
//           {
//             id: 1,
//             name: "ethereum",
//             chain_type: "evm",
//           },
//           {
//             id: 2,
//             name: "polygon",
//             chain_type: "evm",
//           },
//         ],
//       },
//     ],
//     forced_same_chain_payment: false,
//     signedMsg: "", // signed message from default address
//   })
//     .then((res: any) => console.log(res))
//     .catch((e: any) => console.error(e));
// };

// const testPayment = () => {
//   const { payment } = usePay();

//   payment(
//     {
//       to_id: "satyam@wagpay",
//       amount: "10000000",
//     },
//     {
//       from_id: "chan@wagpay",
//       from_address: "0x444A900d6CC95F8d4568cB6e3096f518B9606294", // address from id which user wants to pay from
//       from_chain: "1", // wagpay chain id
//       from_token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", // token address which user wants to pay
//     }
//   )
//     .then((res) => console.log(res))
//     .catch((e) => console.error(e));
// };
