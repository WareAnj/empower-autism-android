import { TabNavigator } from 'react-navigation'

import Home from './components/Home/'
import Info from './components/Info/'
import CardGame from './components/CardGame/'
import EmotionTracker from './components/EmotionTracker';
import Scheduler from './components/Scheduler';

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
    },Scheduler: {
        screen: Scheduler
    }
}, {
    initialRouteName: 'Info',
    tabBarPosition: 'bottom'
})

export default Router
