import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
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

const categories = ['Tai nghe', 'Đồng hồ', 'Bàn phím', 'Chuột', 'Loa', 'Balo'];

export default function KtScreen() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const dataFilter = productsData.slice(0, limit);
    setProducts(dataFilter);
  }, [limit]);

  const ProductCard = ({ item }) => {
    // Tự động tính giá cũ (cộng thêm 20% so với giá bán) nếu trong JSON chưa có oldPrice
    const originalPrice = item.oldPrice
      ? item.oldPrice
      : item.price
      ? `${Math.round(item.price * 1.2).toLocaleString('vi-VN')} đ`
      : null;

    return (
      <View style={styles.card}>
        <Image
          source={require('../../assets/bg.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.cardInfo}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.priceRow}>
            {/* Giá bán hiện tại */}
            <Text style={styles.productPrice}>
              {item.price ? `${item.price.toLocaleString('vi-VN')} đ` : 'Liên hệ'}
            </Text>
            
            {/* Giá khuyến mãi / Giá cũ gạch ngang */}
            {originalPrice && (
              <Text style={styles.oldPrice}>{originalPrice}</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const HeaderBai1 = () => (
    <View style={styles.headerContainer}>
      <View style={styles.topBar}>
        <Text style={styles.menuIcon}>☰</Text>
        <View style={styles.userInfo}>
          <Text style={styles.userIcon}>👤</Text>
          <Text style={styles.userName}>Hồ Diên Lợi</Text>
        </View>
      </View>

      <Text style={styles.headerTitle}>DANH MỤC SẢN PHẨM</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((cat, index) => (
          <View key={index} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{cat}</Text>
          </View>
        ))}
      </ScrollView>
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
      <StatusBar barStyle="dark-content" />
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
    backgroundColor: '#FFEBF3',
  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  headerContainer: {
    marginBottom: 16,
    paddingTop: 8,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B8E2D',
    marginBottom: 12,
  },
  categoryContainer: {
    paddingRight: 10,
  },
  categoryChip: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#000',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '48%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 6,
    height: 36,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1B8E2D',
  },
  oldPrice: {
    fontSize: 11,
    color: '#888888',
    textDecorationLine: 'line-through', // Gạch ngang giá gốc
  },
  footer: {
    alignItems: 'center',
    marginTop: 12,
  },
  loadMoreBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
  },
});