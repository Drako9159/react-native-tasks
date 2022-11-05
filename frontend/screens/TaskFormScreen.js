import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { saveTask, getTask, updateTask } from "../api";

const TaskFormScreen = ({ navigation, route }) => {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const handleChange = (name, value) => {
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task);
      } else {
        await updateTask(route.params.id, task);
      }
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Updating a task" });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ title: task.title, description: task.description });
      })();
    }
  }, []);
  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a title"
        placeholderTextColor="#576574"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Write a description"
        placeholderTextColor="#576574"
        onChangeText={(text) => handleChange("description", text)}
        value={task.description}
      ></TextInput>
      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 7,
    borderWidth: 1,
    borderColor: "#10ac84",
    padding: 4,
    textAlign: "center",
    width: "90%",
    borderRadius: 5,
    fontSize: 20,
    height: 35,
    color: "#ffffff",
  },
  buttonSave: {
    backgroundColor: "#10ac84",
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "90%",
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
  },
  buttonUpdate: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%"
  }
});

export default TaskFormScreen;
