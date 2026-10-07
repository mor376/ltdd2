import { Image, StyleSheet, Text, View } from "react-native";

export default function Bai01() {
  return (
    <View style={styles.container}>

      {/* Banner */}
      <View style={styles.banner} />

      {/* Ảnh đại diện */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.avatar}
      />

      {/* Thông tin sinh viên */}
      <View style={styles.info}>

        <View style={styles.row}>
          <Text style={styles.label}>Họ tên</Text>
          <Text style={styles.value}>Nguyễn Trần Ngọc Thưởng</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Ngày sinh</Text>
          <Text style={styles.value}>01/01/2004</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Điện thoại</Text>
          <Text style={styles.value}>0123456789</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Mã sinh viên</Text>
          <Text style={styles.value}>2124110088</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Mã lớp:</Text>
          <Text style={styles.value}>CCQ2411C</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Ngành đào tạo</Text>
          <Text style={styles.value}>CNTT</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  banner: {
    width: "100%",
    height: 150,
    backgroundColor: "#4A90D9",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: -50,
  },

  info: {
    width: "85%",
    marginTop: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
  },

  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});