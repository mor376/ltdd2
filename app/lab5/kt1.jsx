import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, SafeAreaView, Pressable, StatusBar } from 'react-native';
import productsData from '../../data/products.json';

const categories = ['Tai nghe', 'Đồng hồ', 'Bàn phím', 'Chuột', 'Loa', 'Balo'];

export default function KtScreen() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    setProducts(productsData.slice(0, limit));
  }, [limit]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 12 }}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ marginBottom: 16 }}>
            <View style={styles.topBar}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>☰</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>👤 Hồ Diên Lợi</Text>
            </View>
            <Text style={styles.title}>DANH MỤC SẢN PHẨM</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((cat, i) => (
                <View key={i} style={styles.chip}><Text>{cat}</Text></View>
              ))}
            </ScrollView>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={require('../../assets/bg.jpg')} style={styles.image} resizeMode="cover" />
            <View style={{ padding: 10 }}>
              <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>{item.price ? `${item.price.toLocaleString('vi-VN')} đ` : 'Liên hệ'}</Text>
                <Text style={styles.oldPrice}>{`${Math.round(item.price * 1.2).toLocaleString('vi-VN')} đ`}</Text>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={
          limit < productsData.length && (
            <Pressable style={styles.btn} onPress={() => setLimit(limit + 4)}>
              <Text style={{ fontWeight: '600' }}>Tải thêm</Text>
            </Pressable>
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFEBF3' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#1B8E2D', marginBottom: 12 },
  chip: { backgroundColor: '#FFF', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 12, marginRight: 8 },
  card: { backgroundColor: '#FFF', borderRadius: 12, width: '48%', overflow: 'hidden', elevation: 2 },
  image: { width: '100%', height: 120 },
  name: { fontSize: 13, color: '#333', height: 36, marginBottom: 6 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: 13, fontWeight: 'bold', color: '#1B8E2D' },
  oldPrice: { fontSize: 11, color: '#888', textDecorationLine: 'line-through' },
  btn: { backgroundColor: '#FFF', padding: 10, alignSelf: 'center', borderRadius: 20, borderWidth: 1, borderColor: '#DDD', marginTop: 10 },
});