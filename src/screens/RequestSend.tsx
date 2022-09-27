import {
	ActivityIndicator,
	BackHandler,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../components/Button";
import { useFocusEffect } from "@react-navigation/native";
import { useBalance, usePay } from "../hooks";
import { useAppContext } from "../context";
import { BigNumber, ethers } from "ethers";
import {
	find_recipient,
	get_provider,
	is_native_token,
} from "@wagpay/id/dist/utils";
import { SIZES } from "../../assets/theme";
import { DropDown, item } from "../components/DropDown";
import { chainData, getChain, getToken } from "fetcch-chain-data";
import { tokens as tokenData } from "fetcch-chain-data/dist/tokens";
import { get_id } from "@wagpay/id";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import USDCIMAGE from "../../assets/USDCicon.png";
import { getId } from "@fetcch/id";

export const RequestSend = ({ navigation, route }: any) => {
	const { wid, userWalletInfo, scannedwid, setScannedWid, chain, API_KEY } =
		useAppContext();
	const { getERC20Balance } = useBalance();
	const { payment } = usePay();

	useEffect(() => {
		setScannedWid(route.params.request.fromId);
	}, []);

	const [next, setNext] = useState(false);

	const [address, setAddress] = useState("");
	const [amount, setAmount] = useState(
		ethers.utils.formatUnits(
			route.params.request.amount,
			route.params.token.decimals
		)
	);
	const [selectedChain, setSelectedChain] = useState(route.params.chain);
	const [token, setToken] = useState(route.params.token);
	const [tokens, setTokens] = useState(
		getERC20Balance(
			wid?.address as string,
			chain?.internalId.toString() as string
		)
	);
	const [loading, setLoading] = useState(false);

	const [isShowing, setIsShowing] = useState(false);
	const [isTokenShowing, setIsTokenShowing] = useState(false);

	const [paymentRequest, setPaymentRequest] = useState<any>({});

	const bottomSheetRef = useRef<BottomSheet>(null);
	const bottomTokenSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ["25%", "50%"], []);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	const handleClosePress = () => {
		if (!bottomSheetRef) return;

		(bottomSheetRef as React.MutableRefObject<BottomSheet>).current.close();
	};

	const handleOpenPress = () => {
		if (!bottomSheetRef) return;

		(
			bottomSheetRef as React.MutableRefObject<BottomSheet>
		).current.expand();
	};

	// callbacks
	const handleTokenSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	const handleTokenClosePress = () => {
		if (!bottomSheetRef) return;

		(
			bottomTokenSheetRef as React.MutableRefObject<BottomSheet>
		).current.close();
	};

	const handleTokenOpenPress = () => {
		if (!bottomSheetRef) return;

		(
			bottomTokenSheetRef as React.MutableRefObject<BottomSheet>
		).current.expand();
	};

	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => {
				if (isShowing) {
					bottomSheetRef.current?.close();
					return true;
				} else if (!isShowing) {
					navigation.goBack();
					return true;
				}
			};
			BackHandler.addEventListener("hardwareBackPress", onBackPress);
			return () =>
				BackHandler.removeEventListener(
					"hardwareBackPress",
					onBackPress
				);
		}, [bottomSheetRef, isShowing])
	);

	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => {
				if (isShowing) {
					bottomTokenSheetRef.current?.close();
					return true;
				} else if (!isTokenShowing) {
					navigation.goBack();
					return true;
				}
			};
			BackHandler.addEventListener("hardwareBackPress", onBackPress);
			return () =>
				BackHandler.removeEventListener(
					"hardwareBackPress",
					onBackPress
				);
		}, [bottomTokenSheetRef, isTokenShowing])
	);

	const takeNext = async () => {
		setLoading(true);
		await pay();
		setLoading(false);
		setNext(true);
	};

	const pay = async () => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(
					"payment started",
					{
						to_id: scannedwid,
						amount: ethers.utils
							.parseUnits(amount, token.decimals)
							.toString(),
					},
					{
						from_id: wid?.wagpay_id,
						from_address: wid?.address,
						from_token: token?.address.toLowerCase(),
						from_chain: selectedChain?.internalId.toString(),
					}
				);
				const request = await payment(
					{
						to_id: scannedwid,
						amount: ethers.utils
							.parseUnits(amount, token.decimals)
							.toString(),
					},
					{
						from_id: wid?.wagpay_id,
						from_address: wid?.address,
						from_token: token?.address.toLowerCase(),
						from_chain: selectedChain?.internalId.toString(),
					}
				);
				setPaymentRequest(request);

				resolve(request);
			} catch (e) {
				setNext(false);
				setLoading(false);
				console.log(e);
				reject(e);
			}
		});
	};

	const executePayment = async () => {
		setLoading(true);
		try {
			if (userWalletInfo) {
				let signer = new ethers.Wallet(userWalletInfo.privateKey);
				const provider = get_provider(
					selectedChain?.internalId.toString() as string,
					"y141okG6TC3PecBM1mL0BfST9f4WQmLx"
				);
				if (!provider) throw "Chain not supported";
				signer = signer.connect(provider);

				console.log(await (await signer.getBalance()).toString());

				if (
					!is_native_token(
						token?.address.toLowerCase() as string,
						"evm"
					)
				) {
					const erc20 = new ethers.Contract(
						token.address,
						[
							"function approve(address _spender, uint256 _value) public returns (bool success)",
						],
						signer
					);
					console.log(
						paymentRequest.transaction_data.to,
						ethers.utils
							.parseUnits(amount, token.decimals)
							.toString()
					);
					const tx = await erc20.approve(
						paymentRequest.transaction_data.to,
						ethers.utils
							.parseUnits(amount, token.decimals)
							.toString(),
						{
							gasPrice: provider.getGasPrice(),
							gasLimit: BigNumber.from(1500000),
						}
					);

					console.log(tx, "erc20");

					await tx.wait();
				}
				const { gasLimit, chainId, from, value, ...request } =
					paymentRequest.transaction_data;
				const tx = await signer.sendTransaction({
					gasLimit: BigNumber.from(15000000).toHexString(),
					value: ethers.utils.parseEther("0.01"),
					...request,
				});

				console.log(tx, "bridge");
				setLoading(false);
				navigation.navigate("TransectionSuccess", {
					tx: tx.hash,
					chain: selectedChain,
				});
			}
		} catch (e) {
			setNext(false);
			setLoading(false);
			console.log(e);
		}
	};

	const updateChain = (cD: string) => {
		console.log(cD, "cd ");
		const c = chainData.find((c) => c.name === cD);

		if (!c) return;

		const chain = getChain({ internalId: c.internalId });

		setSelectedChain(chain);
	};

	const updateToken = (t: string) => {
		const tokens =
			tokenData[selectedChain?.internalId.toString() as string];

		const tk = tokens.find((tkK: any) => tkK.symbol === t);

		if (!tk) return;
		console.log(tk);
		setToken(tk);
	};

	useEffect(() => {
		(async () => {
			console.log("alpaca", scannedwid);
			if (scannedwid) {
				const id = await getId({
					apiKey: API_KEY,
					data: {
						id: scannedwid,
					},
				});
				if (id) {
					console.log(id);
					setAddress(id.default.address);
				}
			}
		})();
	}, [scannedwid]);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#000000",
				width: "100%",
				paddingTop: 40,
				paddingBottom: 20,
				paddingHorizontal: 12,
			}}
		>
			<View style={styles.container}>
				<View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							paddingHorizontal: 4,
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("TabNavigation");
							}}
						>
							<MaterialIcons
								name="keyboard-arrow-left"
								color={"#fff"}
								size={30}
							/>
						</TouchableOpacity>
						<Text
							style={{
								fontFamily: "TTBold",
								...styles.headerText,
							}}
						>
							Send
						</Text>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Scanner");
							}}
						>
							<MaterialCommunityIcons
								name="line-scan"
								color={"#ffffff"}
								size={25}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							backgroundColor: "#111111",
							width: "100%",
							borderRadius: 8,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 12,
							marginTop: 60,
						}}
					>
						<View
							style={{
								width: "100%",
								paddingHorizontal: 16,
								backgroundColor: "#000000",
								borderRadius: 8,
								marginBottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 12,
									fontWeight: "500",
									lineHeight: 20,
									marginTop: 16,
									color: "#9B9B9B",
									fontFamily: "TTInterfaces",
								}}
							>
								Receipent wagpay id
							</Text>
							<TextInput
								defaultValue={scannedwid}
								onChangeText={(a) => setScannedWid(a)}
								placeholder="satyam@wagpay"
								style={{
									color: "white",
									paddingVertical: 16,
									fontSize: 16,
								}}
							/>
							<Text
								style={{
									fontSize: 10,
									fontWeight: "500",
									lineHeight: 20,
									marginTop: 16,
									color: "#9B9B9B",
								}}
							>
								{address}
							</Text>
						</View>
						<View
							style={{
								width: "100%",
								paddingHorizontal: 16,
								backgroundColor: "#000000",
								borderRadius: 8,
								marginBottom: 10,
							}}
						>
							<Text
								onPress={() => handleOpenPress()}
								style={{
									fontSize: 12,
									fontWeight: "500",
									lineHeight: 20,
									marginTop: 16,
									color: "#9B9B9B",
									fontFamily: "TTInterfaces",
								}}
							>
								Select Chain
							</Text>
							<Text
								onPress={() => handleOpenPress()}
								style={{
									fontSize: 16,
									fontWeight: "500",
									lineHeight: 20,
									marginTop: 16,
									color: "#9B9B9B",
									fontFamily: "TTBold",
									marginBottom: 20,
								}}
							>
								{selectedChain?.name}
							</Text>
						</View>
						<View
							style={{
								width: "100%",
								paddingHorizontal: 16,
								backgroundColor: "#000000",
								borderRadius: 8,
								marginBottom: 10,
							}}
						>
							<Text
								onPress={() => handleTokenOpenPress()}
								style={{
									fontSize: 12,
									fontWeight: "500",
									lineHeight: 20,
									marginTop: 16,
									color: "#9B9B9B",
									fontFamily: "TTInterfaces",
								}}
							>
								Select Token
							</Text>
							<Text
								onPress={() => handleTokenOpenPress()}
								style={{
									fontSize: 16,
									fontWeight: "500",
									lineHeight: 20,
									marginTop: 16,
									color: "#9B9B9B",
									fontFamily: "TTBold",
									marginBottom: 20,
								}}
							>
								{token?.name}
							</Text>
						</View>
						<View
							style={{
								width: "100%",
								paddingHorizontal: 16,
								backgroundColor: "#000000",
								borderRadius: 8,
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<View style={{ marginVertical: 16 }}>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "500",
										lineHeight: 20,
										color: "#9B9B9B",
										fontFamily: "TTMedium",
									}}
								>
									Amount
								</Text>
								<TextInput
									defaultValue={amount}
									onChangeText={(a) => setAmount(a)}
									placeholder="--"
									placeholderTextColor={"#ffff"}
									style={{
										fontSize: 18,
										color: "#fff",
										marginTop: 12,
										fontFamily: "TTInterfaces",
									}}
									keyboardType="number-pad"
								/>
							</View>
						</View>
						{next ? (
							<View
								style={{
									marginVertical: 10,
									width: "100%",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										color: "white",
										fontFamily: "TTInterfaces",
									}}
								>
									Gas fees
								</Text>
								<Text
									style={{
										color: "white",
										fontFamily: "TTInterfaces",
									}}
								>
									{paymentRequest &&
									typeof paymentRequest.transaction_data
										.gasLimit === "object"
										? parseInt(
												paymentRequest.transaction_data
													.gasLimit.hex
										  )
										: paymentRequest.transaction_data
												.gasLimit}
								</Text>
							</View>
						) : null}
					</View>
				</View>
				<View
					style={{
						width: "100%",
					}}
				>
					{next ? (
						<Button
							title={
								loading ? (
									<ActivityIndicator
										size={20}
										color="white"
									/>
								) : (
									"Send"
								)
							}
							onPress={() =>
								navigation.navigate("TransactionLoading", {
									selectedChain,
									paymentRequest,
									token,
								})
							}
						/>
					) : (
						<Button
							onPress={() => takeNext()}
							title={
								loading ? (
									<ActivityIndicator
										size={20}
										color="white"
									/>
								) : (
									"Next"
								)
							}
						/>
					)}
				</View>
			</View>
			<DropDown
				onChange={(idx: any) => {
					setIsShowing(idx < 1 ? false : true);
				}}
				setValue={updateChain}
				snapPoints={snapPoints}
				bottomSheetRef={bottomSheetRef}
				data={chainData.map((t) => {
					return {
						value: t.name,
						key: t.chainId,
						logo: t.icon,
					} as unknown as item;
				})}
				handleClosePress={handleClosePress}
				handleSheetChanges={handleSheetChanges}
			/>
			<DropDown
				onChange={(idx: any) => {
					setIsShowing(idx < 1 ? false : true);
				}}
				setValue={updateToken}
				snapPoints={snapPoints}
				bottomSheetRef={bottomTokenSheetRef}
				handleClosePress={handleTokenClosePress}
				handleSheetChanges={handleTokenSheetChanges}
				data={tokenData[
					selectedChain?.internalId.toString() as string
				].map((t: any) => {
					return { key: t.address, value: t.symbol, logo: t.logoURI };
				})}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#000000",
		flex: 1,
		paddingHorizontal: 1,
		justifyContent: "space-between",
	},
	headerText: {
		fontSize: 20,
		fontWeight: "600",
		lineHeight: 22.5,
		color: "#ffffff",
	},
});
