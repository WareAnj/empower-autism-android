import { TabNavigator } from 'react-navigation'

import Home from './components/Home/'
import Info from './components/Info/'
import CardGame from './components/CardGame/'
import EmotionTracker from './components/EmotionTracker';

const Router = TabNavigator({
    Home: {
        screen: Home,
    },
    Info: {
        screen: Info,
    },
    CardGame: {
        screen: CardGame,
    },
    EmotionTracker: {
        screen: EmotionTracker
    }
}, {
    initialRouteName: 'Info',
    tabBarPosition: 'bottom'
})

export default Router
