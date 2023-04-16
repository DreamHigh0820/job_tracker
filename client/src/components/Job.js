import React from 'react';
import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';

export default function Job({props}) {
  const {
    _id,
    position, 
    company, 
    jobLocation, 
    jobType, 
    createdAt, 
    status
  } = props;

  const {
    setEditJob,
    deleteJob,
  } = useAppContext();

  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY'); // Apr 14th 23

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <footer>
          <div className="actions">
            <Link 
              to='/add-job'
              className="btn edit-btn"
              onClick={() => deleteJob(_id)}
            >
              Edit
            </Link>
            <button 
              type='button' 
              className='btn delete-btn' 
              onClick={()=> deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
