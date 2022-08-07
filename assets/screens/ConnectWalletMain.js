import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ConnectWalletMain = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Connect Wallet</Text>
      <View style={{alignItems:'center',borderRadius:8,backgroundColor:'#0F0F0F',paddingHorizontal:16,paddingTop:16}}>
         <Text style={{fontSize:18,lineHeight:22,color:'#FFFFFF',fontWeight:'500'}}>Select a wallet</Text>
         <View style={{marginTop:32}}>
            <View style={{flexDirection:'row',height:59,justifyContent:'space-between',width:326,alignItems:'center',backgroundColor:'#2B2B2B',borderRadius:8,marginBottom:10,paddingLeft:16,paddingRight:20}}>
               <Text style={{fontSize:18,lineHeight:27,fontWeight:'600',color:'#FFFFFF'}}>Metamask</Text>
               <Image source={require('../metamask-icon.png')}/>
            </View>
            <View style={{flexDirection:'row',height:59,justifyContent:'space-between',width:326,alignItems:'center',backgroundColor:'#2B2B2B',borderRadius:8,marginBottom:10,paddingLeft:16,paddingRight:20}}>
               <Text style={{fontSize:18,lineHeight:27,fontWeight:'600',color:'#FFFFFF'}}>Wallet connect</Text>
               <Image source={require('../connectwallet.png')}/>
            </View>
            <View style={{flexDirection:'row',height:59,justifyContent:'space-between',width:326,alignItems:'center',backgroundColor:'#2B2B2B',borderRadius:8,marginBottom:10,paddingLeft:16,paddingRight:20}}>
               <Text style={{fontSize:18,lineHeight:27,fontWeight:'600',color:'#FFFFFF'}}>Coinbase wallet</Text>
               <Image source={require('../coinbase.png')}/>
            </View>
            <View style={{flexDirection:'row',height:59,justifyContent:'space-between',width:326,alignItems:'center',backgroundColor:'#2B2B2B',borderRadius:8,marginBottom:10,paddingLeft:16,paddingRight:20}}>
               <Text style={{fontSize:18,lineHeight:27,fontWeight:'600',color:'#FFFFFF'}}>Phantom</Text>
               <Image source={require('../metamask-icon.png')}/>
            </View>
            <View style={{flexDirection:'row',height:59,justifyContent:'space-between',width:326,alignItems:'center',backgroundColor:'#2B2B2B',borderRadius:8,marginBottom:10,paddingLeft:16,paddingRight:20}}>
               <Text style={{fontSize:18,lineHeight:27,fontWeight:'600',color:'#FFFFFF'}}>Metamask wallet</Text>
               <Image source={require('../metamask-icon.png')}/>
            </View>
            <View style={{flexDirection:'row',height:59,justifyContent:'space-between',width:326,alignItems:'center',backgroundColor:'#2B2B2B',borderRadius:8,marginBottom:10,paddingLeft:16,paddingRight:20}}>
               <Text style={{fontSize:18,lineHeight:27,fontWeight:'600',color:'#FFFFFF'}}>Metamask wallet</Text>
               <Image source={require('../metamask-icon.png')}/>
            </View>
         </View>
         <Text style={{fontSize:14,lineHeight:17,color:'#ACAAAA',fontWeight:'400',marginHorizontal:16,marginTop:6}}>By connecting your wallet, you agree to our Terms of Service and Privacy Policy</Text>
         <TouchableOpacity
            onPress={()=>{
               navigation.navigate('TabNavigation')
            }}
         >
            <Text style={{fontSize:14,lineHeight:17,color:'#ffffff',fontWeight:'500',marginVertical:16,textDecorationLine: 'underline'}}>I don't have a wallet</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConnectWalletMain

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'#000000',
      paddingVertical:60,
      alignItems:'center'
   },
   headerText:{
      fontSize:18,
      fontWeight:'700',
      lineHeight:22.5,
      color:'#ffffff',
      marginBottom:50
   }
})