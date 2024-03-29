/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../CardPokemon/Colors'
import { Container } from './style'


export default ({ types }) => {
    const size = types.length
    return (
        <Container size={size}>
            {
                types.map((type, index) => {
                    return <View key={index} style={{
                        paddingVertical: 5,
                        paddingHorizontal: 50,
                        borderRadius: 30,
                        backgroundColor: Colors[type.type.name]
                    }}>
                        <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold' }}>{type.type.name}</Text>
                    </View>
                })
            }
        </Container >
    )
}