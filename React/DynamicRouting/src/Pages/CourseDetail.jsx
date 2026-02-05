import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const parameter = useParams()   // useParams() is a inbuild function which we get from react-router-dom which helps us to get the id which is written after /course in app.jsx
    console.log(parameter.id);
    

    return (
        <div>
            <h1>{parameter.id} Course Details</h1>
        </div>
    )
}

export default CourseDetail
