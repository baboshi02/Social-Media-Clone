import React from 'react'

export const PostElement = (props) => {
 const {text}=props.post
  return (
    <div className='bg-slate-400 h-[50vh] w-1/2 relative'>
        {text} 
        <div className='absolute right-0 bottom-0'>
          Baboshi
        </div>
    </div>
  )
}
