
import { Alert, Pressable, StyleSheet, Text } from 'react-native';

type CategoryItemProps = {
  name: string;
};

export default function CategoryItem({ name }: CategoryItemProps) {
  return (
    <Pressable
      style={styles.category}
      onPress={() => Alert.alert(name, `You selected ${name}`)}
    >
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  category: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: '#dbeafe',
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e3a8a',
  },
});
