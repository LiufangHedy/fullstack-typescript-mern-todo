import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()
  // console.log('addtodo component: ', formData);
  

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    // console.log('formData in apptodo: ', formData);
    
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' required/>
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' required/>
        </div>
      </div>
      <div>
        <button style={{display: "block"}} disabled={formData === undefined ? true: false}>Add Todo</button>
        <input style={{display: "block", borderRadius: "20px", marginLeft: "8px"}} type="reset" value="Reset"/>
      </div>
    </form>
  )
}

export default AddTodo
