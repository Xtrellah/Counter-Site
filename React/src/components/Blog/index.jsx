import React, { useState, useEffect } from 'react'

export default function Blog() {

    const [blog, setBlog] = useState([])
    const [name, setName] = useState('')

    useEffect(() => { getData(); }, [])

    function getData() {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => {
                const Blog = data.blog
                setBlog(Blog)
                if (Blog.length > 0) {
                    setName(Blog[0].name)
                }
                console.log(Blog)
            })
            .catch(error => console.error('Error fetching data:', error))
    }

    return (
        <div>
            <h3 className="audiowide-regular">Blog</h3>
            <p>News from the CS2 Community.</p>
            <div>
                {blog.map((blogItem, index) => (
                            <div key={index}>
                                <img src={blogItem.image} />
                                <div>
                                    <h2>{blogItem.title}</h2>
                                    <h4>{blogItem.date}</h4>
                                    <p>{blogItem.desc}</p>
                                </div>
                            </div>
                    ))}
            </div>
        </div>

    )
}