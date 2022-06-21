import './App.css';
import Table from './components/Table'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import AddPost from './components/AddPost'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

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
    <div className="App">
      <div className='container'>
      <Header posts={posts}/>
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
      <Table handleUpdate={handleUpdate} handleDelete={handleDelete}addTask={addTask} posts={posts}/>
      </div>
    </div>
  );
}

export default App;
