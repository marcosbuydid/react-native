import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { UseAnimation } from '../hooks/UseAnimation';

interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = UseAnimation()
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    size={50}
                    color="#5856D6"
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}
