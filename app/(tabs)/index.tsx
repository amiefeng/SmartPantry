import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native';
import { Colors } from './globalStyles';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, Promise!</Text>
      <Text style={styles.date}>September 29, 2023</Text>
      <View style={styles.callToAction}>

        <View style={styles.card}>
          <Text style={[styles.heading, { padding: 12 }]}>Scan A Barcode</Text>
          <Text style={styles.subheading}>Get started with a quick scan of an item near you.</Text>
        </View>
        
        <View style={[styles.card, {backgroundColor: Colors.secondaryCard}]}>
          <Text style={styles.heading}>Enter Items Manually</Text>
        </View>

      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: Colors.mainText,
    marginVertical: 20,
  },
  date: {
    fontSize: 22,
    color: Colors.mainText,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  callToAction: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.mainText,
  },
  subheading: {
    fontSize: 15,
    color: Colors.secondaryText,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    backgroundColor: Colors.primaryCard,
    marginBottom: 20,
  },
});
