import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Accordion from './Accordion';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeData =[
    {title: 'Home' , navigateTo:'Home'}
];

const CatalogData =[
    {title: 'Catalog' , navigateTo:'Catalog'}
];

const CreationalPatternsData = [
    { title: 'Factory Method', navigateTo: 'Factory Method' },
    { title: 'Abstract Factory', navigateTo: 'Abstract Factory' },
    { title: 'Builder', navigateTo: 'Builder' },
    { title: 'Prototype', navigateTo: 'Prototype' },
    { title: 'Singleton', navigateTo: 'Singleton' },
];

const StructuralPatternsData = [
    { title: 'Adapter', navigateTo: 'Adapter' },
    { title: 'Bridge', navigateTo: 'Bridge' },
    { title: 'Composite', navigateTo: 'Composite' },
    { title: 'Decorator', navigateTo: 'Decorator' },
    { title: 'Facade', navigateTo: 'Facade' },
    { title: 'Flyweight', navigateTo: 'Flyweight' },
    { title: 'Proxy', navigateTo: 'Proxy' },
];

const BehavioralPatternsData = [
    { title: 'CoR', navigateTo: 'Chain Of Responsibility' },
    { title: 'Command', navigateTo: 'Command' },
    { title: 'Iterator', navigateTo: 'Iterator' },
    { title: 'Mediator', navigateTo: 'Mediator' },
    { title: 'Memento', navigateTo: 'Memento' },
    { title: 'Observer', navigateTo: 'Observer' },
    { title: 'State', navigateTo: 'State' },
    { title: 'Strategy', navigateTo: 'Strategy' },
    { title: 'Template Method', navigateTo: 'Template Method' },
    { title: 'Visitor', navigateTo: 'Visitor' },
];

const DrawerContent = (props, navigation) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>ASLKDJALSKDJ</Text>
                {/* <TouchableOpacity style={styles.touchable} onPress={() =>
                            navigation.navigate('Home')
                        }>
                    
                </TouchableOpacity> */}
                <Accordion accordionTitle="Catalog" data={CatalogData} />
                <Accordion accordionTitle="Creational Patterns" data={CreationalPatternsData} />
                <Accordion accordionTitle="Structural Patterns" data={StructuralPatternsData} />
                <Accordion accordionTitle="Behavioral Patterns" data={BehavioralPatternsData} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        color:'white',
        fontSize:20
    },
    touchable:{
        width:'100%',
        height:40,
        color:'black',
        backgroundColor:'black'
    }
});

export default DrawerContent;