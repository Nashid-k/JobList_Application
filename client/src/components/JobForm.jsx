import React, { useState } from 'react'
import InputField from './InputField'
import { savedData } from '../services/api'

const defaultData = {
  title: "",
  company: "",
  location: "",
  description: ""
}

export default function JobForm() {
  const [formData, setFormData] = useState(defaultData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("Job Submitted:", formData)
    await savedData(formData)
    setFormData(defaultData) 
  }

  return (
    <div>
      <h2 className='mt-3 mb-4'>Add a Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type='text'
          label='Job Title'
          onChange={handleChange}
          value={formData.title}
          id='title'
          name='title'
        />
        <InputField
          type='text'
          label='Company Name'
          onChange={handleChange}
          value={formData.company}
          id='company'
          name='company'
        />
        <InputField
          type='text'
          label='Location'
          onChange={handleChange}
          value={formData.location}
          id='location'
          name='location'
        />
        <InputField
          type='text'
          label='Description'
          onChange={handleChange}
          value={formData.description}
          id='description'
          name='description'
        />
        <button type='submit' className='btn btn-success mt-3'>
          Submit
        </button>
      </form>
    </div>
  )
}
