import { useState,useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import JobForm from './components/JobForm'
import { getData } from './services/api.js'
import JobList from './components/JobList'

function App() {
  const [count, setCount] = useState(0)
  const [showForm, setShowForm] = useState(false)

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobsData = async()=>{
    const response = await getData();
    setJobs(response);
    }
    getJobsData();
  },[showForm])

  const handleToggleForm = () =>{
    setShowForm(prev=> !prev)
  }

  return (
    <>
     <div className="container mt-5">
           <div className='row'>
                <div className='col-md-4'>
                  <h1 className='mb-4'>Job Board</h1>
                  <button className='btn btn-primary mb-3' onClick={handleToggleForm}>{showForm ? 'Hide Job Form':'Show Job form'}</button>
                  
               {showForm && <JobForm />}
                    
                
                </div>
                <div className="col-md-8">
                  <h2 className='mb-4'>Job Listings</h2 >
               {!showForm && <JobList jobs={jobs}/>}
               
             </div>
           </div>
     </div>
    </>
  )
}

export default App
