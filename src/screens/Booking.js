
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from 'react-native-slider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Payment from './Payment';
export default function Booking({navigation}) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [duration,setDuration]=useState(0)
  const [sliderValue,setsliderValue]=useState(10)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Station Name:</Text>
        <Text style={styles.header}>Address:</Text>
        <Text style={styles.header}>Phone No:</Text>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={showDatepicker}>
            <Image
              source={require('../assets/date.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>DATE</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/capacity.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>CAPACITY</Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
      <View>
        <Text style={styles.title}>PLUG TYPE</Text>
      </View>
      <View>
        <Text style={styles.title}>DURATION</Text>
      </View>
      {/* <View style={styles.container}>
      <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={10}
                thumbTintColor="black"
                step={2}
                value={parseInt(duration)}
                sliderValue={parseInt(sliderValue)}
                minimumTrackTintColor="blue"
                maximumTrackTintColor="gray"
                thumbTintColor="#b9e4c9"
                onValueChange={value => setDuration({sliderValue: value})}
              />
        <Text>Total Duration: {duration}</Text>
      </View> */}
      <View style={styles.buttonview}>
        <TouchableOpacity> 
        <Text style={styles.button}>FIND SLOTS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },
  container1: {
    backgroundColor: '#1f2128',
    marginLeft: hp('30%'),
    marginTop: hp('5%'),
  },
  container2: {
    width: 130,
    height: 100,
    backgroundColor: 'white',
    marginLeft:hp('5%'),
    marginTop: hp('5%'),
  },
  col: {
    flexDirection: 'row',
    // marginTop: hp('10%'),
    
  },
  header: {
    color: '#768991',
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro',
  },
  label: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: hp('2%'),
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor: '#69fff1',
    borderWidth: 2,
    marginLeft: hp('15%'),
    marginTop: hp('15%'),
  },
  button: {
    color: '#69fff1',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: hp('1.5%'),
  },
  image: {
    marginTop: hp('2.5%'),
    alignSelf: 'center',
  },
  title:{
    color:'white',
    fontWeight:'700',
    marginLeft:hp('5%'),
    marginTop: hp('5%'),
  },
  slider: {
    height: 45,
    width: 70,
    marginLeft:hp('5%'),
  },
});
