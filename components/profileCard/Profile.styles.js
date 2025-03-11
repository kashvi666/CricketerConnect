import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileCard: {
        padding: 15,
        width: "90%",
        marginBottom: 20,
        backgroundColor: "#ffdff1", // White background for contrast
        borderRadius: 10, // Rounded corners
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowRadius: 4,
        elevation: 5, // Adds shadow effect on Android
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 80,
        objectFit: "cover"
    },
    username: {
        fontWeight: "bold",
        fontSize: 20
    },
    desc: {
        fontSize: 16,
        color: "#555" // Slightly muted color for better readability
    },
    socialMediaIcons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20
    }
});
