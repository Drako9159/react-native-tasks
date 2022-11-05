import { FlatList, RefreshControl, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import TaskItem from "./TaskItem";
import { getTasks, deleteTask } from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refresing, setRefresing] = useState(false);

  const isFocused = useIsFocused()

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };
  useEffect(() => {
    
    loadTasks();
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTasks()
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete}/>;
  };
  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadTasks();
    setRefresing(false);
  });

  return (
    <FlatList
      style={styles.listCotainer}
      keyExtractor={(item) => item.id + ""}
      data={tasks}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refresing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3b62"
        ></RefreshControl>
      }
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  listCotainer: {
    width: "100%",
  },
});

export default TaskList;
