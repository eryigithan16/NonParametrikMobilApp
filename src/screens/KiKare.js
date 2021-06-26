import { ChiSquareGoodnessOfFit, sum } from 'nemene';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import CompKiKare from '../components/CompKiKare';
import {chiSquareGoodnessOfFit} from '../funcs';


class KiKare extends Component{
    constructor(props) {
    
        super(props)     
        this.state = {     
        input:'',
        dataX:[],
        dataY:[],
        show:false,
        result:{}
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
    calculateFunc = () =>{
        const result = chiSquareGoodnessOfFit(this.state.dataX);
        this.setState({result:result, show:true})
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
                    <TouchableOpacity style={styles.calculate} onPress={this.calculateFunc}>
                        <Text>Hesapla</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.state.show ? <CompKiKare result={this.state.result}/>: null }
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

export default KiKare;