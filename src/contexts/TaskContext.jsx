"use client"

import { createContext, useContext, useReducer, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { syncTasksToBackend } from "../utils/api"

const TaskContext = createContext()

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload
    case "ADD_TASK":
      return [...state, action.payload]
    case "UPDATE_TASK":
      return state.map((task) => (task.id === action.payload.id ? action.payload : task))
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload)
    default:
      return state
  }
}

export const TaskProvider = ({ children }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", [])
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks)

  // Sync tasks to localStorage whenever tasks change
  useEffect(() => {
    setStoredTasks(tasks)
    // Simulate backend sync
    if (tasks.length > 0) {
      syncTasksToBackend(tasks)
    }
  }, [tasks, setStoredTasks])

  // Initialize tasks from localStorage
  useEffect(() => {
    if (storedTasks.length > 0) {
      dispatch({ type: "SET_TASKS", payload: storedTasks })
    }
  }, [])

  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      completed: false,
      ...task,
    }
    dispatch({ type: "ADD_TASK", payload: newTask })
  }

  const updateTask = (id, updates) => {
    const task = tasks.find((t) => t.id === id)
    if (task) {
      const updatedTask = { ...task, ...updates }
      dispatch({ type: "UPDATE_TASK", payload: updatedTask })
    }
  }

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id })
  }

  const toggleTask = (id) => {
    const task = tasks.find((t) => t.id === id)
    if (task) {
      updateTask(id, { completed: !task.completed })
    }
  }

  const value = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider")
  }
  return context
}
