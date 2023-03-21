import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'


export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMoreItems = () => {
        const updatedItemArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            updatedItemArray[i] = numbers.length + i;
        }
        setNumbers([...numbers, ...updatedItemArray])
    }

    const renderItem = (item: number) => {
        return (

            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        );
    }

    return (
        <View style={styles.view}>
            <FlatList
                data={numbers}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.toString()}

                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                )}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
    },

    textItem: {
        backgroundColor: 'green',
        height: 150
    },

    header: {
        marginHorizontal: 20
    }
})
