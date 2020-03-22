import React from 'react';
import Thing from './Thing';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';

interface dayInterface {
    id?: number,
    date?: Date,
    things?: object[]

}



const Days = ({ Days } : {Days: object[] | undefined}) => {

    const receivedDays = Days || [];
    console.log(receivedDays);
    console.log("SPLIT!")
    console.log(Object.values(receivedDays));

    return (
        <View style={styles.container}>
        <FlatList data={receivedDays}
            renderItem={({item} : {item: dayInterface}) => <Text style={styles.text}>{item.date}</Text>}
            //keyExtractor={(item, index) => index.toString()}
            >
        </FlatList>
        </View>

        /*
        <View>
            {receivedDays.map(((day:dayInterface) =>{
                <TouchableOpacity
                    key={day.id}
                    style={styles.container}>
                        <Text style = {styles.text}>{day.date}</Text>
                </TouchableOpacity>
            }))}
        </View>
            */
        /*
        <div>
            {receivedDays.map(((day:dayInterface) => {
                console.log(typeof(day))
                return(
                <div key={day.id}>
                    <h5>{day.date}</h5>
                    <Thing Things={day.things}></Thing>
                </div>
                )
            }))}
        </div>
        */
    )
}

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 30,
       backgroundColor: '#d9f9b1',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c'
    }
 })

export default Days
