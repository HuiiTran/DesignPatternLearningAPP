/* eslint-disable prettier/prettier */
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Animated,
    Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Catalog_En } from '../assets/data/Catalog';
import { Mainstyles } from './Style';
import StyleButton from './StyleButton';
import DesignPatternComponent from '../assets/data/DesignPatternComponent';

import factorymethod from '../assets/images/creationalPatterns/factory-method-mini.png';
import abstractFactory from '../assets/images/creationalPatterns/abstract-factory-mini.png';
import builder from '../assets/images/creationalPatterns/builder-mini.png';
import prototype from '../assets/images/creationalPatterns/prototype.png';
import singleton from '../assets/images/creationalPatterns/singleton-mini.png';

import adapter from '../assets/images/structuralPatterns/adapter-mini.png';
import bridge from '../assets/images/structuralPatterns/bridge-mini.png';
import composite from '../assets/images/structuralPatterns/composite-mini.png';
import decorator from '../assets/images/structuralPatterns/decorator-mini.png';
import facade from '../assets/images/structuralPatterns/facade-mini.png';
import flyweight from '../assets/images/structuralPatterns/flyweight-mini.png';
import proxy from '../assets/images/structuralPatterns/proxy-mini.png';

import chainofresponsibility from '../assets/images/behavioralPatterns/chain-of-responsibility-mini.png';
import command from '../assets/images/behavioralPatterns/command-mini.png';
import iterator from '../assets/images/behavioralPatterns/iterator-mini.png';
import mediator from '../assets/images/behavioralPatterns/mediator-mini.png';
import memento from '../assets/images/behavioralPatterns/memento-mini.png';
import observer from '../assets/images/behavioralPatterns/observer-mini.png';
import state from '../assets/images/behavioralPatterns/state-mini.png';
import strategy from '../assets/images/behavioralPatterns/strategy-mini.png';
import templatemethod from '../assets/images/behavioralPatterns/template-method-mini.png';
import visitor from '../assets/images/behavioralPatterns/visitor-mini.png';

const Catalog = ({ navigation, route }) => {
    const content_text = itext => {
        return <Text style={styles.content}>{itext}</Text>;
    };
    const CatalogHeader_text = itext => {
        return <Text style={styles.CatalogHeader}>{itext}</Text>;
    };
    const header1_text = itext => {
        return <Text style={styles.header1}>{itext}</Text>;
    };
    const image_content = imageLink => {
        return (
            <View style={styles.image_content}>
                <Image style={styles.image_content} source={imageLink} />
            </View>
        );
    };
    const Catalog_En_Screen = Catalog_En;
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.mainContainer}>
            {CatalogHeader_text('The Catalog of Design Patterns')}

            {header1_text('Creational patterns')}
            {content_text(Catalog_En_Screen.creationalPatternsDefinition)}
            <View style={{ marginLeft: 6 }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <DesignPatternComponent
                        image={factorymethod}
                        name={'Factory Method'}
                        onPress={() =>
                            navigation.navigate('Factory Method')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={abstractFactory}
                        name={'Abstract Factory'}
                        onPress={() =>
                            navigation.navigate('Abstract Factory')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={builder}
                        name={'Builder'}
                        onPress={() =>
                            navigation.navigate('Builder')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={prototype}
                        name={'Prototype'}
                        onPress={() =>
                            navigation.navigate('Prototype')
                        }></DesignPatternComponent>
                </View>
                <DesignPatternComponent
                    image={singleton}
                    name={'Singleton'}
                    onPress={() =>
                        navigation.navigate('Singleton')
                    }></DesignPatternComponent>
            </View>

            {header1_text('Structural patterns')}
            {content_text(Catalog_En_Screen.structuralPatternsDefinition)}
            <View style={{ marginLeft: 6 }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <DesignPatternComponent
                        image={adapter}
                        name={'Adapter'}
                        onPress={() =>
                            navigation.navigate('Adapter')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={bridge}
                        name={'Bridge'}
                        onPress={() =>
                            navigation.navigate('Bridge')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={composite}
                        name={'Composite'}
                        onPress={() =>
                            navigation.navigate('Composite')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={decorator}
                        name={'Decorator'}
                        onPress={() =>
                            navigation.navigate('Decorator')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={facade}
                        name={'Facade'}
                        onPress={() =>
                            navigation.navigate('Facade')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={flyweight}
                        name={'Flyweight'}
                        onPress={() =>
                            navigation.navigate('Flyweight')
                        }></DesignPatternComponent>
                </View>
                <DesignPatternComponent image={proxy} name={'Proxy'} onPress={()=> navigation.navigate('Proxy')}></DesignPatternComponent>
            </View>

            {header1_text('Behavioral patterns')}
            {content_text(Catalog_En_Screen.behavioralPatternsDefinition)}
            <View style={{ marginLeft: 6 }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <DesignPatternComponent
                        image={chainofresponsibility}
                        name={'Chain of Responsibility'}
                        onPress={() =>
                            navigation.navigate('Chain Of Responsibility')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={command}
                        name={'Command'}
                        onPress={() =>
                            navigation.navigate('Command')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={iterator}
                        name={'Iterator'}
                        onPress={() =>
                            navigation.navigate('Iterator')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={mediator}
                        name={'Mediator'}
                        onPress={() =>
                            navigation.navigate('Mediator')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={memento}
                        name={'Memento'}
                        onPress={() =>
                            navigation.navigate('Memento')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={observer}
                        name={'Observer'}
                        onPress={() =>
                            navigation.navigate('Observer')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={state}
                        name={'State'}
                        onPress={() =>
                            navigation.navigate('State')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={strategy}
                        name={'Strategy'}
                        onPress={() =>
                            navigation.navigate('Strategy')
                        }></DesignPatternComponent>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <DesignPatternComponent
                        image={templatemethod}
                        name={'Template Method'}
                        onPress={() =>
                            navigation.navigate('Template Method')
                        }></DesignPatternComponent>
                    <DesignPatternComponent
                        image={visitor}
                        name={'Visitor'}
                        onPress={() =>
                            navigation.navigate('Visitor')
                        }></DesignPatternComponent>
                </View>
            </View>

            <View style={{ height: 30 }}></View>
        </ScrollView>
    );
};

const styles = Mainstyles;

export default Catalog;
