"use client"
import { TaskProvider } from "./contexts/TaskContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import AddTaskForm from "./components/AddTaskForm"
import TaskList from "./components/TaskList"
import ThemeSwitcher from "./components/ThemeSwitcher"
// import Mountains from "./themes/Mountains"
// import Desert from "./themes/Desert"
import Aurora from "./themes/Aurora"
import Ocean from "./themes/Ocean"
// import Cosmic from "./themes/Cosmic"
import Batman from "./themes/Batman"
import { useTheme } from "./contexts/ThemeContext"
import "./App.css"

const ThemeBackground = () => {
  const { currentTheme } = useTheme()

  const themes = {
    // mountains: Mountains,
    // desert: Desert,
    aurora: Aurora,
    ocean: Ocean,
    // cosmic: Cosmic,
    batman: Batman,
  }

  const ThemeComponent = themes[currentTheme]
  return <ThemeComponent />
}

const AppContent = () => {
  return (
    <div className="app">
      <ThemeBackground />
      <div className="app-content">
        <header className="app-header">
          <h1 className="app-title">Task Manager</h1>
        </header>
        <ThemeSwitcher />
        <main className="main-content">
          <AddTaskForm />
          <TaskList />
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
