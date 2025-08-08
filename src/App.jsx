import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import DeleteProfile from './pages/DeleteProfile';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import CreateArticle from './pages/CreateArticle';
import EditArticle from './pages/EditArticle';
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/delete-profile" element={<DeleteProfile />} />
          <Route path="/ArticleList" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/CreateArticle" element={<CreateArticle />} />
           <Route path="/articles/edit/:id" element={<EditArticle />} />
        </Route>
        {/* <Route path="/UserDashboard" element={<UserDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;