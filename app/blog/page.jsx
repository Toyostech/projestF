import React from 'react'
import style from '@/app/blog/page.module.css'
import PostCard from '@/app/postcard/postCard'
import { error } from 'console'

const getDate = async () => {
  const respones = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'force-cache'})

  if (!respones.ok) {
    throw new error('Something went wrong')
  }
  return respones.json()
  
}


const blogpage = async () => {
  const posts = await getDate(); 
  return (
    <div className={style.container}>
      {posts.map((post) => (
        <div className={style.post} key={post.id}>
          <PostCard post={post} />
      </div>  
        
      ))}


      
      
     
     
      









    </div>
  )
}

export default blogpage