// Simulate backend API calls
const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export const syncTasksToBackend = async (tasks) => {
  try {
    // Simulate sending tasks to backend
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Task Sync",
        body: JSON.stringify(tasks),
        userId: 1,
      }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log("Tasks synced to backend:", result.id)
    }
  } catch (error) {
    console.error("Failed to sync tasks to backend:", error)
  }
}

export const fetchTasksFromBackend = async () => {
  try {
    // Simulate fetching tasks from backend
    const response = await fetch(`${API_BASE_URL}/posts/1`)
    if (response.ok) {
      const result = await response.json()
      return JSON.parse(result.body || "[]")
    }
  } catch (error) {
    console.error("Failed to fetch tasks from backend:", error)
  }
  return []
}
