
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ProductsScreen() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>All Products</Text>
          <Text style={styles.subtitle}>
            Explore our latest products
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <ProductCard
          name={item.name}
          price={item.price}
          image={item.image}
          category={item.category}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.emptyMessage}>
          No products available. Please check back later!
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 6,
  },
  row: {
    justifyContent: 'space-between',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#64748b',
    marginTop: 40,
  },
});
