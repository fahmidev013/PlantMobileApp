import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment';
import 'moment/locale/id';

class CardContainer extends Component {
    render() {
        return (
            <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Panen Terakhir : </Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 12 }}>{moment().subtract(5, 'days').format('ll')} </Text>
                    <Text style={{ fontSize: 12 }}>({moment().to(moment().subtract(5, 'days'))})</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    {[1,2,3].map((val, key) => (
                        <View key={key} style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/ic_test.png')} style={{ width: 50, height: 50 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                <Text style={{ fontSize: 12 }}>Act</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>2,200</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
                                <Text style={{ fontSize: 12 }}>BBC</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>2,200</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '35%', alignItems: 'center', justifyContent: 'space-around', minHeight: 150, paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Yield</Text>
                        {[1,2].map((val, key) => (
                            <View key={key} style={{ backgroundColor: '#fcf1c7', width: '100%', padding: 5, elevation: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>23.8</Text>
                                <Text style={{ fontSize: 12 }}>AAT</Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'space-between', minHeight: 150, paddingTop: 10, paddingBottom: 10 }}>
                        {[1,2,3].map((val, key) => (
                            <View key={key} style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <View style={{ width: '30%' }}>
                                    <Image source={require('../../assets/ic_test2.png')} style={{ width: 50, height: 50 }} />
                                </View>
                                <View style={{ width: '65%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                        <Text style={{ fontSize: 12 }}>MTD</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2,200</Text>
                                        <Text style={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold', color: 'green' }}>105%</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                        <Text style={{ fontSize: 12 }}>YTD</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2,200</Text>
                                        <Text style={{ textAlign: 'right', fontSize: 12, fontWeight: 'bold', color: 'green' }}>35%</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={{ flexDirection: 'column', width: '100%' }}>
                    <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>Rawat & Pupuk</Text>
                    <View style={{ width: '100%', flexDirection: 'column', backgroundColor: '#13969f', minHeight: 50, padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '40%' }}>
                                <Text style={{ color: '#FFF', fontSize: 12 }}>Aktifitas</Text>
                            </View>
                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
                                {["Jun","Jul","Agu","Sep","Okt","Nov"].map((val, key) => (
                                    <Text key={key} style={{ color: '#FFF', fontSize: 12 }}>{val}</Text>
                                ))}
                            </View>
                        </View>
                        {[{aktifitas: "Pupuk NPK 13-6-27", data: ["","","","","x",""]},{aktifitas:"Semprot CPT", data: ["","","","x","",""]}].map((val, key) => (
                            <View key={key} style={{ flexDirection: 'row' }}>
                                <View style={{ width: '40%' }}>
                                    <Text style={{ color: '#FFF', fontSize: 12 }}>{val.aktifitas}</Text>
                                </View>
                                <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
                                    {val.data.map((val2, key2) => (
                                        <Text key={key2} style={{ color: '#FFF', fontSize: 12 }}>{val2}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: '#999', width: '100%', marginTop: 5, marginBottom: 5}}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '60%', flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold' }}>J10 - TM-2010</Text>
                            <Text>GAWI INTI - 1 / Afd A</Text>
                        </View>
                        <View style={{ width: '40%', flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome5 name="map-marked" size={12} style={{ marginRight: 10 }} />
                                </View>
                                <View style={{ width: '70%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 12 }}>29.50</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome5 name="tree" size={12} style={{ marginRight: 10 }} />
                                </View>
                                <View style={{ width: '70%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 12 }}>3,928 (134)</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default CardContainer;

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 340,
        minHeight: 340,
        // height: "80%",
        borderRadius: 20,
        borderColor: '#FFF',
        borderWidth: 10,
        elevation: 2,
        padding: 16
    }
})