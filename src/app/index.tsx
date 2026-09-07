import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import ProductCard from '../components/ProductCard';


const BLUE_PHONE =
  'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/5/9/594372256_2.jpg';

const SILVER_PHONE =
  'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/5/9/594358279_3_2.jpg';

const GUESS_CASE =
  'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/a/r/ara000322_8800314040158_przetworzone.jpg';

const ORANGE_PHONE =
  'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/5/9/594364394_2.jpg';


const products = [
  {
    id: 1,

    title:
      'Apple iPhone 17 Pro Max 256GB (Deep Blue)',

    price:
      '61 749',

    imageUrl:
      BLUE_PHONE,
  },


  {
    id: 2,

    title:
      'Чехол Guess iPhone 17 Pro Printed 4G Stripes MagSafe...',

    price:
      '1 625',

    imageUrl:
      GUESS_CASE,
  },


  {
    id: 3,

    title:
      'Apple iPhone 17 Pro 256GB (Silver)',

    price:
      '57 349',

    imageUrl:
      SILVER_PHONE,

    popular:
      true,
  },


  {
    id: 4,

    title:
      'Apple iPhone 17 Pro Max 512GB (Cosmic Orange)',

    price:
      '71 249',

    imageUrl:
      ORANGE_PHONE,
  },


  {
    id: 5,

    title:
      'Apple iPhone 17 Pro Max 256GB eSIM (Silver)',

    price:
      '59 199',

    imageUrl:
      SILVER_PHONE,
  },


  {
    id: 6,

    title:
      'Apple iPhone 17 Pro Max 256GB (Cosmic Orange)',

    price:
      '61 299',

    imageUrl:
      ORANGE_PHONE,

    popular:
      true,
  },
];


export default function Index() {
  const { width } = useWindowDimensions();

  let columns = 1;

  if (width >= 1050) {
    columns = 3;
  } else if (width >= 650) {
    columns = 2;
  }

  const containerWidth = Math.min(
    width - 32,
    1060,
  );


  const gap = 14;

  const cardWidth =
    (
      containerWidth -
      gap * (columns - 1)
    ) / columns;


  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
    >
      <View
        style={[
          styles.container,
          {
            width: containerWidth,
          },
        ]}
      >

        <View style={styles.header}>
          <Text style={styles.heading}>
            Акции
          </Text>


          {/* Стрелки */}
          <View style={styles.arrows}>

            <View style={styles.arrowButton}>
              <Text style={styles.arrowText}>
                ‹
              </Text>
            </View>

            <View style={styles.arrowButton}>
              <Text style={styles.arrowText}>
                ›
              </Text>
            </View>

          </View>
        </View>

        <View
          style={[
            styles.grid,
            {
              gap,
            },
          ]}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}

              width={cardWidth}

              title={product.title}

              price={product.price}

              imageUrl={product.imageUrl}

              popular={product.popular}
            />
          ))}
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,

    backgroundColor: '#ffffff',
  },


  screenContent: {
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingBottom: 40,
  },


  container: {
    paddingTop: 22,
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 22
  },


  heading: {
    color: '#242424',

    fontSize: 29,
    fontWeight: '500',
  },

  arrows: {
    flexDirection: 'row',

    gap: 2,
  },


  arrowButton: {
    width: 24,
    height: 25,

    borderWidth: 1,
    borderColor: '#e3e3e3',

    borderRadius: 2,

    backgroundColor: '#ffffff',

    alignItems: 'center',
    justifyContent: 'center',
  },


  arrowText: {
    color: '#7768df',

    fontSize: 26,
    lineHeight: 23,

    fontWeight: '400',

    includeFontPadding: false,
    marginBottom: 6
  },

  grid: {
    flexDirection: 'row',

    flexWrap: 'wrap',
  },
});