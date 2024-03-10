import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  disableBottomSafeArea?: boolean,
  disableTopSafeArea?: boolean,
  disableSidesSafeArea?: boolean,
  children: ReactNode,
  style?: StyleProp<ViewStyle>,
}

export const ScreenWrapper = (props: Props) => {

  const { disableBottomSafeArea = false, 
    disableTopSafeArea = false, 
    disableSidesSafeArea = false, 
    children,
    style
  } = props;

  const insets = useSafeAreaInsets();

  const safeArea: ViewStyle = {};

  if (!disableBottomSafeArea) {
    safeArea.marginBottom = insets.bottom;
  }

  if (!disableTopSafeArea) {
    safeArea.marginTop = insets.top;
  }

  if (!disableSidesSafeArea) {
    safeArea.marginRight = insets.right;
    safeArea.marginLeft = insets.left;
  }

  return <View style={[{flex: 1}, style, safeArea]}>
    {children}
  </View>;
};
