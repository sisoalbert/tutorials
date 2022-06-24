import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function App(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets%2F2f3fdefdb4074bcf9f6970cf71efad1b%2Fbd4f837c32a34823ae8346eef510da7a?width=998",
            }}
            style={styles.image1}
          />
          <View style={styles.view4}>
            <Text>Enter some text...</Text>
          </View>
        </View>
        <View style={styles.view5}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets%2F2f3fdefdb4074bcf9f6970cf71efad1b%2F0bd40a01efe3453c8288ec750e301b25?width=998",
            }}
            style={styles.image2}
          />
          <View style={styles.view6}>
            <Text>Enter some text...</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 200,
  },
  view2: { display: "flex" },
  view3: {
    display: "flex",
    flexDirection: "column",
    width: "calc(50% - 10px)",
    marginLeft: 0,
  },
  image1: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 30,
    textAlign: "center",
    height: "auto",
    minHeight: 200,
    minWidth: 200,
    overflow: "hidden",
  },
  view4: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 30,
    textAlign: "center",
    height: "auto",
  },
  view5: {
    display: "flex",
    flexDirection: "column",
    width: "calc(50% - 10px)",
  },
  image2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 30,
    textAlign: "center",
    height: "auto",
    minHeight: 200,
    minWidth: 200,
    overflow: "hidden",
  },
  view6: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginTop: 30,
    textAlign: "center",
    height: "auto",
  },
});
