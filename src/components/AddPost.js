import { useState } from 'react'


function BasicExample({addTask}) {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')

    const submit = (e) =>{
        if (!first){
            alert('add a first')
        }
        if (!last){
            alert('add a last')
        }
        addTask({first, last})
        setFirst('')
        setLast('')
    }
  return (
    <form onSubmit={submit}>
                <div className="form-group">
                    <label for="formGroupExampleInput">First</label>
                    <input 
                        type="text" 
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        className="form-control"
                        id="formGroupExampleInput" 
                        placeholder="first" 
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Last</label>
                    <input 
                        type="text"  
                        className="form-control"
                        value={last}
                        onChange={(e) => setLast(e.target.value)} 
                        id="formGroupExampleInput2" 
                        placeholder="last" 
                    />
                </div>
                <input type="submit" value="Submit" />
        </form>
  );
}

export default BasicExample;