import React from 'react'
import { useGlobalContext } from './Context'

const Links = () => {
  const {links, menu, handleMenu, removeLink, openUpdate, shit} = useGlobalContext();

  return (
    <section className='links container'>
      <header className='header'>Links</header>
      <div className='links-div'>
      {
        links.map((link, index) => {
          const {name, url} = link;

          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          const boxStyle = {
            backgroundColor: `#${randomColor}`
          }
        
          return(
            <div className='box' key={index}>
              <div className='box-bg'>{name}</div>
              <a href={url} className='box-link' style={boxStyle}>
                <i class="fas fa-link"></i>
              </a>
              <div className={`${(shit === index && menu) ? 'menu show' : 'menu'}`}>
                <p onClick={() => openUpdate(index)}>Edit</p>
                <p onClick={() => removeLink(index)}>Remove</p>
              </div>
              <i className='fas fa-ellipsis-v' onClick={() => handleMenu(index)}></i>
            </div>
          )
        })
      }
      </div>
      <div className='empty-div'>
        No links were added yet.
      </div>
    </section>
  )
}

export default Links
