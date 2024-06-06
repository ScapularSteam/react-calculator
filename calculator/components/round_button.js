import { Touchable, Text, View } from "react-native";

export default function RoundButton() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                5
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#328da8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100px',
    },

    text: {
        size: '5px',
    },

});
  