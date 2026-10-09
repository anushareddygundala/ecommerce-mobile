import { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoryItem from '@/components/CategoryItem';
import PrimaryButton from '@/components/PrimaryButton';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';

const categories = [
  'Mobiles',
  'Laptops',
  'Electronics',
  'Accessories',
];

const products = [
  {
    id: '1',
    name: 'iPhone 15',
    price: 59999,
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24',
    price: 74999,
    image:
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
  },
  {
    id: '3',
    name: 'MacBook Air',
    price: 99999,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  },
  {
    id: '4',
    name: 'Sony Headphones',
    price: 12999,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
];

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
  ref={scrollRef}
  showsVerticalScrollIndicator={false}
>
        <View style={styles.header}>
          <Text style={styles.storeName}>MyStore</Text>
          <Text style={styles.welcome}>Welcome back, Anusha!</Text>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Big Deals Are Here!</Text>
            <Text style={styles.bannerSubtitle}>
              Discover your favourite products.
            </Text>
            
<PrimaryButton
  title="Shop Now"
  onPress={() =>
    scrollRef.current?.scrollTo({
      y: 500,
      animated: true,
    })
  }
/>

          </View>
        </View>

        <SectionHeader title="Shop by Category" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        >
          {categories.map((category) => (
            <CategoryItem key={category} name={category} />
          ))}
        </ScrollView>

        <SectionHeader title="Featured Products" />

        <View style={styles.productList}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </View>

        <Text style={styles.footer}>Thank you for shopping with MyStore!</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  storeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
  },

  welcome: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 6,
  },

  banner: {
    margin: 20,
    borderRadius: 18,
    backgroundColor: '#dbeafe',
    padding: 20,
  },

  bannerContent: {
    gap: 12,
  },

  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },

  bannerSubtitle: {
    fontSize: 15,
    color: '#334155',
  },

  categoryList: {
    paddingLeft: 20,
  },

  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  footer: {
    textAlign: 'center',
    color: '#64748b',
    marginVertical: 24,
  },
});