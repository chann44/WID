import * as Font from "expo-font";
 
const useFonts = async () =>{
  await Font.loadAsync({
    'TTInterfaces': require('../fonts/TTInterfaces-Regular.ttf'),
  })
}
export default useFonts;