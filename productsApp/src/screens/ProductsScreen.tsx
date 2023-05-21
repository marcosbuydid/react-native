import React, { useContext, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigators/ProductsNavigator';
import { ProductScreen } from './ProductScreen';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { };

export const ProductsScreen = ({ navigation }: Props) => {

    const [isRefreshing, setIsRefreshing] = useState(false);

    const { products, loadProducts } = useContext(ProductsContext)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.2}
                    style={{ marginRight: 20 }}
                    onPress={() => navigation.navigate('ProductScreen', {})}
                >
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: '500'
                    }}>
                        Add
                    </Text>
                </TouchableOpacity>
            )
        })

    }, [])

    const pullToRefreshProducts = async () => {
        setIsRefreshing(true);
        await loadProducts();
        setIsRefreshing(false);
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <FlatList
                data={products}
                keyExtractor={(p) => p._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => navigation.navigate('ProductScreen', {
                            id: item._id,
                            name: item.nombre
                        })}
                    >
                        <Text style={styles.productName}>
                            {item.nombre}
                        </Text>
                    </TouchableOpacity>
                )}

                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}

                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={pullToRefreshProducts}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    productName: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
        color: 'black'
    },

    itemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,255,0.8)'
    },

})