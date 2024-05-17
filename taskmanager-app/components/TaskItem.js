// components/TaskItem.js 
import React from "react"; 
import { View, Text, TouchableOpacity } from "react-native"; 
import styles from "../styles"; 
  
const TaskItem = ({ 
    task, 
    handleEditTask, 
    handleToggleCompletion, 
    handleDeleteTask, 
}) => { 
    return ( 
        <View style={styles.taskItem}> 
            <View style={styles.taskTextContainer}> 
                <Text 
                    style={[ 
                        styles.taskText, 
                        task.status === "Completed" && 
                            styles.completedTaskText, 
                    ]}> 
                    {task.title} 
                </Text> 
                <Text style={styles.taskDescription}> 
                    {task.description} 
                </Text> 
                <Text style={styles.taskStatus}> 
                    Status: {task.status} 
                </Text> 
                <Text style={styles.taskDeadline}> 
                    Deadline: {task.deadline} 
                </Text> 
                <Text style={styles.taskCreatedAt}> 
                    Created: {task.createdAt} 
                </Text> 
            </View> 
            <View style={styles.buttonContainer}> 
                <TouchableOpacity 
                    onPress={() => handleEditTask(task)} 
                    style={[styles.editButton]}> 
                    <Text style={styles.buttonText}> 
                        Edit 
                    </Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => 
                        handleToggleCompletion(task.id) 
                    } 
                    style={[ 
                        styles.completeButton, 
                        task.status === "Completed" && 
                            styles.completedButton, 
                    ]}> 
                    <Text style={styles.buttonText}> 
                        {task.status === "Completed"
                            ? "Pending"
                            : "Completed"} 
                    </Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => 
                        handleDeleteTask(task.id) 
                    } 
                    style={[styles.deleteButton]}> 
                    <Text style={styles.buttonText}> 
                        Delete 
                    </Text> 
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 
}; 
  
export default TaskItem;