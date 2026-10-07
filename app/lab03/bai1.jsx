import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Import đúng theo cấu trúc thư mục của dự án
import productsData from '../../data/products.json';
import ProductCard from '../../component/ProductCard';

export default function Bai1() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    const dataFilter = productsData.slice(0, limit);
    setProducts(dataFilter);
  }, [limit]);

  const HeaderBai1 = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>DANH SÁCH SẢN PHẨM</Text>
    </View>
  );

  const FooterBai1 = () => (
    <View style={styles.footer}>
      {limit < productsData.length && (
        <Pressable
          style={styles.loadMoreBtn}
          onPress={() => setLimit(limit + 4)}
        >
          <Text style={styles.footerText}>Tải thêm</Text>
        </Pressable>
      )}
    </View>
  );

  const EmptyBai1 = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Không tìm thấy thông tin sản phẩm</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        ListHeaderComponent={<HeaderBai1 />}
        ListFooterComponent={<FooterBai1 />}
        ListEmptyComponent={<EmptyBai1 />}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loadMoreBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  footerText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyContainer: {
    padding: 30,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#777',
  },
});