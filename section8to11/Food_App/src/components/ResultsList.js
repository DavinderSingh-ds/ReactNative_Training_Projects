import React from 'react';
import {View , Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results,navigation}) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results : {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                data={results}    
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return  (
                        // <Text>{item.id}</Text>
                        // // id ke according data bhi show kre also navigation bhi
                        <TouchableOpacity onPress={() => navigation.navigate("ResultsShow",{id: item.id})}> 
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                        // <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10,
    }
});

export default ResultsList;