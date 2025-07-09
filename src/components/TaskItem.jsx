"use client"

import { useState } from "react"
import { useTasks } from "../contexts/TaskContext"
import { formatDateForInput } from "../utils/dateUtils"
import "./TaskItem.css"

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask, toggleTask } = useTasks()
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description || "",
    dueDate: task.dueDate || "",
  })

  const handleEdit = () => {
    setIsEditing(true)
    setEditData({
      title: task.title,
      description: task.description || "",
      dueDate: task.dueDate || "",
    })
  }

  const handleSave = () => {
    if (!editData.title.trim()) return

    updateTask(task.id, {
      title: editData.title.trim(),
      description: editData.description.trim(),
      dueDate: editData.dueDate || null,
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData({
      title: task.title,
      description: task.description || "",
      dueDate: task.dueDate || "",
    })
  }

  const handleChange = (e) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-checkbox">
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="checkbox" />
      </div>

      <div className="task-content">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleChange}
              className="edit-input"
              autoFocus
            />
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              className="edit-textarea"
              rows="2"
              placeholder="Description..."
            />
            <input
              type="date"
              name="dueDate"
              value={editData.dueDate}
              onChange={handleChange}
              className="edit-input"
              min={formatDateForInput(new Date())}
            />
            <div className="edit-actions">
              <button onClick={handleSave} className="save-btn">
                Save
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="task-info">
            <h4 className="task-title">{task.title}</h4>
            {task.description && <p className="task-description">{task.description}</p>}
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="task-actions">
          <button onClick={handleEdit} className="edit-btn" title="Edit task">
            ✏️
          </button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn" title="Delete task">
            🗑️
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskItem
