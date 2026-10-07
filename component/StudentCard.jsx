import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StudentCard = ({ student, index }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>
        {index + 1}
      </Text>

      <Text style={styles.name}>
        {student}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 6,
    padding: 15,
    borderRadius: 8,
  },

  number: {
    width: 35,
    fontSize: 16,
    fontWeight: "bold",
  },

  name: {
    flex: 1,
    fontSize: 16,
  },
});

export default StudentCard;

