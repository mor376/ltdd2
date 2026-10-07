import React from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
} from "react-native";

import studentsData from "../../data/students.json";
import StudentCard from "../../component/StudentCard";

export default function Bai2() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={studentsData}

        keyExtractor={(item, index) =>
          item + index
        }

        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>
          </View>
        )}

        renderItem={({ item, index }) => (
          <StudentCard
            student={item}
            index={index}
          />
        )}

        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  sectionHeader: {
    backgroundColor: "#2196F3",
    padding: 12,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

