import React, { createContext, useState } from 'react'

interface ImageColors {
    primaryColor: string;
    secondaryColor: string;
}

interface ContextProps {
    colors: ImageColors;
    previousColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPreviousMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {
    const [colors, setColors] = useState<ImageColors>({
        primaryColor: 'transparent',
        secondaryColor: 'transparent'
    })

    const [previousColors, setPreviousColors] = useState<ImageColors>({
        primaryColor: 'transparent',
        secondaryColor: 'transparent'
    })

    const setMainColors = (colors: ImageColors) => {
        setColors(colors);
    }

    const setPreviousMainColors = (colors: ImageColors) => {
        setPreviousColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            colors,
            previousColors,
            setMainColors,
            setPreviousMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}