import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
export default class Information extends React.Component {
  render() {
    return (
      <View>
        <Text>Information</Text>
      </View>
    );
  }
}
