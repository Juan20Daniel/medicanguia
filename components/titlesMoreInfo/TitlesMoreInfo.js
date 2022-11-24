import { Text, StyleSheet } from "react-native";
const TitlesMoreInfo = ({ value }) => {
    return (
        <Text style={styles.titleNetworks}>
            {value}
        </Text>
    );
}
export default TitlesMoreInfo;
const styles = StyleSheet.create({
    titleNetworks: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#575757",
        marginLeft: 40
    }
});