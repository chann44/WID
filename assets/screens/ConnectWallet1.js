import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const ConnectWallet1 = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={{marginBottom:16,alignItems:'center'}}>
      <Text style={styles.text}>Now lets connect{'\n'} your wallet⚡</Text>
      {/* <Text style={styles.text}>  your wallet⚡</Text> */}
      </View>
      <Button title={'Lets go'}
        onPress={()=>{
          navigation.navigate('ConnectWalletMain')
       }}
      />
    </View>
  )
}

export default ConnectWallet1

const styles = StyleSheet.create({
   Container:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#000000',
      flex:1
   },
   text:{
      fontSize:24,
      fontWeight:'700',
      color:'#ffffff',
      lineHeight:30,
      textAlign:'center'
   }
})