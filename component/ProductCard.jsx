import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>
          {item.price
            ? `${typeof item.price === 'number' ? item.price.toLocaleString('vi-VN') : item.price} đ`
            : 'Liên hệ'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 130,
    backgroundColor: '#eee',
  },
  cardInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    height: 36,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d9534f',
  },
});