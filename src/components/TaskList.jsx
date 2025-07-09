import { useTasks } from "../contexts/TaskContext"
import TaskItem from "./TaskItem"
import { groupTasksByDate, formatDateHeader } from "../utils/dateUtils"
import "./TaskList.css"

const TaskList = () => {
  const { tasks } = useTasks()

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <h3>No tasks yet</h3>
        <p>Add your first task to get started!</p>
      </div>
    )
  }

  const groupedTasks = groupTasksByDate(tasks)

  return (
    <div className="task-list">
      {Object.entries(groupedTasks).map(([date, dateTasks]) => (
        <div key={date} className="task-group">
          <h3 className="date-header">
            {formatDateHeader(date)}
            <span className="task-count">({dateTasks.length})</span>
          </h3>
          <div className="tasks">
            {dateTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
