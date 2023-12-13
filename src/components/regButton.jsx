import React from 'react'

export const Button = (props) => {
    return (
        <button {...props}  className="bg-blue-400 rounded text-black">
            {props.children}
        </button>
    )
  
  
}
