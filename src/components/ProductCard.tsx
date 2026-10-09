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
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>₹{price}</Text>

      <Pressable
        style={styles.button}
        onPress={() =>
  Alert.alert(name, `Price: ₹${price}`)
}
      >
        <Text style={styles.buttonText}>View Product</Text>
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
  },

  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 4,
  },

  button: {
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#000000',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});