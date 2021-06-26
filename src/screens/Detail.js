import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


class Detail extends Component{
    constructor(props) {
    
        super(props)     
        this.state = {     
        input:'',
        dataX:[],
        dataY:[]
        }
        
    }
    AddItemsToArray=()=>{
        let {dataX, input}=this.state
        dataX = dataX.concat(input)
        this.setState({dataX: dataX, input:null})
    }
    
    AddItemsToSecondArray=()=>{
        let {dataY, input}=this.state
        dataY = dataY.concat(input)
        this.setState({dataY: dataY, input:null})
    }
        
    render(){
        return (
            <View style={styles.MainContainer}>
                <TextInput style={styles.input}
                placeholder="Bir Değer Girin"
                value={this.state.input}
                keyboardType="numeric"
                onChangeText={(value) => this.setState({input: value})}
                />
                <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                    <TouchableOpacity style={styles.button} onPress={this.AddItemsToArray.bind(this)}>
                        <Text style={{color:"#1a1aff"}}> X dizisine ekle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={this.AddItemsToSecondArray.bind(this)}>
                        <Text style={{color:"#1a1aff"}}> Y dizisine ekle </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text>X Dizisi: {this.state.dataX.toString()}</Text>
                    <Text>Y Dizisi: {this.state.dataY.toString()}</Text>
                </View>

                <View style={{flexDirection:"row-reverse"}}>
                    <TouchableOpacity style={styles.calculate}>
                        <Text>Hesapla</Text>
                    </TouchableOpacity>
                </View>

                <View style ={{flexDirection:"row", justifyContent:"space-evenly", marginTop:20}}>
                    <TextInput style={styles.ortstd}
                    placeholder="Ortalamayı Girin"
                    keyboardType="numeric"
                    />
                    <TextInput style={styles.ortstd}
                    placeholder="Standart Sapmayı Girin"
                    keyboardType="numeric"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer :{
        flex:1,
        margin: 15,
        
    },
    button :{                
        height: "auto",
        width:"auto",
        padding:7,        
        borderWidth:1,
        borderColor:'#1a1aff',
        borderRadius:8,
        
        
    },
    input:{
        textAlign:'center',
        marginBottom:30,
        borderWidth:1,
        borderRadius:8,
        marginHorizontal:85,
        padding:3
    },
    card:{
        height:80,
        paddingLeft:10,
        marginTop:20,
        marginHorizontal:15,
        backgroundColor:"#DCDCDC",
        justifyContent:"space-evenly",
        borderRadius:8
    },
    calculate:{
        borderWidth:1,
        borderRadius:8,
        alignSelf:"baseline",
        marginTop:20,
        marginRight:15,
        padding:5
    },
    ortstd:{
        textAlign:'center',
        padding:7,
        borderWidth:1,
        borderRadius:8,
        alignSelf:"baseline",
    }
});

export default Detail;