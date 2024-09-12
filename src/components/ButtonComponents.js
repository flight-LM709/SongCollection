import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const ButtonComponents = (props) => {
  return (
    <View style={myStyle.mainButtonContainer}>
      <View style={myStyle.buttonContainer}>
        <TouchableOpacity {...props}>
            <Text style={myStyle.seeDetailsText}>SEE DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const myStyle = StyleSheet.create({
    mainButtonContainer: {
      alignItems: 'baseline',
      marginTop: 8,
    },

    buttonContainer: {
      alignItems: 'baseline',
      margin: 8,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#A6A6BD',
      padding: 8,
      backgroundColor: '#AFCAE8',
    },

    seeDetailsText: {
      color: 'white'
    },
})
