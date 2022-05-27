import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import HomeScreen from "./src/screens/HomeScreen";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Provider } from "react-redux";
import store from "./src/redux/store";

let persistor = persistStore(store);

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
