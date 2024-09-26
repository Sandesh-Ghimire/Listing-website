import { useState } from "react";
import { FaMapMarker } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ScholarshipListing = (sch) => {
  const { id, name, provider,  amount, eligibility, deadline, country, field_of_study, application_link, notes } = sch.sch;
  const [ShowFullEligibility, setShowFullEligibility] = useState(false);
  const[ShowFullNote, setShowFullNote]=useState(false);
  
  // Declare 'des' outside of the if block
  let des = sch.sch.eligibility; 
  let finalnotes= sch.sch.notes;
  // If not showing full description, truncate it
  if (!ShowFullEligibility) {
    des = eligibility.substring(0, 50) + '...';
  }

  if(!ShowFullNote)
  {
    finalnotes=notes.substring(0,50)+'...';
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative  dark:bg-gray-900 text-black dark:text-white">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{provider}</div>
            <h3 className="text-xl font-bold">{name}</h3>
            
          </div>

          <div className="mb-5">{des}
            <h3> Amount: {amount}</h3>
         
          </div>
          <button onClick={() => setShowFullEligibility((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
            {ShowFullEligibility  ? 'Less' : 'More'}
          </button>
          
         
          {/* <h3 className="text-indigo-500 mb-2">{}</h3> */}
       <h2>Note: {finalnotes}</h2>
       <button onClick={() => setShowFullNote((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
            {ShowFullNote ? 'Less' : 'More'}
          </button>
          <div className="flex flex-col lg:flex-row justify-between  mb-5  ">Deadline: {deadline} 
          <Link
              to={application_link}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2   rounded-lg text-center text-sm"
            >
              Apply
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline text-lg mb-1 mr-1" />
              {country}
            </div>
            <Link
              to={`/scholarships/${id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScholarshipListing;
