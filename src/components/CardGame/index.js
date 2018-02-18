import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import styles from './styles'

class CardGame extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.card_image}
                    source={require('../../public/images/pineapple.jpg')}
                />
                <Choices></Choices>
            </View>
        )
    }
}

class Choices extends React.Component {
    render() {
        return (
            <View style={styles.choices}>
                <Choice title='Pineapple' value='1'></Choice>
                <Choice title='Chicken'></Choice>
                <Choice title='Egg'></Choice>
            </View>
        )
    }
}

class Choice extends React.Component {
    constructor(props) {
        super(props)
    }

    onPressCard() {
        if (this.props.value) {
            alert('Correct!')
        } else {
            alert('Wrong!')
        }
    }

    render() {
        return (
            <View style={styles.choice}>
                <Button
                    onPress={this.onPressCard.bind(this)}
                    title={this.props.title}
                    color='#333'
                    accessibilityLabel='What does this really do?'
                />
            </View>
        )
    }
}

export default CardGame
