import React from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars';

import styles from './styles'


class Scheduler extends React.Component {
    
    render() {
        return (

            <View style={styles.container}>
                <Calendar
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2050-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={false}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={false}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={7}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    />
            </View>
        )
    }
}

export default Scheduler
