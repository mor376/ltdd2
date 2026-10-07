import { Image, Text, View } from "react-native";

export default function Bai01() {
  return (
    <View className="flex-1 bg-white items-center">
      {/* Banner */}
      <View className="w-full h-36 bg-[#4A90D9]" />

      {/* Ảnh đại diện */}
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        className="w-24 h-24 rounded-full border-4 border-white -mt-12"
      />

      {/* Thông tin sinh viên */}
      <View className="w-[85%] mt-5 gap-y-5">
        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700">Họ tên</Text>
          <Text className="text-base font-bold text-gray-900">
            Nguyễn Trần Ngọc Thưởng
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700">Ngày sinh</Text>
          <Text className="text-base font-bold text-gray-900">01/01/2004</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700">Điện thoại</Text>
          <Text className="text-base font-bold text-gray-900">0123456789</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700">Mã sinh viên</Text>
          <Text className="text-base font-bold text-gray-900">2124110088</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700">Mã lớp:</Text>
          <Text className="text-base font-bold text-gray-900">CCQ2411C</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-base text-gray-700">Ngành đào tạo</Text>
          <Text className="text-base font-bold text-gray-900">CNTT</Text>
        </View>
      </View>
    </View>
  );
}