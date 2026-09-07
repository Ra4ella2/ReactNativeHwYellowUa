import { Image, StyleSheet, Text, View } from 'react-native';

type ProductCardProps = {
  title: string;
  price: string;
  imageUrl: string;
  width: number;
  popular?: boolean;
};

export default function ProductCard({
  title,
  price,
  imageUrl,
  width,
  popular = false,
}: ProductCardProps) {
  return (
    <View
      style={[
        styles.card,
        {
          width,
        },
      ]}
    >
      {/* Левая часть */}
      <View
        style={[
            styles.info,
            popular && styles.infoPopular,
        ]}
        >
        <View>
          {popular && (
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>POPULAR</Text>
            </View>
          )}

          <Text style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.price}>
            {price}
            <Text style={styles.currency}> грн</Text>
          </Text>

          <View style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Купить</Text>
          </View>
        </View>
      </View>

      {/* Фото товара */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 212,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  info: {
    flex: 1,

    justifyContent: 'center',

    paddingTop: 10,
  },

  infoPopular: {
    transform: [{ translateY: -12 }],
  },

  popularBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1f6f4',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginBottom: 5,
  },

  popularText: {
    color: '#42a9a1',
    fontSize: 9,
    fontWeight: '600',
  },

  title: {
    color: '#111111',

    fontSize: 16,
    lineHeight: 20,

    fontWeight: '500',

    maxWidth: 185,
  },

  bottom: {
    marginTop: 24,
  },

  price: {
    color: '#111111',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
  },

  currency: {
    fontSize: 12,
    fontWeight: '600',

    transform: [{ translateY: -2 }],
  },

  buyButton: {
    width: 70,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#ffd400',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buyButtonText: {
    color: '#111111',
    fontSize: 12,
    fontWeight: '700',
    transform: [{ translateY: -1 }],
  },

  imageContainer: {
    width: 135,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  productImage: {
    width: 130,
    height: 165,
    transform: [{ translateY: -8 }],
  },
});