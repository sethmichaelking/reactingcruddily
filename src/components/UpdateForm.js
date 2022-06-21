import React from 'react'
import { useState } from 'react'
function UpdateForm({handleUpdate, id}) {

    const [first, setTitle] = useState('')
    const [last, setBody] = useState('')

    const onSubmit = (e) =>{
        if (!first){
            alert('please add a title')
            return
        }
        if (!last){
            alert('please add a body')
            return
        }
        handleUpdate({ first, last, id })
        setTitle('')
        setBody('')
    }
  return (
    <div>
          <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Update Title</label>
                    <input 
                        type="text" 
                        value={first}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="formGroupExampleInput" 
                        placeholder="Title" 
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Update Body</label>
                    <input 
                        type="text"  
                        className="form-control"
                        value={last}
                        onChange={(e) => setBody(e.target.value)} 
                        id="formGroupExampleInput2" 
                        placeholder="Body" 
                    />
                </div>
                <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default UpdateForm