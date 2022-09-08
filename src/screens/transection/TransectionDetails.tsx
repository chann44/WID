import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SIZES } from "../../../assets/theme";
import SVGImg from "../../../assets/tx.svg";
import { getChain, getToken } from "fetcch-chain-data";
import { ethers } from "ethers";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const TransectionDetails = ({ navigation, route }: any) => {
  const [completed, setCompleted] = useState(false)
  const [failed, setFailed] = useState(false)
  const getStatus = async (bridge: any, fromChain: any, toChain: any, txHash: any) => {
    const result = await axios.get('https://li.quest/v1/status', {
        params: {
            bridge,
            fromChain,
            toChain,
            txHash,
        }
    });
    return result.data;
  }
  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        if(!route.params.config.same_chain) {
          if(!completed && !failed) {
            getStatus(route.params.config.to_details.bridge, route.params.chain.chainId, getChain({ internalId: route.params.config.to_details.to_chain })?.chainId.toString(), route.params.tx)
              .then(res => {
                console.log(res.status === 'DONE')
                if(res.status === 'DONE') {
                  setCompleted(true)
                } else {
                  setCompleted(false)
                }
      
                if(res.status === 'FAILED') {
                  setFailed(true)
                } else {
                  setFailed(false)
                }
              })
              .catch(e => {
                console.log(e)
              })
          } else {
            clearInterval(interval)
          }
        }
      }, 5000)
  
      return () => clearInterval(interval)
    }, [])
  )
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        paddingHorizontal: 8,
        paddingVertical: SIZES.extraLarge,
        flex: 1,
      }}
    >
      <View>
        <ScrollView>
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
                navigation.navigate("Home");
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color={"#fff"}
                size={30}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Transaction Details</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 40,
              width: "100%",
            }}
          >
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <SVGImg />
            </View>
            <View style={{ ...styles.rowView, marginVertical: 20 }}>
              <Text style={styles.text}>Transaction status</Text>
              
              {route.params.config.same_chain && <Text style={{ ...styles.text, color: "green" }}>Completed</Text>}
              {!route.params.config.same_chain && 
                <>
                  {completed ? 
                    <Text style={{ ...styles.text, color: "green" }}>Completed</Text>
                    :
                    <>
                      {failed ? <Text style={{ ...styles.text, color: "red" }}>Failed</Text> : <Text style={{ ...styles.text, color: "yellow" }}>Pending</Text>}
                    </>
                  }
                </>
              }
            </View>
            <View style={{ ...styles.rowView }}>
              <Text style={styles.text}>Transaction type</Text>
              <Text style={{ ...styles.text, fontWeight: "500", fontSize: 18 }}>
                send
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#111111",
                margin: 12,
                width: "100%",
                paddingVertical: 18,
                paddingHorizontal: 12,
              }}
            >
              {/* sender details */}
              <Text
                style={{
                  ...styles.text,
                  paddingHorizontal: 12,
                  marginBottom: 15,
                  fontSize: 19,
                }}
              >
                Sender details
              </Text>
              <View style={{ ...styles.rowView, alignItems: "center" }}>
                <Text
                  style={{ ...styles.text, fontSize: 17, marginBottom: 12 }}
                >
                  Amount sent
                </Text>
                <View>
                  <Text style={styles.text}>{ethers.utils.formatUnits(route.params.config.amount, route.params.token.decimals)} {route.params.token.symbol}</Text>
                  <Text
                    style={{ ...styles.text, fontSize: 10, textAlign: "right" }}
                  >
                    on {route.params.chain.name}
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.rowView, marginTop: 12 }}>
                <Text style={styles.text}>Sender address</Text>
                <Text style={styles.text}>{route.params.config.from_id.wagpay_id}</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#111111",
                margin: 12,
                width: "100%",
                paddingVertical: 18,
                paddingHorizontal: 12,
              }}
            >
              {/* sender details */}
              <Text
                style={{
                  ...styles.text,
                  paddingHorizontal: 12,
                  marginBottom: 15,
                  fontSize: 19,
                }}
              >
                Recipient details
              </Text>
              <View style={{ ...styles.rowView, alignItems: "center" }}>
                <Text
                  style={{ ...styles.text, fontSize: 17, marginBottom: 12 }}
                >
                  Amount sent
                </Text>
                <View>
                  <Text style={styles.text}>{!route.params.config.same_chain ? ethers.utils.formatUnits(route.params.config.to_details.amount, getToken(route.params.config.to_details.to_token, route.params.config.to_details.to_chain).decimals) : ethers.utils.formatUnits(route.params.config.amount, getToken(route.params.config.to_details.to_token, route.params.config.to_details.to_chain).decimals)} {getToken(route.params.config.to_details.to_token, route.params.config.to_details.to_chain).symbol}</Text>
                  <Text
                    style={{ ...styles.text, fontSize: 10, textAlign: "right" }}
                  >
                    on {getChain({internalId: Number(route.params.config.to_details.to_chain)})?.name.toString()}
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.rowView, marginTop: 12 }}>
                <Text style={styles.text}>Sender address</Text>
                <Text style={styles.text}>{route.params.config.to_id.wagpay_id}</Text>
              </View>
            </View>

            <View
              style={{
                ...styles.rowView,
                marginBottom: 15,
              }}
            >
              <Text style={styles.text}>Payment IDs</Text>
              <Text style={{ ...styles.text, ...styles.dull }}>
                {route.params.config.payment_request_id}
              </Text>
            </View>
            <View
              style={{
                ...styles.rowView,
                marginBottom: 15,
              }}
            >
              <Text style={styles.text}>Transaction hash</Text>
              <Text style={{ ...styles.text, ...styles.dull }}>
                {route.params.tx.substring(0, 7)}... 
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.rowView,
              marginBottom: 15,
            }}
          >
            <Text style={styles.text}>Date & Time</Text>
            <Text style={{ ...styles.text, ...styles.dull }}>
              {new Date().getDate()}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginBottom: 20,
              backgroundColor: "#2C2C2C",
              marginHorizontal: 20,
              padding: 8,
              marginTop: 20,
              borderRadius: 30,
            }}
            onPress={() => {
              Linking.openURL(
                `${getChain({ internalId: route.params.chain.internalId })?.explorers[0].url}/tx/${route.params.tx}`
              );
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#D3CCFF",
              }}
            >
              View transaction on explorer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TransectionDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
  text: {
    color: "white",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 12,
  },
  dull: {
    color: "#777E90",
  },
});
