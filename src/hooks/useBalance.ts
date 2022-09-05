import axios from "axios"
import { BigNumber } from "ethers"
import { useAppContext } from "../context"

const API_KEY = "FEX8KK9SREHZTD874Z8T82CU77NYP5I5H9"

export const useBalance = () => {
    const getNativeBalance = async (address: string, chain: string) => {
        try {
            const URL = `https://deep-index.moralis.io/api/v2/${address}/balance`
    
            const params = {
                chain: BigNumber.from(chain).toHexString()
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

    const getERC20Balance = async (address: string, chain: string) => {        
        try {
            const URL = `https://deep-index.moralis.io/api/v2/${address}/erc20`
    
            const params = {
                chain: BigNumber.from(chain).toHexString()
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