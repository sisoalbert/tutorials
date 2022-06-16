import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function Weatherhome() {
  return (
    <View style={styles.Weatherhome}>
      <View style={styles.Temperature}>
        <View style={styles.Weathercontainer}>
          <View style={styles.Weatheritem}>
            <Image
              style={styles.Image}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lbjby5bnxbc-1%3A4?alt=media&token=a3061348-2101-4b47-b8b6-12fd414c045b",
              }}
            />
            <View style={styles.Temperature}>
              <Text style={styles.Txt3510}>15</Text>
              <Text style={styles.Txt519}>Cloudy</Text>
            </View>
          </View>
          <View style={styles.Frame1}>
            <Text style={styles.Txt243}>H:15</Text>
            <Text style={styles.Txt1043}>L:9</Text>
          </View>
        </View>
        <Text style={styles.Txt476}>Friday 24 May</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Weatherhome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 116,
    paddingBottom: 117,
    paddingLeft: 95,
    paddingRight: 95,
    backgroundColor: "rgba(0,0,0,1)",
    width: 428,
    height: 926,
  },
  Temperature: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Weathercontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 197,
  },
  Weatheritem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },
  Image: {
    width: 236,
    height: 231.38,
  },
  Temperature: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Txt3510: {
    fontSize: 133.33,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 179,
    height: 126,
    marginBottom: 15,
  },
  Txt519: {
    fontSize: 50,
    fontWeight: "700",
    color: "rgba(230,230,230,1)",
    width: 187,
    height: 51,
  },

  Frame1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Txt243: {
    fontSize: 33.33,
    fontWeight: "400",
    color: "rgba(230,230,230,1)",
    width: 84,
    height: 32,
    marginRight: 22,
  },
  Txt1043: {
    fontSize: 33.33,
    fontWeight: "400",
    color: "rgba(230,230,230,1)",
    width: 63,
    height: 32,
  },

  Txt476: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(230,230,230,1)",
  },
});
