import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import USDCIMAGE from "../../assets/USDCicon.png";
import Button from "./Button";

export interface item {
  key: string;
  value: string;
  logo?: ImageSourcePropType;
}

interface DropDownProps {
  data: item[];
  setValue: Function;
  handleClosePress: Function;
  snapPoints: any;
  bottomSheetRef: any;
  handleSheetChanges: any;
  onChange: any;
}

export const DropDown = ({
  data,
  setValue,
  handleClosePress,
  snapPoints,
  bottomSheetRef,
  handleSheetChanges,
  onChange,
}: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <BottomSheet
      onChange={onChange}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
    >
      <BottomSheetScrollView>
        {data.map((chain) => {
          return (
            <View
              style={{
                padding: 10,
              }}
              key={chain.key}
            >
              <TouchableOpacity
                onPress={() => {
                  setValue(chain.value);
                  handleClosePress();
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: chain.logo as string
                  }}
                  style={{ height: 32, width: 32 }}
                />
                <Text style={{ marginLeft: 10, fontFamily: "TTMedium" }}>
                  {chain.value}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <Button onPress={() => handleClosePress()} title="Back" />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};
