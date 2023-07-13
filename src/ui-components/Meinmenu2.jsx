/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Meinmenu from "./Meinmenu";
import { View } from "@aws-amplify/ui-react";
export default function Meinmenu2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="414px"
      height="2167px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Meinmenu2")}
      {...rest}
    >
      <Meinmenu
        width="414px"
        height="2167px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "mein menu")}
      ></Meinmenu>
    </View>
  );
}
