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
}

interface AppContext {
  userWalletInfo: UserWalletInfo | null;
  setUserWalletInfo: Dispatch<SetStateAction<UserWalletInfo | null>>;
  importSeedPhrase: string;

  setImportSeedPhrase: Dispatch<SetStateAction<string>>;
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

  const delteItem = async () => {
    try {
      const val = await AsyncStorage.removeItem("userwalletinfo");
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    delteItem();
  }, []);

  useEffect(() => {
    console.log(userWalletInfo);
  }, [userWalletInfo]);

  const sharedState = {
    userWalletInfo,
    setUserWalletInfo,
    importSeedPhrase,
    setImportSeedPhrase,
  };

  return (
    <>
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </>
  );
};
