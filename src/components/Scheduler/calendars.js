// import React, {Component} from 'react';
// import { Text, StyleSheet, ScrollView, View } from 'react-native'

// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

// import styles from './styles'

// export default class CalendarScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.onDayPress = this.onDayPress.bind(this);
//       }
    
//     render() {
//         return (
//             <ScrollView style={styles.container}>
//             <Text style={styles.text}>Calendar with selectable date and arrows</Text>
//             <Calendar
//                 onDayPress={this.onDayPress}
//                 style={styles.calendar}
//                 hideExtraDays
//                 markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}}}
//             />
//             <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
//             <Calendar
//                 style={styles.calendar}
//                 current={'2012-05-16'}
//                 minDate={'2012-05-10'}
//                 maxDate={'2012-05-29'}
//                 firstDay={1}
//                 markedDates={{
//                 '2012-05-23': {selected: true, marked: true},
//                 '2012-05-24': {selected: true, marked: true, dotColor: 'green'},
//                 '2012-05-25': {marked: true, dotColor: 'red'},
//                 '2012-05-26': {marked: true},
//                 '2012-05-27': {disabled: true, activeOpacity: 0}
//                 }}
//                 // disabledByDefault={true}
//                 hideArrows={true}
//             />
//             <Text style={styles.text}>Calendar with custom day component</Text>
//             <Calendar
//                 style={[styles.calendar, {height: 300}]}
//                 dayComponent={({date, state}) => {
//                 return (<View style={{flex: 1}}><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text></View>);
//                 }}
//             />
//             <Text style={styles.text}>Calendar with period marking and spinner</Text>
//             <Calendar
//                 style={styles.calendar}
//                 current={'2012-05-16'}
//                 minDate={'2012-05-10'}
//                 displayLoadingIndicator
//                 markingType={'period'}
//                 theme={{
//                 calendarBackground: '#333248',
//                 textSectionTitleColor: 'white',
//                 dayTextColor: 'red',
//                 todayTextColor: 'white',
//                 selectedDayTextColor: 'white',
//                 monthTextColor: 'white',
//                 selectedDayBackgroundColor: '#333248',
//                 arrowColor: 'white',
//                 // textDisabledColor: 'red',
//                 'stylesheet.calendar.header': {
//                     week: {
//                     marginTop: 5,
//                     flexDirection: 'row',
//                     justifyContent: 'space-between'
//                     }
//                 }
//                 }}
//                 markedDates={{
//                 '2012-05-17': {disabled: true},
//                 '2012-05-08': {textColor: '#666'},
//                 '2012-05-09': {textColor: '#666'},
//                 '2012-05-14': {startingDay: true, color: 'blue', endingDay: true},
//                 '2012-05-21': {startingDay: true, color: 'blue'},
//                 '2012-05-22': {endingDay: true, color: 'gray'},
//                 '2012-05-24': {startingDay: true, color: 'gray'},
//                 '2012-05-25': {color: 'gray'},
//                 '2012-05-26': {endingDay: true, color: 'gray'}}}
//                 hideArrows={false}
//             />
//             <Text style={styles.text}>Calendar with multi-dot marking</Text>
//             <Calendar
//                 style={styles.calendar}
//                 current={'2012-05-16'}
//                 markingType={'multi-dot'}
//                 markedDates={{
//                 '2012-05-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}], selected: true},
//                 '2012-05-09': {dots: [{key: 'vacation', color: 'blue', selectedColor: 'red'}, {key: 'massage', color: 'red', selectedColor: 'blue'}], disabled: true}
//                 }}
//                 hideArrows={false}
//             />
//             <Text style={styles.text}>Calendar with week numbers</Text>
//             <Calendar
//                 onDayPress={this.onDayPress}
//                 style={styles.calendar}
//                 hideExtraDays
//                 showWeekNumbers
//                 markedDates={{[this.state.selected]: {selected: true}}}
//             />
//             </ScrollView>
//         );
//         }

//         onDayPress(day) {
//         this.setState({
//             selected: day.dateString
//         });
//         }
        
        
//         // return (
//         //     <View style={styles.container}>
//         //         <Calendar style={styles.calendar}
//         //             // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//         //             minDate={'1997-05-10'}
//         //             // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//         //             maxDate={'2200-05-30'}
//         //             // Handler which gets executed on day press. Default = undefined
//         //             onDayPress={(day) => {console.log('selected day', day)}}
//         //             // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//         //             monthFormat={'MMMM yyyy'}
//         //             // Handler which gets executed when visible month changes in calendar. Default = undefined
//         //             onMonthChange={(month) => {console.log('month changed', month)}}
//         //             // Hide month navigation arrows. Default = false
//         //             hideExtraDays={true}
//         //             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
//         //             firstDay={7}
//         //             // Show week numbers to the left. Default = false
//         //             showWeekNumbers={true}
//         //         />
//         //     </View>
//         //);
    
// }

// export default Scheduler
