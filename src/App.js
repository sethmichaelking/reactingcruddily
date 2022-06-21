import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import AddPost from './components/AddPost'
import Header from './components/Header'
import About from './components/About';
import { AddTask } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
function App() {
const GridWrapper = styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;
`; 
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //fetch posts
  useEffect(()=>{
    const fetchPosts = async() =>{
      const response = await axios.get("/api/people")
      const data = await response.data
      setPosts(data.sort((a,b) => a.id - b.id))
    }
    fetchPosts()
  }, [])
  //add post

  const addTask = async (post) =>{
    try {
       await axios.post("/api/people", post)
       setPosts([...posts, post])
    }
    catch(err){
      console.log(err)
    }
  }
  const handleDelete = (id) =>{
    try {
      const performDelete = async() =>{
       await axios.delete(`/api/people/${id}`)
      }
      performDelete()
      setPosts(posts.filter(post => post.id !== id))
    }
   catch(err){
    console.log(err)
   }
  }
  const handleUpdate = (post) =>{
    try {
      const update = async() =>{
      await axios.put(`/api/people/${post.id}`, post)
      }
      update()
      setPosts(posts)
    }
   catch(err){
    console.log(err)
   }
  }

  return (
    <React.Fragment>
      <Router>
          <NavigationBar />
          <Sidebar />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/' element={
                  <>
                  <div>
                      <Header posts={posts}/>
                      <Button style={{marginBottom: '20px', marginLeft: '1340px'}} variant="primary" onClick={handleShow}>
                        Add Record
                      </Button>
                      <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <AddPost addTask={addTask}/>
                        </Modal.Body>
                      </Modal>
                      <Table handleUpdate={handleUpdate} handleDelete={handleDelete}addTask={addTask} posts={posts}/> 
                  </div>
                </>
              }/>
            </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
  {/* <Header posts={posts}/>
        <Button style={{float: 'right', marginBottom: '20px'}}variant="primary" onClick={handleShow}>
          Add Record
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddPost addTask={addTask}/>
          </Modal.Body>
        </Modal>
        <Table handleUpdate={handleUpdate} handleDelete={handleDelete}addTask={addTask} posts={posts}/> */}