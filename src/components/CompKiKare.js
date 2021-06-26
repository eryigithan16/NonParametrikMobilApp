import React, { Component } from 'react';
import {Text, View} from 'react-native';

const CompKiKare = props => {
    console.log(props)

    return(
        <View>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Text>Ki Kare Uyum İyiliği Testi</Text>
            </View>
            <View>
                <Text>Eleman Sayısı: {props.result.c}</Text>
                <Text>Gözlenen Değerler: {props.result.observed.map(val => val).join(", ")}</Text>
                <Text>Beklenen Değerler: {props.result.expected.map(val => val).join(", ")}</Text>
                <Text>Ortalama: {props.result.avg}</Text>
                <Text>Gözlenen Değerlerin Toplamı: {props.result.sumObserved}</Text>
                <Text>Pj: {props.result.pj}</Text>
                <Text>df: {props.result.df}</Text>
                <Text>Ki-Kare Test İstatistiği: {props.result.chiSqrCalc}</Text>
                <Text>P Değeri: {props.result.pValue}</Text>
                <Text>H0: {props.result.H0 == false ? 'Red': 'Kabul'}</Text>
                
            </View>
        </View>
        

    )


};
export default CompKiKare;