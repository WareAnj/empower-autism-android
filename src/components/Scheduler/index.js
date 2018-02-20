import React, {Component} from 'react';
import { View, Text, Button, Image } from 'react-native'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import styles from './styles'

class Scheduler extends React.Component {

    render() {
        
        return (
            <View style={styles.container}>
                <Calendar style={styles.calendar}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'1997-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2200-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    hideExtraDays={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={7}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                />
            </View>
        );
    }
}

export default Scheduler
