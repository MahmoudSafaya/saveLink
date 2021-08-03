import React from 'react'
import { useGlobalContext } from './Context'
const Home = () => {
  const {handleSubmit, input, setInput, bool, color, text} = useGlobalContext();

  const alertStyle = {
    background: color
  }
  return (
    <section className="landing container">
      <header className='header'>
        Hi!
      </header>
      <article className="form-article">
        <div className='form-div'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Link Name</label>
            <input 
              type="text" 
              name="title" 
              placeholder="Your link name"
              onChange={(e) => setInput({...input, name: e.target.value})}
              value={input.name}
            >
            </input>

            <label htmlFor="link">Link Address</label>
            <input 
              type="url" 
              name="link" 
              placeholder="http://example.com"
              onChange={(e) => setInput({...input, url: e.target.value})}
              value={input.url}
            >
            </input>

            <button type="submit">Submit</button>
          </form>
        </div>
      </article>
      <div className={`${bool ? 'alert flex' : 'alert'}`}>
        <p style={alertStyle}>{text}</p>
      </div>
    </section>
  )
}

export default Home
