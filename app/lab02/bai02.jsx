import { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
  StyleSheet,
} from "react-native";

export default function Bai02() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Sửa lỗi: Đưa setTimeout vào trong hàm xử lý sự kiện
  const handleLogin = () => {
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
    }, 3000);
  };

  return (
    <ImageBackground
      // Đảm bảo file assets/bg.jpg tồn tại, hoặc đổi uri dưới đây để test
      source={{ uri: "https://picsum.photos/800/1200" }} 
      style={styles.container}
      resizeMode="cover"
    >
      {/* Tiêu đề */}
      <Text style={styles.title}>ĐĂNG NHẬP</Text>

      {/* Khung đăng nhập */}
      <View style={styles.loginBox}>

        {/* Tên đăng nhập */}
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          placeholderTextColor="#fff"
        />

        {/* Mật khẩu */}
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#fff"
          secureTextEntry={!showPassword}
        />

        {/* Hiện mật khẩu */}
        <View style={styles.passwordRow}>
          <Text style={styles.whiteText}>
            Hiện mật khẩu
          </Text>

          <Switch
            value={showPassword}
            onValueChange={setShowPassword}
          />
        </View>

        {/* Nút đăng nhập */}
        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            Đăng nhập
          </Text>
        </Pressable>

        {/* Đăng ký và quên mật khẩu */}
        <View style={styles.links}>
          <Pressable>
            <Text style={styles.linkText}>
              Đăng ký tài khoản
            </Text>
          </Pressable>

          <Pressable>
            <Text style={styles.linkText}>
              Quên mật khẩu
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Thông báo đăng nhập thành công */}
      {loginSuccess && (
        <View style={styles.successBox}>
          <Text style={styles.successText}>
            Đăng nhập thành công
          </Text>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  loginBox: {
    width: "85%",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    borderRadius: 15,
    padding: 18,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: "#fff",
  },

  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  whiteText: {
    color: "#fff",
    fontSize: 14,
  },

  button: {
    height: 45,
    backgroundColor: "#478fd0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  links: {
    marginTop: 15,
    alignItems: "center",
    gap: 10,
  },

  linkText: {
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },

  successBox: {
    marginTop: 15,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  successText: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
});