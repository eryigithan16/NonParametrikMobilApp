import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

class Home extends Component {
    render(){    
        return (
            <View style={{flex:1, backgroundColor:'#F8F8FF'}}>
                <View style={styles.foto}><Text>Foto</Text></View>
                <FlatList
                data={[
                    {name:'Ki Kare Uyum İyiliği Testi',
                    id:'1',
                    route:"Ki-Kare",
                    },
                    {name:'Kolmogorov-Smirnov Uyum İyiliği Testi',
                    id:'2',
                    route:"Kolmogorov",
                    },
                    {name:'Normallik için Lilliefors Testi',
                    id:'3',
                    route:"Lilliefors",
                    },
                    {name:'Levene Testi',
                    id:'4',
                    route:"Levene",
                    },
                    {name:'Brown-Forsythe Testi',
                    id:'5',
                    route:"BrownF",
                    },
                ]}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>
                <View style={styles.itemTitle}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.route)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    foto: {
        backgroundColor: '#4169E1',
        alignItems: 'center',
        paddingTop:180,
        marginBottom:20
    },  
    itemTitle:{
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor:'#DCDCDC',
        margin:10,
    },
});

export default Home;