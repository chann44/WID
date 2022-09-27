import "react-native-get-random-values";
import "@ethersproject/shims";
import { Chain, getChain } from "fetcch-chain-data";

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
	username: string;
	password: string;
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
	chain: Chain | undefined;
	setChain: Dispatch<SetStateAction<Chain | undefined>>;
	widUsername: string;
	setWidUsername: Dispatch<SetStateAction<string>>;
	API_KEY: string;
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
	const [chain, setChain] = useState<Chain | undefined>(
		getChain({ internalId: 12 })
	);
	const API_KEY = "5728e938-3bd4-4886-8943-26924a16c100";

	const [widUsername, setWidUsername] = useState("");

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
			AsyncStorage.setItem(
				"userwalletinfo",
				JSON.stringify(userWalletInfo)
			);
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
	// 	delteItem();
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
		chain,
		setChain,
		widUsername,
		setWidUsername,
		API_KEY,
	};

	return (
		<>
			<AppContext.Provider value={sharedState}>
				{children}
			</AppContext.Provider>
		</>
	);
};
