import React from 'react'
import { View, Text, Button, Image } from 'react-native'

import styles from './styles'

class Question extends React.Component {
    
    render() {
      const { question } = this.props; // same as const question = this.props.question;

      return (
        <View style={styles.container}>    
            <View style={styles.card_image}>
                <Image source={question.image}/>
            </View>
            <View style={styles.choices}>
                {question.choices.map(choice => (
                    <Button
                        color='#333'
                        onPress = {this.props.nextQuestion(choice)}
                        title = {choice}
                        key = {choice}
                    />
                ))}
            </View>           
        </View>
      );    
    }
}

class CardGame extends React.Component {
    state = {
        questions: [{
          image: require('../../public/images/pineapple.jpg'),
          choices: ['Pineapple', 'Apple', 'Banana', 'Watermelon'],
          answerKey: 0
        }, {
          image: require('../../public/images/onion.jpg'),
          choices: ['Ang', 'Cute', 'Onion', 'Koooo'],
          answerKey: 2
        } , {
            image: require('../../public/images/sad.jpg'),
            choices: ['second', 'sad', 'Na', 'Ito'],
            answerKey: 1
        } , {
            image: require('../../public/images/happy.jpg'),
            choices: ['Last', 'happy', 'Na', 'talaga'],
            answerKey: 1
        }],
        currentQuestionIndex: 0
    }

    nextQuestion = (choice) => {
        return(
            () => {   
                const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
                
                if (currentQuestion.choices.indexOf(choice) === 
                (currentQuestion.answerKey)){
                    alert('Correct!')
                } else {
                    alert('Wrong!')
                }
                
                this.setState({
                    currentQuestionIndex: this.state.currentQuestionIndex + 1
                });
            }
        )
    }

    render() {
        const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
        const { nextQuestion } = this;
        let currentQuestionIndex = this.state.currentQuestionIndex;
        
        if(currentQuestionIndex === this.state.questions.length) {
            return (
                <View style={styles.container}>
                    <Text>Geeca is so Kot!!!!!</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Question
                        question={currentQuestion}
                        nextQuestion={nextQuestion}
                        key = {currentQuestionIndex + 1}
                    />
                </View>
            )
        }
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

class Checker extends React.Component {
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
