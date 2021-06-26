import React, { Component } from 'react';
import {Text, View} from 'react-native';

const CompLF = props => {


    return(
        <View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Text>Lilliefors Testi</Text>
            </View>
            <View>
                <Text>Eleman Sayısı: {props.result.c}</Text>
                <Text>Gözlenen Değerler: {props.result.observed.map(val => val).join(", ")}</Text>
                <Text>Normalleşmiş Değerler: {props.result.Z.map(val => val).join(", ")}</Text>
                <Text>Ortalama: {props.result.mean}</Text>
                <Text>Gözlenen Değerlerin Ortalamadan Farkları: {props.result.XSubMeanX.map(val => val).join(", ")}</Text>
                <Text>Standart Sapma: {props.result.standardDeviation}</Text>
                <Text>Varyans: {props.result.variance}</Text>
                <Text>Hesaplanan Test İstatistiği: {props.result.Dc}</Text>
            </View>
        </View>
        

    )


};
export default CompLF;