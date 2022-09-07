import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface item {
  key: string;
  value: string;
}

interface DropDownProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  textColor: string;
  bgcolor: string;
  items: item[];
}

export const DropDown = ({
  value,
  textColor,
  bgcolor,
  items,
  setValue,
}: DropDownProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{
          backfaceVisibility: "hidden",
          backgroundColor: "#000"
        }}
        onPress={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        <View
          style={{
            backgroundColor: bgcolor,
            padding: 12,
            borderStartColor: bgcolor,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: textColor,
              fontSize: 18,
            }}
          >
            {value}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" color="white" size={22} />
        </View>
        {showDropDown ? (
          <View
            style={{
              width: "100%",
              marginTop: 12,
              position: "absolute",
              top: 40,
              zIndex: 40,
              height: 100,
            }}
          >
            {items.map((item: item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setValue(item.value);
                    setShowDropDown(false);
                  }}
                >
                  <View
                    key={item.key}
                    style={{
                      backgroundColor: "#303030",
                      padding: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      {item.value}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
