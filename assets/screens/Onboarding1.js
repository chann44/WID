import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient';


const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:20}}>
         <Text style={styles.text1}>Simple solution for crosschain payments</Text>
      </View>
      <View style={{marginBottom:53}}>
         <Text style={styles.text2}>
               Amet minim mollit non deserunt ullamco
               est sit aliqua dolor do amet sint.
               Velit officia consequat
               duis enim velit mollit.
         </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity>
      <LinearGradient colors={['#4B74FF','#9281FF']} style={styles.button1}
         start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
            <Text style={styles.buttonText}>Continue</Text>     
      </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
      <LinearGradient colors={['#4B74FF','#A560FF80']} style={styles.button2}
         start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
            <View style={{height:54,width:109,backgroundColor:'#000',
               justifyContent:'center',alignItems:'center',borderRadius:4
               }}>
               <Text style={styles.buttonText}>Skip</Text>      
            </View>
      </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'#000000',
      justifyContent:'flex-end',
      
      paddingBottom:40,
      paddingHorizontal:16
   },
   text1:{
      fontSize:24,
      color:'#FFFFFF',
      lineHeight:30,
      fontWeight:'700'
   },
   text2:{
      fontSize:16,
      color:'#FFFFFF',
      lineHeight:21,
      fontWeight:'500'

   },
   button1:{
      height:56,
      width:235,
      borderRadius:4,
      justifyContent:'center',
      alignItems:'center'
   },
   button2:{
      height:56,
      width:111,
      borderRadius:4,
      justifyContent:'center',
      alignItems:'center'
   },
   buttonText:{
      fontSize:18,
      fontWeight:'600',
      color:'#ffffff'
   }
   

})