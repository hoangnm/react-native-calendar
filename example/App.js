import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Calendar from './components/Calendar';
// import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// use to test customStyles
const customStyles = StyleSheet.create({
  // calendarContainer: {
  //   // backgroundColor: '#fff',
  //   // flex: 1,
  // },
  // monthContainer: {
  //   // flex: 1,
  // },
  // weekRow: {
  //   // flex: 1,
  // },
  // dayButton: {
  //   // borderTopWidth: 0,
  // },
  // dayButtonFiller: {
  //   padding: 10,
  // },
  // fillerDay: {
  //   // color: 'grey',
  // },
  // title: {
  //   // color: '#fff',
  //   textAlign: 'center',
  // },
  // calendarControls: {
  //   alignItems: 'center',
  // },
  // day: {
  //   color: 'black',
  // },
  // dayHeading: {
  //   // color: '#fff',
  // },
  // weekendDayText: {
  //   color: 'black',
  // },
  // weekendHeading: {
  //   // color: '#fff',
  // },
  // weekendDayButton: {
  //   // backgroundColor: 'red',
  // },
  // calendarHeading: {
  //   borderTopWidth: 0,
  //   borderBottomWidth: 0,
  // },
  // selectedDayCircle: {
  //   // backgroundColor: '#fff',
  // },
  // selectedDayText: {
  //   // color: 'red',
  // },
  // currentDayText: {
  //   color: 'blue',
  // },
  // currentDayCircle: {
  //   // backgroundColor: '#fff',
  // },
  // eventIndicator: {
  //   backgroundColor: 'blue',
  //   width: 30,
  //   height: 5,
  // },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format('YYYY-MM-DD'),
    };
  }

  render() {
    let events = [
    ];
    return (
      <View style={styles.container}>
        <Calendar
          showTitle
          showFillerDay
          showEventIndicators
          customStyle={customStyles}
          ref="calendar"
          titlePosition={'top'}
          scrollEnabled
          showControls={false}
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          calendarFormat={'monthly'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          onDateLongPress={(date) => this.setState({ selectedDate: date })}
          onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
          onTouchNext={(e) => console.log('onTouchNext: ', e)}
          onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
          onSwipeNext={(e) => console.log('onSwipeNext', e)}
          events={events}
        />
        {/* <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text> */}
      </View>

    );
  }
}

module.exports = App;
