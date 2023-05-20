import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext';

export const ProductsScreen = () => {

    const { products } = useContext(ProductsContext)

    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <FlatList
                data={products}
                keyExtractor={(p) => p._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.2}
                    >
                        <Text style={styles.productName}>
                            {item.nombre}
                        </Text>
                    </TouchableOpacity>
                )}

                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    productName: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
    },

    itemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,255,0.8)'
    },

})