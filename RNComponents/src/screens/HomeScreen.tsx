import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/AppInterface';
import { styles } from '../theme/appTheme';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },

    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },

]

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title}>
                    Menu Options
                </Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.5,
                    marginVertical: 8
                }}>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={renderListHeader}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}
