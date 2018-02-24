import React, {Component} from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import styles from './styles'

class Scheduler extends React.Component {

    render() {
        return (
            <View style={styles.container}>    
                <CalendarScreen />     
            </View>
        )
    }
}

class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
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

                    onDayPress={this.onDayPress}
                    markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}}}      
                />

            <Agenda
                items={
                    {'2018-02-22': [{text: 'item 1 - any js object'}],
                    '2018-02-23': [{text: 'item 2 - any js object'}],
                    '2018-02-24': [],
                    '2018-03-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
                    }}
                // callback that gets called when items for a certain month should be loaded (month became visible)
                loadItemsForMonth={(month) => {console.log('trigger items loading')}}
                // callback that fires when the calendar is opened or closed
                onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
                // callback that gets called on day press
                onDayPress={(day)=>{console.log('day pressed')}}
                // callback that gets called when day changes while scrolling agenda list
                onDayChange={(day)=>{console.log('day changed')}}
                // initially selected day
                selected={'2012-05-16'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2012-05-30'}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // specify how each item should be rendered in agenda
                renderItem={(item, firstItemInDay) => {return (<View />);}}
                // specify how each date should be rendered. day can be undefined if the item is not first in that day.
                renderDay={(day, item) => {return (<View />);}}
                // specify how empty date content with no items should be rendered
                renderEmptyDate={() => {return (<View />);}}
                // specify how agenda knob should look like
                renderKnob={() => {return (<View />);}}
                // specify what should be rendered instead of ActivityIndicator
                renderEmptyData = {() => {return (<View />);}}
                // specify your item comparison function for increased performance
                rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
                // Hide knob button. Default = false
                hideKnob={true}
                // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                markedDates={{
                    '2018-02-16': {selected: true, marked: true},
                    '2018-02-17': {marked: true},
                    '2018-02-18': {disabled: true}
                }}
            />
            </ScrollView>
        );
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }

}

export {Scheduler, CalendarScreen}
