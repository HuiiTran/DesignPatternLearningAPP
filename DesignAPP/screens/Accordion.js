import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccordionItem = ({ title, navigateTo, isActive, onPress }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[styles.itemContainer, isActive ? styles.activeItem : null]}
            onPress={() => {
                onPress();
                navigation.navigate(navigateTo);
            }}
        >
            <Text style={styles.itemTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

const Accordion = ({ data, accordionTitle }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <View style={styles.accordionContainer}>
            <TouchableOpacity
                style={styles.accordionHeader}
                onPress={() => setActiveIndex(activeIndex === null ? 0 : null)}
            >
                <Text style={styles.accordionTitle}>{accordionTitle}</Text>
            </TouchableOpacity>
            {activeIndex !== null && (
                <View>
                    {data.map((item, index) => (
                        <AccordionItem
                            key={index.toString()}
                            title={item.title}
                            navigateTo={item.navigateTo}
                            isActive={activeIndex === index}
                            onPress={() => setActiveIndex(activeIndex === index ? null : index)}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    accordionContainer: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    accordionHeader: {
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    accordionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginLeft:20
    },
    activeItem: {
        backgroundColor: '#e0e0e0',
    },
    itemTitle: {
        fontSize: 16,
    },
});

export default Accordion;