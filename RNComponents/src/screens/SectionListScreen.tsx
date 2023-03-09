import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const SectionListScreen = () => {

    interface Houses {
        house: string
        data: string[]
    }
    const houses: Houses[] = [
        {
            house: "DC Comics",
            data: ["Batman", "Superman", "Robin", "Marvel Woman"]
        },
        {
            house: "Marvel Comics",
            data: ["Antman", "Thor", "Spiderman", "Hulk", "Iron Man"]
        },
        {
            house: "Anime",
            data: ["Kenshin", "Goku", "Saitama"]
        }
    ]

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={houses}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title={'Section List'} />}
                ListFooterComponent={() => <Text style={localStyle.labels}
                >{'Total houses: ' + houses.length}</Text>}

                renderItem={({ item }) => <Text style={{ color: 'black' }}>{item}</Text>}
                stickySectionHeadersEnabled

                renderSectionHeader={({ section }) => <Text style={localStyle.titles}>{section.house}</Text>}
                renderSectionFooter={({ section }) => <Text style={localStyle.items}>
                    Items per section: {section.data.length}</Text>}

                SectionSeparatorComponent={() => <Text>**************************</Text>}

                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const localStyle = StyleSheet.create({
    labels: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },

    titles: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },

    items: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
})
