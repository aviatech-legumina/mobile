import { StyleSheet, FlatList, View, Text, Image } from 'react-native';



const DATA = [
  { id: '1', title: 'Cessna 172' },
  { id: '2', title: 'Cessna 172' },
  { id: '3', title: 'Cessna 172' },
  { id: '4', title: 'Cessna 172' },
  { id: '5', title: 'Cessna 172' },
  { id: '6', title: 'Cessna 172' },
  { id: '7', title: 'Cessna 172' },
  { id: '8', title: 'Cessna 172' },
  { id: '9', title: 'Cessna 172' },
  { id: '10', title: 'Cessna 172' },
];

const Item = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Image
      source={require('@/assets/images/cessna.png')}
      style={styles.airplaneImage}
    />
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

export default function TabTwoScreen() {
  const renderItem = ({ item }: { item: { id: string, title: string } }) => <Item title={item.title} />;
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#BCD2EE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center', // this will center items in the horizontal plane
  },
  textStyle: {
    // height: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 100,
  },
  airplaneImage: {
    width: 100,
    height: 100,
    // marginLeft: -20,
  }
});