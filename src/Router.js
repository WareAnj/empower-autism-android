import { TabNavigator } from 'react-navigation'

import Home from './components/Home/'
import CardGame from './components/CardGame/'
import EmotionTracker from './components/EmotionTracker';
import Scheduler from './components/Scheduler';

const Router = TabNavigator({
    Home: {
        screen: Home,
    },
    CardGame: {
        screen: CardGame,
    },
    EmotionTracker: {
        screen: EmotionTracker
    },
    Scheduler: {
        screen: Scheduler
    }
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom'
})

export default Router
