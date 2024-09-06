// src/App.js
import React, { useState } from 'react';
import AddTaskForm from './component/AddTaskForm';
import TaskList from './component/TaskList';
import './index.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (formData.name && formData.email && formData.age && formData.gender) {
      alert('Form Submitted');
    }
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>Gender: {formData.gender}</p>
        </div>
      )}

      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
