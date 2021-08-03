import React from 'react'
import { useGlobalContext } from './Context'

const Update = () => {
  const {handleSubmit, update, setUpdate, setMenu, input, setInput} = useGlobalContext();
  
  const handleCancel = () => {
    setUpdate(false);
    setMenu(false);
  }
  return (
    <section className={`${update ? 'landing-update flex' : 'landing-update'}`}>
      <article className="form-article">
        <div className='form-div'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">New Title</label>
            <input 
              type="text" 
              name="title" 
              placeholder="Title"
              onChange={(e) => setInput({...input, name: e.target.value})}
              value={input.name}
            ></input>

            <label htmlFor="link">New Address</label>
            <input 
              type="url" 
              name="link" 
              placeholder="http://example.com"
              onChange={(e) => setInput({...input, url: e.target.value})}
              value={input.url}
            ></input>
            
            <button type="submit">Update</button>
          </form>
          <button className="cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </article>
    </section>
  )
}

export default Update
