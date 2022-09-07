import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../assets/theme";
import { useAppContext } from "../context";
import { DropDown } from "../components/DropDown";
import { chainData, getChain } from "fetcch-chain-data";
import Modal from 'react-native-modalbox';

export const Profile = ({ navigation }: any) => {
  const { wid, chain, setChain } = useAppContext();
  const [isOpen, setIsOpen] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [swipeToClose, setSwipeToClose] = useState(true)
  const [sliderValue, setSliderValue] = useState(0.3)

  const updateChain = (cD: string) => {
    const c = chainData.find((c) => c.name === cD);

    if (!c) return;

    const chain = getChain({ internalId: c.internalId });

    setChain(chain);
  };

  function onClose() {
    console.log('Modal just closed');
  }

  function onOpen() {
    console.log('Modal just opened');
  }

  function onClosingState() {
    console.log('the open/close of the swipeToClose just changed');
  }

  function renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.headerText} key={i}>Elem {i}</Text>);
    }

    return list;
  }

  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "#000",
        paddingTop: SIZES.extraLarge,
        paddingBottom: -42,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View
            style={{
              marginTop: 50,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 37,
                marginBottom: 15,
                textAlign: "center",
                color: "white",
              }}
            >
              {wid?.wagpay_id.split("@")[0]}
            </Text>
            <View
              style={{
                marginTop: 12,
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 15,
                width: 300,
                borderWidth: 1,
                borderColor: "#374151",
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                {wid?.wagpay_id}
              </Text>

              <TouchableOpacity>
                <MaterialIcons name="content-copy" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
            
            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 15,
                paddingHorizontal: 15,
                width: 300,
                borderWidth: 1,
                borderColor: "#374151",
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                {'0xf83bc109f36e766ce369f81c807c33bec4120270'.substring(0, 6) + '...'}
              </Text>

              <TouchableOpacity>
                <MaterialIcons name="content-copy" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
            
          </View>
          <View
            style={{
              height: "60%",
              backgroundColor: "#2C2C2C",
              padding: 15,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              justifyContent: "space-between",
            }}
          >
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 19,
                  marginVertical: 12,
                  backgroundColor: "#1F1F1F",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Manage wallets
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color="#fff"
                  size={30}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  marginBottom: 5
                }}
              >
                Change Chain
              </Text>
              <Modal
                style={[styles.modal, styles.modal1]}
                ref={"modal1"}
                swipeToClose={swipeToClose}
                onClosed={onClose}
                onOpened={onOpen}
                onClosingState={onClosingState}>
                  <Text style={styles.headerText}>Basic modal</Text>
                  <Button title={`Disable swipeToClose(${swipeToClose ? "true" : "false"})`} onPress={() => setSwipeToClose(!swipeToClose)}/>
              </Modal>
              {/* <DropDown
                setValue={(e) => updateChain(e.toString())}
                value={chain ? chain.name : ""}
                textColor="white"
                bgcolor="#000"
                items={chainData.reverse().map((c) => {
                  return { key: c.internalId.toString(), value: c.name };
                })}
              /> */}
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#374151",
                  padding: 12,
                  alignItems: "center",
                  borderRadius: SIZES.large,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    color: "white",
                  }}
                >
                  show secret recovery phrase
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 12,
                  borderRadius: SIZES.large,
                  backgroundColor: "red",
                  padding: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    color: "white",
                  }}
                >
                  Remove Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000000",
    flex: 1,
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22.5,
    color: "#ffffff",
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal1: {
    height: 230,
    backgroundColor: "#3B5998"
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
});
