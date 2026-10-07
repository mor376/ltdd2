import { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Switch,
  Pressable,
} from "react-native";

export default function Bai02() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
    }, 3000);
  };

  return (
    <ImageBackground
      source={{ uri: "https://picsum.photos/800/1200" }}
      className="flex-1 items-center justify-center"
      resizeMode="cover"
    >
      {/* Tiêu đề */}
      <Text className="text-white text-2xl font-bold mb-5">ĐĂNG NHẬP</Text>

      {/* Khung đăng nhập */}
      <View className="w-[85%] bg-black/45 rounded-2xl p-[18px]">
        {/* Tên đăng nhập */}
        <TextInput
          className="h-[45px] border border-white rounded-lg px-3 mb-3 text-white"
          placeholder="Tên đăng nhập"
          placeholderTextColor="#fff"
        />

        {/* Mật khẩu */}
        <TextInput
          className="h-[45px] border border-white rounded-lg px-3 mb-3 text-white"
          placeholder="Mật khẩu"
          placeholderTextColor="#fff"
          secureTextEntry={!showPassword}
        />

        {/* Hiện mật khẩu */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-sm">Hiện mật khẩu</Text>
          <Switch
            value={showPassword}
            onValueChange={setShowPassword}
          />
        </View>

        {/* Nút đăng nhập */}
        <Pressable
          className="h-[45px] bg-[#478fd0] active:bg-blue-600 rounded-lg justify-center items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-base font-bold">Đăng nhập</Text>
        </Pressable>

        {/* Đăng ký và quên mật khẩu */}
        <View className="mt-[15px] items-center gap-y-[10px]">
          <Pressable>
            <Text className="text-white text-sm underline">
              Đăng ký tài khoản
            </Text>
          </Pressable>

          <Pressable>
            <Text className="text-white text-sm underline">
              Quên mật khẩu
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Thông báo đăng nhập thành công */}
      {loginSuccess && (
        <View className="mt-[15px] bg-white py-3 px-[25px] rounded-lg">
          <Text className="text-green-600 text-base font-bold">
            Đăng nhập thành công
          </Text>
        </View>
      )}
    </ImageBackground>
  );
}