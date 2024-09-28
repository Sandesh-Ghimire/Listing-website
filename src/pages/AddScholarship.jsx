import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Initial state for the form fields
const initialState = {
  name: '',
  provider: '',
  amount: '',
  eligibility: '',
  deadline: '',
  country: '',
  field_of_study: '',
  application_link: '',
  notes: ''
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    default:
      return state;
  }
};

const AddScholarship = ({ addScholarshipSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Handler for form submission
  const submitForm = (e) => {
    e.preventDefault();

    // Prepare new scholarship data
    const newScholarship = { ...state };
    console.log(newScholarship);

    // Call the submission function passed as a prop
    addScholarshipSubmit(newScholarship);
    toast.success('Scholarship added successfully.');
    return navigate('/scholarships');
  };

  // Handler to update form fields
  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Scholarship</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Scholarship Name</label>
              <input
                type="text"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Scholarship Name"
                required
                value={state.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Provider</label>
              <input
                type="text"
                name="provider"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Provider"
                required
                value={state.provider}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Amount</label>
              <input
                type="text"
                name="amount"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Scholarship Amount"
                required
                value={state.amount}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Eligibility</label>
              <textarea
                name="eligibility"
                className="border rounded w-full py-2 px-3"
                rows="3"
                placeholder="Eligibility Criteria"
                required
                value={state.eligibility}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Deadline</label>
              <input
                type="date"
                name="deadline"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={state.deadline}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Country</label>
              <input
                type="text"
                name="country"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Country"
                required
                value={state.country}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Field of Study</label>
              <input
                type="text"
                name="field_of_study"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Field of Study"
                required
                value={state.field_of_study}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Application Link</label>
              <input
                type="url"
                name="application_link"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Application Link"
                required
                value={state.application_link}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Notes</label>
              <textarea
                name="notes"
                className="border rounded w-full py-2 px-3"
                rows="3"
                placeholder="Additional Notes"
                value={state.notes}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Scholarship
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddScholarship;
