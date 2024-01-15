import React from 'react'
export const PostElement = (props) => {
 const {text,createdAt,userName}=props.post

 const date=createdAt?.toDate().toLocaleDateString()
 const time=createdAt?.toDate().toLocaleTimeString()
  return (
    <div className='bg-slate-400 h-96 w-1/2 relative'>
        {text} 
        
        <div className='absolute left-0 bottom-0'>
          {date + '   ' +time}
        </div>
        <div className='absolute right-0 bottom-0'>
         {userName}
        </div>
    </div>
  )
}
