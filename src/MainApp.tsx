import React from "react";
import { MainRouter } from "./routers/MainRouter";
import { UnauthRouter } from "./routers/UnauthRouter";
import { useAppSelector } from "./store";
import { useFonts, Alice_400Regular } from "@expo-google-fonts/alice";
import {theme} from "./utils/nativeBase";
import { NativeBaseProvider } from "native-base";


export const MainApp = () => {
  /***************		HOOKS		***************/

  const { isAuthenticated } = useAppSelector((state) => state.Auth);

  /***************		JSX		***************/

  let [fontsLoaded] = useFonts({
    Alice_400Regular
  });

  if (!fontsLoaded) {
    return <></>;
  }
  
  return (<NativeBaseProvider theme={theme}>
    {isAuthenticated ? <MainRouter /> : <UnauthRouter />}
  </NativeBaseProvider>)
};
