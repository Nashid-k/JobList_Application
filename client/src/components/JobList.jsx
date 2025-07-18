import React from 'react';

export default function JobList({ jobs }) {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-3">Job Listings</h3> */}
      <ul className="list-group">
        {jobs.map((job, index) => (
          <a
            key={index}
            href={job.link || '#'}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div>
              <strong>{job.title}</strong>
              <div className="text-muted small">{job.company}</div>
            </div>
            <span className="badge bg-primary rounded-pill">View</span>
          </a>
        ))}
      </ul>
    </div>
  );
}
