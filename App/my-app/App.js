// Top part of the app
// Where we import all the libraries that we want to use in this page.
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

// The function that is written here is that the actual part that is shown to the user
export default function App() {
  // The backend part
  const [x, setX] = useState("hello") // these variables are called Hook, or State
  const [num, setNum] = useState(0)

  // Creating a function. Method 1
  const newFunction = () => {
    setX("bye")
    console.log(x)
  }

  // Creatomg a function. Method 2
  function newFunction2(param1){
    setNum(20)
    console.log(param1)
  }

  function plus(){
    setNum(num+1)
  }
  function minus(){
    setNum(num-1)
  }

  // How to create and show an array
  const [newArray, setNewArray] = useState([1,2,3,4,5,6,7,8,9])
  const [strArr, setStrArr] = useState(["Hello", "Bye", "Hello World", "Computer", "Science", "Programming", "Coding"])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState("")

  function updateArray(e){
    var search = e.toLowerCase()
    var array = strArr
    array = array.filter((e) => {return e.toLowerCase().includes(search)})
    setFiltered(array)
  }

  // The return part of the code is the front end part
  // All Tags such as Text, View have to be imported
  // View Tag: No function. Similar to <div>. Cannot hold any text, but just a section.
  // Text Tag: holding text
  // Button tag: making button in the screen
  // Anything that exists between the < > are called props, and they help definne what the tag should look like or do.
  // justifyContent: 세로 정열 방법, alignItems: 가로 정열 방법, flexDirection: 돌릴 방향 ('row' = 옆으로 눞히기)

  // 중간에 화면에 표시되는 variable들이 바뀌기 위해서는 화면이 render가 되고 위해 변수를 이런식으로 만들어준다: const [num, setNum] = useState(0)  or 
  // const [newArray, setNewArray] = useState([1,2,3,4,5,6,7,8,9])
  // Array를 돌릴때는 .map(el, ind) --> el: each element, ind: index
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <TextInput
        style={{
          backgroundColor: '#F0EEED',
          width: '80%',
          padding: 10,
          borderRadius: 10
        }}
        placeholder = {'Search'}
        onChangeText={(e) => {
          updateArray(e)
        }}
      />
      {
        strArr.map((el, ind) =>(  
          <View style={{
            backgroundColor: '#6096B4',
            width: '80%',
            marginVertical: 10,
            padding: 10,
            borderRadius: 10
          }}>
            <Text style={{
              color: 'white'
            }}>
              Element is: {el}
            </Text>
          </View>
        ))
      }
      
    </View>
  );
}

// This is the styling part. Kind of like CSS.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
