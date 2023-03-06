import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, RefreshControl, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
            setData('This string appears after refresh')
        }, 3500)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={20}
                    progressBackgroundColor={'white'}
                    colors={['black', 'green', 'orange']}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title={'Pull to Refresh'} />
                {
                    data && <Text>{data}</Text>
                }
            </View>
        </ScrollView>
    )
}
