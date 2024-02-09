import React from 'react'
import { Link } from 'react-router-dom'

const BlogCart = () => {
  return (
    <>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>1 December 2024</p>
                <h5 className='title'>A Beautiful moment</h5>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum qui fuga at delectus corrupti, eos neque libero non labore?</p>
                <Link to={'/blog/:id'} className='button'>Read More</Link>
            </div>
        </div>
    </>
  )
}

export default BlogCart