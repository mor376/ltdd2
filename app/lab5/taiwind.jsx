import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  Pressable,
  StatusBar,
} from 'react-native';
import productsData from '../../data/products.json';

const categories = ['Áo thun', 'Quần Jean', 'Sơ mi', 'Quần tây', 'Giày lười'];

export default function KtScreen() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    setProducts(productsData.slice(0, limit));
  }, [limit]);

  return (
    // 1. Sửa màu nền chuẩn hồng nhạt như bản gốc
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FDE2EC' }}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 8, paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="mb-3">
            {/* Top Bar */}
            <View className="flex-row justify-between items-center my-2">
              <Text className="text-2xl font-bold">☰</Text>
              <Text className="text-base font-semibold text-gray-900">
                👤 Nguyễn Trần Ngọc Thưởng
              </Text>
            </View>

            {/* Title & Categories */}
            <Text className="text-base font-bold text-[#1B8E2D] my-2">
              DANH MỤC SẢN PHẨM
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((cat, i) => (
                <View
                  key={i}
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    borderRadius: 12,
                    marginRight: 8,
                  }}
                >
                  <Text className="text-sm font-medium text-gray-800">{cat}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        }
        renderItem={({ item }) => (
          // 2. Thẻ sản phẩm bo góc tròn hơn (borderRadius: 16)
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              width: '48%',
              overflow: 'hidden',
              elevation: 2,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            }}
          >
            {/* 3. Ảnh lấp đầy khung với height: 125 và resizeMode="cover" */}
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: 125 }}
              resizeMode="cover"
            />

            {/* Thông tin tên & giá */}
            <View style={{ padding: 10 }}>
              <Text
                style={{ fontSize: 13, color: '#111827', marginBottom: 4 }}
                numberOfLines={1}
              >
                {item.name}
              </Text>
              
              <View className="flex-row items-center justify-between">
                {/* 4. Giá bán màu xanh lá chuẩn */}
                <Text style={{ fontSize: 13, fontWeight: '700', color: '#1B8E2D' }}>
                  {item.price
                    ? `${item.price.toLocaleString('vi-VN')} đ`
                    : 'Liên hệ'}
                </Text>

                {/* Giá cũ gạch ngang */}
                <Text style={{ fontSize: 10, color: '#9CA3AF', textDecorationLine: 'line-through' }}>
                  {item.oldPrice || `${Math.round(item.price * 1.22).toLocaleString('vi-VN')} đ`}
                </Text>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={
          limit < productsData.length && (
            <Pressable
              style={{
                backgroundColor: 'white',
                paddingVertical: 10,
                paddingHorizontal: 24,
                alignSelf: 'center',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#E5E7EB',
                marginVertical: 16,
              }}
              onPress={() => setLimit(limit + 4)}
            >
              <Text style={{ fontWeight: '600', color: '#374151' }}>Tải thêm</Text>
            </Pressable>
          )
        }
      />
    </SafeAreaView>
  );
}