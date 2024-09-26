import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = ({
  title = "Make Study Easier",
  subtitle = "Find your dream scholarship that fits your education goal.",
}) => {
  const [searchTerm, setSearchTerm] = useState(""); // Store the search term
  const [scholarships, setScholarships] = useState([]); // Store all scholarships
  const [filteredScholarships, setFilteredScholarships] = useState([]); // Store filtered scholarships
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Track visibility of dropdown

  const searchBoxRef = useRef(null); // Reference to the search box

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = '/api/scholarships'; // Adjust this to your actual API path
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json(); // Parse the response as JSON
        setScholarships(data); // Set the scholarships data
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchData();
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter scholarships based on the search term
    if (term) {
      const filtered = scholarships.filter((scholarship) =>
        scholarship.name.toLowerCase().includes(term.toLowerCase()) ||
        scholarship.provider.toLowerCase().includes(term.toLowerCase()) ||
        scholarship.country.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredScholarships(filtered);
      setIsDropdownVisible(true); // Show the dropdown when typing
    } else {
      setFilteredScholarships([]); // Clear the results when the search term is empty
      setIsDropdownVisible(false); // Hide the dropdown
    }
  };

  // Hide the dropdown when clicking outside the search box
  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setIsDropdownVisible(false); // Hide dropdown when clicking outside
    }
  };

  // Add event listener to detect outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="bg-indigo-700 py-20 mb-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>

            {/* Search Input */}
            <div className="mt-6 w-full max-w-lg mx-auto relative " ref={searchBoxRef}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
                className="px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900 text-black dark:text-white"
                placeholder="Search scholarships..."
              />

              {/* Scholarship Search Results (Only shown when the dropdown is visible) */}
              {isDropdownVisible && filteredScholarships.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white w-full max-w-lg rounded-lg shadow-md z-10 dark:bg-gray-900 text-black dark:text-white">
                  <ul className="max-h-60 overflow-y-auto"> {/* Scrollable result box */}
                    {filteredScholarships.map((scholarship) => (
                      <li key={scholarship.id} className="border-b last:border-none">
                        {/* Navigate to the scholarship's detail page when clicked */}
                        <Link
                          to={`/scholarships/${scholarship.id}`}
                          className="block p-4 hover:bg-gray-100 max-w-lg rounded-lg shadow-md dark:bg-gray-900 text-black dark:text-white"
                          onClick={() => setIsDropdownVisible(false)} // Hide dropdown on click
                        >
                          <h3 className="text-xl font-bold">{scholarship.name}</h3>
                          <p className="text-gray-500">Provider: {scholarship.provider}</p>
                          <p className="text-gray-500">Country: {scholarship.country}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* If no results are found and a search term exists */}
              {isDropdownVisible && searchTerm && filteredScholarships.length === 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white w-full max-w-lg rounded-lg shadow-md z-10 dark:bg-gray-900 text-black dark:text-white ">
                  <p className="p-4 text-gray-500">No scholarships found for "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
