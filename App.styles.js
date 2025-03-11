import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: StatusBar.currentHeight || 30, // Ensure space for status bar
        flex: 1,
        backgroundColor: "#e5e5e5" // Updated background color
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#c9188b",
        marginTop: 10,
        marginBottom: 10
    }
});
