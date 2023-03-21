import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { act } from 'react-test-renderer'
import { Cast } from '../interfaces/CreditsInterface'

interface Props {
    actor: Cast
}

export const MovieCast = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10
                        }}
                    />
                )
            }

            <View style={{ marginRight: 12 }}>
                <Text style={styles.actorName}>
                    {actor.name}
                </Text>
                <Text style={styles.actorCharacter}>
                    {actor.character}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', marginTop: 5
    },

    actorName: {
        fontSize: 15,
        color: 'black',
        marginLeft: 5,
        marginTop: 5
    },

    actorCharacter: {
        fontSize: 15,
        color: 'grey',
        marginLeft: 5
    }

})
