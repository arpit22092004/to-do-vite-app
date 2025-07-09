"use client"

import { useState } from "react"
import { useTasks } from "../contexts/TaskContext"
import { formatDateForInput } from "../utils/dateUtils"
import "./AddTaskForm.css"

const AddTaskForm = () => {
  const { addTask } = useTasks()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    addTask({
      title: formData.title.trim(),
      description: formData.description.trim(),
      dueDate: formData.dueDate || null,
    })

    setFormData({ title: "", description: "", dueDate: "" })
    setIsOpen(false)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="add-task-form">
      {!isOpen ? (
        <button className="add-task-button" onClick={() => setIsOpen(true)}>
          <span className="add-icon">+</span>
          Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Task title..."
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              autoFocus
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              placeholder="Description (optional)..."
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              rows="3"
            />
          </div>

          <div className="form-group date-group">
            <span className="calendar-icon" onClick={() => document.getElementById('date-input').showPicker && document.getElementById('date-input').showPicker()}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="16" rx="2" fill="currentColor"/>
                <rect x="7" y="2" width="2" height="4" rx="1" fill="#fff"/>
                <rect x="15" y="2" width="2" height="4" rx="1" fill="#fff"/>
                <rect x="3" y="9" width="18" height="2" fill="#fff"/>
              </svg>
            </span>
            <input
              id="date-input"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="form-input date-input"
              min={formatDateForInput(new Date())}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Add Task
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => {
                setIsOpen(false)
                setFormData({ title: "", description: "", dueDate: "" })
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AddTaskForm
