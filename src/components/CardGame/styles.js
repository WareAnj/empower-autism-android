import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, choices: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, choice: {
        flex: 1,
        width: 80,
        marginLeft: 2,
        marginRight: 2,
    }, card_image: {
        width: '70%',
        height: '70%'
    }
})
