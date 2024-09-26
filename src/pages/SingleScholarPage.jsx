import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleScholarPage = () => {
  const { id } = useParams();
  const scholardata = useLoaderData();

  return (
    <>
      <section className='dark:bg-gray-900 text-black dark:text-white'>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/scholarships"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="fas fa-arrow-left mr-2" />
            Back to Scholarships
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50   dark:bg-gray-800 text-black dark:text-white">
        <div className="container m-auto py-10 px-6 dark:bg-gray-800 text-black dark:text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            <main className="md:col-span-2 ">
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left dark:bg-gray-900 text-black dark:text-white ">
                <div className="text-gray-500 mb-4">{scholardata.provider}</div>
                <h1 className="text-3xl font-bold mb-4">{scholardata.name}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaLocationArrow className="fa-solid fa-location-dot text-lg text-orange-700 mr-2" />
                  <p className="text-orange-700">{scholardata.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6 dark:bg-gray-900 text-black dark:text-white">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">Scholarship Eligibility</h3>
                <p className="mb-4">{scholardata.eligibility}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">Amount</h3>
                <p className="mb-4">{scholardata.amount}</p>
              </div>
            </main>

            {/* Sidebar */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 text-black dark:text-white">
                <h3 className="text-xl font-bold mb-6">Field of Study</h3>
                <h2 className="text-2xl">{scholardata.field_of_study}</h2>
                <p className="my-2">{scholardata.eligibility}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Country:</h3>
                <p className="my-2 rounded-lg  bg-indigo-100 dark:bg-indigo-600 p-2 font-bold">{scholardata.country}</p>
                <h3 className="text-xl ">Official Link: <button  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"><Link className='font-bold text-blue-800' to={scholardata.application_link}>Apply</Link></button> </h3>
                {/* <p className="my-2 bg-indigo-100 p-2 font-bold text-blue-800"><Link to={scholardata.application_link}>Link</Link></p> */}
              </div>

              {/* Manage */}
              {/* <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Notes</h3>
                <Link
                  to={`/edit-job/${scholardata.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(scholardata.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div> */}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const scholarshipLoader = async ({ params }) => {
  const res = await fetch(`/api/scholarships/${params.id}`);
  const data = await res.json();
  return data;
};

export { SingleScholarPage as default, scholarshipLoader };
