import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from '../components/Button';


const Send = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:4,alignItems:'center'}}>
         <TouchableOpacity>
            <MaterialIcons name='keyboard-arrow-left' color={'#fff'} size={25}/>
         </TouchableOpacity>
         <Text style={styles.headerText}>Send</Text>
         <TouchableOpacity>
            <MaterialCommunityIcons name='line-scan' color={'#ffffff'} size={25}/>
         </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'#111111',width:358,borderRadius:8,alignItems:'center',paddingHorizontal:8,paddingVertical:12,marginTop:60}}>
         <View style={{width:342,paddingHorizontal:16,backgroundColor:"#000000",borderRadius:8,marginBottom:10}}>
            <Text style={{fontSize:16,fontWeight:"500",lineHeight:20,marginTop:16,color:'#9B9B9B'}}>Receipent wagpay id</Text>
            <TextInput placeholder=''/>

         </View>
         <View
            style={{width:342,paddingHorizontal:16,backgroundColor:"#000000",borderRadius:8,flexDirection:'row',justifyContent:'space-between'}}
         >
            <View style={{marginVertical:16}}>
               <Text style={{fontSize:16,fontWeight:"500",lineHeight:20,color:'#FFFFFF'}} >Amount</Text>
               <TextInput placeholder='--' placeholderTextColor={'#ffff'} style={{fontSize:18,color:'#fff',marginTop:12}} keyboardType='number-pad' />
            </View>
            <View style={{height:54,width:83,backgroundColor:'#303030',borderRadius:8,flexDirection:'row',marginVertical:16,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:16,fontWeight:"500",lineHeight:20,color:'#FFFFFF'}}>USDC</Text>
               <MaterialIcons name='keyboard-arrow-down' color={'#fff'} size={25}/>
            </View>
         </View>
      </View>
      <View style={{position:'absolute',bottom:40,alignSelf:'center'}}>
         <Button title={'Next'} />
      </View>
         
    </View>
  )
}

export default Send

const styles = StyleSheet.create({
   container:{
      backgroundColor:'#000000',
      flex:1,
      paddingVertical:60,
      paddingHorizontal:16
   },
   headerText:{
      fontSize:18,
      fontWeight:'600',
      lineHeight:22.5,
      color:'#ffffff'
   }
})