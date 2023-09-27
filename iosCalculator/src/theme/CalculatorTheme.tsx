import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },

    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },

    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },

    smallResult: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 30,
        textAlign: 'right'
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button:{
        width:80,
        height:80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    buttonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '500'
    }

});