import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../../constants/screen.contants';
import { ThemesConfig } from '../../../interfaces/screens/themes.interace';

export const styles = (theme: ThemesConfig) => {
    return StyleSheet.create({
        container: {
            width: WINDOW_WIDTH,
        },
        logo: {
            width: 30,
            height: 30,
            borderRadius: 5,
            marginBottom: 3
        },
        title: {
            color: theme.text.primary,
            fontSize: 16,
            opacity: 0.7,
            marginLeft: 20
        },
        containerBalance: {
            padding: 12,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: '#E3B81D',
            zIndex: 0,
            borderRadius: 10,
            margin: 20,
            marginTop: 10
        },
        textTitle: {
            color: theme.text.primary
        },
        align: {
            alignItems: "center"
        },
        text: {
            color: "#FFF",
            fontSize: 11,
            marginLeft: 1
        }
    })
};