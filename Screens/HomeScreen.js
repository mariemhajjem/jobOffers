import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements' 
const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={styles.scrollView}>
                
                            <Card key="0" style={styles.cardStyle}>

                                <Card.Title
                                    title="{obj.deal.enterprise.company_name}"


                                    subtitle="{
                                        obj.deal.enterprise.company_address
                                    }"
                                    right={() => <Icon
                                        name='ellipsis-v'
                                        type='font-awesome-5'
                                        iconStyle={{ paddingRight: 15 }}
                                        size={20}

                                    />}
                                /> 
                                <Card.Content>
                                    <Title style={styles.dealTitle}>"obj.deal.deal_label"</Title>
                                    <Paragraph style={styles.description}>"obj.deal.deal_description..."</Paragraph>

                                </Card.Content>

                                <Card.Actions style={styles.cardActions}>

                                    <Button mode="contained" color="#0379d4"
                                        onPress={() => {
                                        }}

                                    >View details</Button>
                                    <Button mode="contained" color="#0379d4"
                                        onPress={() => {
                                        }}

                                    >View Map</Button>

                                </Card.Actions>
                            </Card>
                          

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20,

    },
    cardStyle: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,

        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 0, width: 0 }
    },
    description: {
        color: 'gray'
    },
    dealTitle: {
        fontSize: 18
    },
    cardActions: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: "space-around"
    }
});