// components/TaskList.js 
import React from "react"; 
import { ScrollView } from "react-native"; 
import TaskItem from "./TaskItem"; 
import styles from "../styles"; 
  
const TaskList = ({ 
    tasks, 
    handleEditTask, 
    handleToggleCompletion, 
    handleDeleteTask, 
}) => { 
    return ( 
        <ScrollView style={styles.taskList}> 
          
            {/* Scrollable container for the list of tasks */} 
            {tasks.map((t) => ( 
                <TaskItem 
                    // Use the task's ID as the key to  
                    // uniquely identify each TaskItem 
                    key={t.id} 
                      
                    // Pass the task object as a prop to TaskItem 
                    task={t} 
                      
                    // Pass functions to handle editing,  
                    // toggling completion, and deletion 
                    handleEditTask={handleEditTask} 
                    handleToggleCompletion={ 
                        handleToggleCompletion 
                    } 
                    handleDeleteTask={handleDeleteTask} 
                /> 
            ))} 
        </ScrollView> 
    ); 
}; 
// Export the TaskList component 
export default TaskList;