import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import ScholarshipListing from './scholarshipListing';


const Scholarships = ({ isHome = false }) => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScholarships = async () => {
     
      const apiurl = isHome ? '/api/scholarships?_limit=3' : "/api/scholarships"  
      
      try {
        const res = await fetch(apiurl);
        const data = await res.json(); // await the JSON response
        setScholarships(data);
      } catch (error) {
        console.log("Error while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, [isHome]);

  if (!Array.isArray(scholarships)) {
    return <div>No scholarships available.</div>;
  }

  return (
  
    <section className="bg-blue-50 px-4 py-10  dark:bg-gray-800 text-black dark:text-black ">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Scholarships" : "Browse Scholarships"}
        </h2>
        
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {scholarships.map((sch) => (
              <ScholarshipListing key={sch.id} sch={sch}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Scholarships;
