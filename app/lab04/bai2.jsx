// import { useState } from "react";
// import {
//   Text,
//   StyleSheet,
//   View,
//   ImageBackground,
//   TextInput,
//   Pressable,
//   Switch,
// } from "react-native";


// export default function bai02() {
//   const [username, setUserName] = useState("");
//   const [password, setPassWord] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const handPress = () => {
//     console.log("Tên đăng nhập:", username);
//     console.log("Mật khẩu:", password);
//   };
//   return (
//     <ImageBackground
//       className = "h-full w-full justify-center items-center "
//       source={require("../../assets/bg3.jpg")}
//     >
//       <Text className="text-[32px] font-extrabold text-[#7e4fd4]">ĐĂNG NHẬP</Text>
//       <View className="my-5 w-[90%] rounded-[15px] bg-white p-5 ">
//         <TextInput
//           onChangeText={setUserName}
//           value={username}
//           placeholder="Tên đăng nhập"
//           className ="my-5 w-[90%] rounded-[15px] bg-gray-500 p-5"
//         />
//         <TextInput
//           onChangeText={setPassWord}
//           value={password}
//           placeholder="Mật khẩu"
//           className ="my-5 w-[90%] rounded-[15px] bg-gray-500 p-5"
//           secureTextEntry={!showPassword}
//         />

//         <View style={styles.showPassword}>
//           <Text>Hiện mật khẩu</Text>

//           <Switch value={showPassword} onValueChange={setShowPassword} />
//         </View>

//         <Pressable style={styles.button} onPress={handPress}>
//           <Text style={styles.dangnhap}>Đăng nhập</Text>
//         </Pressable>

//         <Text style={styles.taikhoan}>Quên mật khẩu?</Text>
//         <Text style={styles.taikhoan}>Đăng ký tài khoản</Text>

//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({

  

//   input: {
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "#fbf7f7",
//     marginBottom: 10,
//   },
//   button: {
//     width: "100%",
//     backgroundColor: "#4285f4",
//     paddingVertical: 12,
//     borderRadius: 7,
//   },

//   dangnhap: {
//     textAlign: "center",
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   showPassword: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   taikhoan: {
//     textAlign: "center",
//     paddingVertical: 5,
//   }
// });
