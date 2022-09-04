import axios from "axios"

const API_KEY = "FEX8KK9SREHZTD874Z8T82CU77NYP5I5H9"

export const useBalance = () => {
    const getNativeBalance = async (address: string, chain: string) => {
        try {
            const URL = "https://api.polygonscan.com/api"
    
            const params = {
                module: 'account',
                action: 'balance',
                address: address,
                apiKey: API_KEY
            }
    
            const res = await axios.get(URL, {
                params: params
            })
    
            const data = await res.data
    
            return data
        } catch (e) {
            throw e
        }
    }

    const getERC20Balance = async (address: string, chain: string) => {
        try {
            const URL = `https://deep-index.moralis.io/api/v2/${address}/erc20`
    
            const params = {
                chain: '0x89'
            }
    
            const res = await axios.get(URL, {
                params: params,
                headers: {
                    'x-api-key': "2sGps1ah6lIVQogNYcu46kcX7pcDVR4sSTkpHjKwGG04HrBq67b7i3LsZTRyXFhF"
                }
            })
    
            const data = await res.data
    
            return data
        } catch (e) {
            throw e
        }
    }

    return {
        getNativeBalance,
        getERC20Balance
    }
}