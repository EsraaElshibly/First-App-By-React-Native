import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    header: {
        backgroundColor: "#a7bed3",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
        fontSize: 22,
        marginBottom: 20,
    },

    addTodo:
    {
        backgroundColor: '#F6F6EB' 
    },

    addTodoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
    },

    input: {
        fontSize: 22,
        borderColor: 'white',
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        padding: 5,
    },

    btnContainer: {
        backgroundColor: "#c6e2e9",
        fontSize: 20,
        width: "25%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    btnText: {
        textAlign: "center",
        alignSelf: "center",
        fontSize: 22,
        padding: 7,
    },

    itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
    },

    itemTitle: {
        fontSize: 18,
        color: "black",
    },

    listHeader: {
        margin: 20 ,
        textAlign: "center",
        fontSize: 22, 
        fontWeight:'bold'
    },

    endList: {
        backgroundColor: "#a7bed3",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
        fontSize: 28,
        marginTop: 20,
    },

    line: { 
        borderColor: 'gray',
        padding: 5, 
        marginBottom: 10, 
        borderBottomWidth: 5 
    },
});