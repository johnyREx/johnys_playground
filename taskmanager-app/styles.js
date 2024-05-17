// styles.js 
  
import { StyleSheet } from "react-native"; 
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "#f7f7f7", 
    }, 
    title: { 
        fontSize: 28, 
        fontWeight: "bold", 
        marginBottom: 20, 
        color: "#333", 
        textAlign: "center", 
    }, 
    taskList: { 
        flex: 1, 
    }, 
    taskItem: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        backgroundColor: "#fff", 
        marginBottom: 10, 
        padding: 15, 
        borderRadius: 10, 
    }, 
    taskTextContainer: { 
        flex: 1, 
    }, 
    taskText: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#333", 
    }, 
    completedTaskText: { 
        textDecorationLine: "line-through", 
        color: "gray", 
    }, 
    taskDescription: { 
        fontSize: 16, 
        color: "#666", 
    }, 
    taskTime: { 
        fontSize: 14, 
        color: "#666", 
    }, 
    taskStatus: { 
        fontSize: 16, 
        color: "#666", 
    }, 
    buttonContainer: { 
        // Or 'row' depending on your layout 
        flexDirection: "column",  
        // Adjust the value as needed for the  
        // desired spacing 
        marginVertical: 2,  
    }, 
  
    editButton: { 
        backgroundColor: "#007BFF", 
        borderRadius: 5, 
        padding: 10, 
        marginRight: 10, 
        width: 110, 
    }, 
    button: { 
        marginBottom: 10, 
    }, 
    completeButton: { 
        backgroundColor: "#4CAF50", 
        borderRadius: 5, 
        padding: 10, 
        marginRight: 10, 
        width: 110, 
    }, 
    completedButton: { 
        backgroundColor: "#808080", 
    }, 
    buttonText: { 
        color: "#fff", 
        fontSize: 15, 
    }, 
    deleteButton: { 
        backgroundColor: "#FF9500", 
        borderRadius: 5, 
        padding: 10, 
        width: 110, 
    }, 
    addButton: { 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#007BFF", 
        paddingVertical: 15, 
        borderRadius: 10, 
        marginTop: 20, 
    }, 
    addButtonText: { 
        color: "#fff", 
        fontSize: 18, 
        fontWeight: "bold", 
    }, 
    modalContainer: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "#fff", 
    }, 
    input: { 
        borderWidth: 1, 
        borderColor: "#ccc", 
        padding: 10, 
        marginBottom: 20, 
        borderRadius: 5, 
        fontSize: 16, 
    }, 
    inputLabel: { 
        fontSize: 16, 
        fontWeight: "bold", 
    }, 
    errorText: { 
        color: "#FF3B30", 
        fontSize: 16, 
        marginBottom: 10, 
    }, 
    taskDeadline: { 
        color: "#FF3B12", 
    }, 
    taskCreatedAt: { 
        color: "#5497FF", 
    }, 
}); 
  
export default styles;