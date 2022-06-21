import React from 'react'
import Table from 'react-bootstrap/Table';
import UpdatePost from './UpdatePost'
import { Button } from 'react-bootstrap'
function Tablee({handleDelete, posts, handleUpdate}) {
  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{padding: '0 !important',
   margin: '0 !important'}}>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
        <tr key={post.id}>
            <td>{posts.indexOf(post) + 1}</td>
            <td>{post.first}</td>
            <td>{post.last}</td>
            <td>
                <div style={{display: 'flex', justifyContent: 'center', justifyContent: 'space-evenly'}}> 
                    <Button variant="danger" onClick={() => handleDelete(post.id)}> DELETE </Button>
                    <UpdatePost id={post.id} handleUpdate={handleUpdate} />
                </div>
            </td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Tablee