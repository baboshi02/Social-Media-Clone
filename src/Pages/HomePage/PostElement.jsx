import React from 'react'

export const PostElement = (props) => {
 const post=props.post
  return (
    <div>
        {post.text}
    </div>
  )
}
