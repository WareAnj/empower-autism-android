import React from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

class EmotionTracker extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.choices}>
                    <Emotion value='Sad'>
                        <Image
                            //style={styles.card_image}
                            source={require('../../public/images/sad.jpg')}
                            accessibilityLabel='What does this really do?'
                        />
                    </Emotion>
                    <Emotion value='Happy'>
                        <Image
                            source={require('../../public/images/happy.jpg')}
                            accessibilityLabel='What does this really do?'
                        />
                    </Emotion>
                    <Emotion value='Angry'>
                        <Image
                            source={require('../../public/images/angry.jpg')}
                            accessibilityLabel='What does this really do?'
                        />
                    </Emotion>
                </View>       
            </View>
        )
    }
}

class Emotion extends React.Component {
    constructor(props) {
        super(props)
    }

    onPressCard() { 
        if (this.props.value) {
            alert('You are ' + this.props.value)
        }
    }

    render() {
        // <Image
        // style={styles.card_image}
        // source={this.props.value}
        //    />
        return (
            <TouchableOpacity style={styles.card_image} onPress={this.onPressCard.bind(this)}>
                {this.props.children}      
            </TouchableOpacity>
        )
    }
}

export default EmotionTracker