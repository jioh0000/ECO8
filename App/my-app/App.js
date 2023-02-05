// Top part of the app
// Where we import all the libraries that we want to use in this page.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// The function that is written here is that the actual part that is shown to the user
export default function App() {
  // The backend part



  // The return part of the code is the front end part
  // All Tags such as Text, View have to be imported
  // View Tag: No function. Similar to <div>. Cannot hold any text, but just a section.
  // Text Tag: holding text
  // Button tag: making button in the screen
  // Anything that exists between the < > are called props, and they help definne what the tag should look like or do.
  // justifyContent: 세로 정열 방법, alignItems: 가로 정열 방법, flexDirection: 돌릴 방향 ('row' = 옆으로 눞히기)
  return (
    <View style={{
      backgroundColor: 'red',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row'
    }}> 
      <View style={{
        backgroundColor: 'blue',
        height: 50,
        width: 50
      }}>

      </View>
      <View style={{
        backgroundColor: 'green',
        height: 50,
        width: 50
      }}>

      </View>
      <View style={{
        backgroundColor: 'purple',
        height: 50,
        width: 50
      }}>

      </View>
    </View>
  );
}

// This is the styling part. Kind of like CSS.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
