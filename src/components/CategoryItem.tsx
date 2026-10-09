import { Alert, Image, Pressable, StyleSheet, Text } from 'react-native';

type CategoryItemProps = {
name: string;
};

const categoryImages: { [key: string]: string } = {
Mobiles: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200',
Laptops: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200',
Electronics: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200',
Accessories: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
};

export default function CategoryItem({ name }: CategoryItemProps) {
const image = categoryImages[name];

return (
<Pressable
style={styles.category}
onPress={() => Alert.alert(name, `You selected ${name}`)}
>
<Image
source={{ uri: image }}
style={styles.image}
resizeMode="cover"
/> <Text style={styles.text}>{name}</Text> </Pressable>
);
}

const styles = StyleSheet.create({
category: {
alignItems: 'center',
width: 90,
marginRight: 12,
},
image: {
width: 72,
height: 72,
borderRadius: 36,
backgroundColor: '#dbeafe',
marginBottom: 8,
},
text: {
fontSize: 13,
fontWeight: '600',
color: '#1e3a8a',
textAlign: 'center',
},
});
