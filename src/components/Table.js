import React from 'react'
import Table from 'react-bootstrap/Table';
import UpdatePost from './UpdatePost'
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
const GridWrapper = styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;
`; 
function Tablee({handleDelete, posts, handleUpdate}) {
  return (
    <GridWrapper>
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
    </GridWrapper>
  )
}

export default Tablee