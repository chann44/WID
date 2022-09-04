import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { AsyncStorage } from "react-native";
import { _storeData } from "./screens/createWallet.js/createWalletSuccess";

export interface UserWalletInfo {
  password: number;
  seedPhrase: string;
  privateKey: string;
  address: string;
  id: string | null;
}

export interface WID {
  id: string;
  address: string;
  wagpay_id: string;
  provider: string;
  owner: string;
  phone_number: string;
}

interface AppContext {
  userWalletInfo: UserWalletInfo | null;
  setUserWalletInfo: Dispatch<SetStateAction<UserWalletInfo | null>>;
  importSeedPhrase: string;
  setImportSeedPhrase: Dispatch<SetStateAction<string>>;
  username: string;
  firstName: string;
  lastName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  setFirstName: Dispatch<SetStateAction<string>>;
  setLastName: Dispatch<SetStateAction<string>>;
  wid: WID | null;
  setWid: Dispatch<SetStateAction<WID | null>>;
}

const AppContext = createContext<AppContext>({} as AppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

interface IAppContextProps {
  children: ReactNode;
}

export const AppCOntextProveder = ({ children }: IAppContextProps) => {
  const [userWalletInfo, setUserWalletInfo] = useState<UserWalletInfo | null>(
    null
  );
  const [importSeedPhrase, setImportSeedPhrase] = useState<string>("");
  const [username, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [wid, setWid] = useState<WID | null>(null);
  const delteItem = async () => {
    try {
      const val = await AsyncStorage.removeItem("userwalletinfo");
    } catch (E) {
      console.log(E);
    }
  };

  // useEffect(() => {
  //   delteItem();
  // }, []);

  useEffect(() => {
    _storeData(userWalletInfo);
  }, [userWalletInfo]);

  const sharedState = {
    userWalletInfo,
    setUserWalletInfo,
    importSeedPhrase,
    setImportSeedPhrase,
    username,
    setUserName,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    wid,
    setWid,
  };

  return (
    <>
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
};