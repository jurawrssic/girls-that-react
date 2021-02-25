import React from 'react'

const ToDo = ({ id, text, done, onMark }) => {
  return (
    <div className='to-do'>
      {
        done
          ? <i className="fas fa-check"></i>
          : <i className="fas fa-times"></i>
      }

      <p>{ text }</p>

      <button className='complete-to-do-button' disabled={ done ? true : false } onClick={ () => onMark(id) }>
        {
          done
            ? "DONE!"
            : "DO IT!"
        }
      </button>
    </div>
  )
}

export default ToDo
