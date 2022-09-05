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
import { string } from "superstruct";
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
  scannedwid: string;
  setScannedWid: Dispatch<SetStateAction<string>>;
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
  const [scannedwid, setScannedWid] = useState<string>("");
  const delteItem = async () => {
    try {
      const val = await AsyncStorage.removeItem("userwalletinfo");
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    console.log(userWalletInfo, "Dsadsasa");
    if (userWalletInfo && userWalletInfo.address) {
      AsyncStorage.setItem("userwalletinfo", JSON.stringify(userWalletInfo));
      setWid({
        address: userWalletInfo.address,
        wagpay_id: userWalletInfo.id as string,
        id: "",
        provider: "",
        phone_number: "",
        owner: "",
      });
    }
  }, [userWalletInfo]);

  useEffect(() => {
    async () => {
      const a = await AsyncStorage.getItem("userwalletinfo");
      console.log(a);
    };
  }, []);

  // useEffect(() => {
  //   delteItem();
  // }, []);

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
    setScannedWid,
    scannedwid,
  };

  return (
    <>
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
};
