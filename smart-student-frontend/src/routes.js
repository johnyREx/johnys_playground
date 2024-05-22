import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Auth/HomePage';
import SignInForm from './components/Auth/SignIn';
import SignUpForm from './components/Auth/SignUp';
import NoteList from './components/Notes/NoteList';
import NoteEditor from './components/Notes/NoteEditor';
import TaskList from './components/Tasks/TaskList';
import TaskEditor from './components/Tasks/TaskEditor';
import ReminderList from './components/Reminders/ReminderList';
import ReminderEditor from './components/Reminders/ReminderEditor';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signin" element={<SignInForm />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route 
      path="/dashboard/*" 
      element={
        <ProtectedRoute>
          <Routes>
            <Route path="notes" element={<NoteList />} />
            <Route path="edit-note/:id" element={<NoteEditor />} />
            <Route path="tasks" element={<TaskList />} />
            <Route path="edit-task/:id" element={<TaskEditor />} />
            <Route path="reminders" element={<ReminderList />} />
            <Route path="edit-reminder/:id" element={<ReminderEditor />} />
          </Routes>
        </ProtectedRoute>
      } 
    />
  </Routes>
);

export default AppRoutes;
