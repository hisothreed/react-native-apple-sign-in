import React from "react"
import { NativeModules, requireNativeComponent, Platform } from 'react-native';

const { AppleSignIn } = NativeModules;

export const RNSignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');


export const loginWithApple = () => {
  return AppleSignIn.requestAsync({
    scopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL],
  })
}


export default AppleSignIn;
