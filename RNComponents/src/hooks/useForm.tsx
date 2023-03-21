import React, { useState } from 'react'

export const useForm = <T extends Object>(initState: any) => {

    const [state, setState] = useState(initState);
    const onChange = <K extends Object>(value: K, field: keyof T) => (
        setState({
            ...state,
            [field]: value
        })
    )

    return {
        ...state,
        form: state,
        onChange,
    }
}
