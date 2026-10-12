
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  const handleViewProduct = () => {
    Alert.alert(
      'Product Details',
      `Name: ${name}\nCategory: ${category}\nPrice: ₹${price.toLocaleString('en-IN')}`
    );
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>

        <Text style={styles.price}>
          ₹{price.toLocaleString('en-IN')}
        </Text>

        <Text style={styles.category}>
          {category}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={handleViewProduct}
        accessibilityRole="button"
        accessibilityLabel={`View details for ${name}`}
      >
        <Text style={styles.buttonText}>
          View Product
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    backgroundColor: '#e2e8f0',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#0f172a',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#2563eb',
  },
  category: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },
  button: {
    marginTop: 10,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
