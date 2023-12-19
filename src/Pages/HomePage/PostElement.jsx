import React from 'react'

export const PostElement = (props) => {
 const {text}=props.post
  return (
    <div>
        {text} <br />
    </div>
  )
}
