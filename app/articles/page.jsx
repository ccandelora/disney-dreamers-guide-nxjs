import React from 'react'

const Articles = () => {
    const posts = [
        {_id: 1, title: 'First Post', description: 'This is the first post'},
        {_id: 2, title: 'Second Post', description: 'This is the second post'},
        {_id: 3, title: 'Third Post', description: 'This is the third post'},
        {_id: 4, title: 'Fourth Post', description: 'This is the fourth post'},
    ]
  return (
    <div>
      Articles Page
      <div className="">
        {posts.map((post) => (
            <a
            href="https://nextjs.org/docs"
            key={post._id}
            className=""
            >
            <h2>{post.title} &rarr;</h2>
            <p>{post.description}</p>
            </a>
        ))}
     </div>
    </div>
  )
}

export default Articles
