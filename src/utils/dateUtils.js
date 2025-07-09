export const formatDateForInput = (date) => {
  if (!date) return ""
  const d = new Date(date)
  return d.toISOString().split("T")[0]
}

export const formatDateHeader = (dateString) => {
  if (!dateString || dateString === "no-date") {
    return "No Due Date"
  }

  const date = new Date(dateString)
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  // Reset time for comparison
  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const tomorrowOnly = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate())

  if (dateOnly.getTime() === todayOnly.getTime()) {
    return "Today"
  } else if (dateOnly.getTime() === tomorrowOnly.getTime()) {
    return "Tomorrow"
  } else if (dateOnly < todayOnly) {
    return "Overdue"
  } else {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
}

export const groupTasksByDate = (tasks) => {
  const grouped = {}

  tasks.forEach((task) => {
    const dateKey = task.dueDate || "no-date"
    if (!grouped[dateKey]) {
      grouped[dateKey] = []
    }
    grouped[dateKey].push(task)
  })

  // Sort groups by date
  const sortedEntries = Object.entries(grouped).sort(([a], [b]) => {
    if (a === "no-date") return 1
    if (b === "no-date") return -1
    return new Date(a) - new Date(b)
  })

  // Sort tasks within each group by completion status and creation time
  const result = {}
  sortedEntries.forEach(([date, tasks]) => {
    result[date] = tasks.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1
      }
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
  })

  return result
}
