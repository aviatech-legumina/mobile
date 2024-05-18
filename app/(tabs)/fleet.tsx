import { StyleSheet, FlatList, View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { darken } from 'polished';



const DATA = (n: number) => Array.from({ length: n }, (_, i) => i.toString()).map((i) => ({
  id: i + 1,
  title: 'Cessna 172'
}));

const Item = ({ title, id }: { title: string, id: string }) => (
  <Pressable
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? 'rgba(0, 0, 0, .1)' : '#f9c2ff',
      },
      styles.item,
    ]}
  //onPress={() => console.log(id)} // replace with your own function
  >
    <View style={styles.content}>
      {/* <Image
        source={require('@/assets/images/cessna.png')}
        style={styles.airplaneImage}
      /> */}
      <Link
        href={{
          pathname: "/airplane/[id]",
          params: { id }
        }}
        style={styles.link}
      >
        <Text style={styles.itemTextStyle}>{title}</Text>
      </Link>
    </View>
  </Pressable>
);

export default function TabTwoScreen() {
  const renderItem = ({ item }: { item: { id: string, title: string } }) => <Item title={item.title} id={item.id} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTextStyle}>Samoloty</Text>

      <FlatList
        data={DATA(20)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <LinearGradient
        colors={['transparent', 'rgba(255,255,255,0.8)']}
        style={styles.gradient}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  link: {
    flex: 1
  },
  content: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center', // this will center items in the horizontal plane
    elevation: 10, // this will add shadow on Android
    shadowColor: darken(0.5, "#fff"), // this will add shadow on iOS
    shadowOpacity: 0.2, // this will add shadow on iOS
    shadowOffset: { width: 0, height: 10 }, // this will add shadow on iOS
  },
  itemTextStyle: {
    fontSize: 16,
    width: 100,
    height: 100
  },
  headerTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 100,
  },
  airplaneImage: {
    width: 100,
    height: 100,
    // marginLeft: -20,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
});