import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 
  
import axios from "axios"; 
  
import JobCards from "../components/JobCards"; 
  
import { MdWorkOutline } from "react-icons/md"; 
import { BiWorld } from "react-icons/bi"; 
import { demo } from "../demoApiData"; 
  
function MainPage() { 
  let { state } = useLocation(); 
  
  let currPage = state == null ? 0 : state.pagination; 
  const [query, setQuery] = useState(""); 
  const [fullTime, setFullTime] = useState(false); 
  const [location, setLocation] = useState(""); 
  const [pagination, setPagination] = useState(currPage); 
  
  const [actualQuery, setActualQuery] = useState(""); 
  const [actualLocation, setActualLocation] = useState(""); 
  
  let que = actualQuery == "" ? "Full Stack Developer" : actualQuery; 
  let loc = actualLocation == "" ? "India" : actualLocation; 
  
  const [apiData, setApiData] = useState(); 
  
  const [error, setError] = useState(null); 
  const HandleSubmit = (event) => { 
    event.preventDefault(); 
    setActualQuery(query); 
    setActualLocation(location); 
    const options = { 
      method: "GET", 
      url: "https://jsearch.p.rapidapi.com/search", 
      params: { 
        query: que + " in " + loc, 
        page: "1", 
        num_pages: "15", 
        employment_types: fullTime ? "FULLTIME" : "PARTTIME", 
      }, 
      headers: { 
        "X-RapidAPI-Key": "71b69fb31bmsh7d13a809fa7e7ecp16c1fcjsn21afd2c7dd25", 
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com", 
      }, 
    }; 
    axios.request(options).then((res) => { 
      console.log(res); 
      setApiData(res.data.data); 
    }); 
    //setApiData(apiData) 
  }; 
  const handleFullTime = () => { 
    setFullTime((prev) => !prev); 
  }; 
  const handleLocation = (e) => { 
    setLocation("" + e.target.value); 
  }; 
  
  useEffect(() => { 
    const options = { 
      method: "GET", 
      url: "https://jsearch.p.rapidapi.com/search", 
      params: { 
        query: que + " in " + loc, 
        page: "1", 
        num_pages: "15", 
        employment_types: fullTime ? "FULLTIME" : "PARTTIME", 
      }, 
      headers: { 
        "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_SECRET_KEY, 
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com", 
      }, 
    }; 
    axios 
      .request(options) 
      .then((res) => setApiData(res.data.data)) 
      .catch((err) => setError(err)); 
    //console.log(apiData) 
  }, []); 
  
  //console.log(error) 
  return ( 
    <div className="bg-background min-h-screen"> 
      <div className=" font-Poppins max-w-full p-4 text-xl md:p-8 cursor-pointer "> 
        <b>Jobs</b> Portal 
      </div> 
      {error != null && ( 
        <div className="bg-primary text-sm rounded  
                        text-white font-Poppins max-w-full  
                        p-4 mx-4 mb-4 md:p-8 md:mx-8 md:mb-8"> 
          { 
            <div> 
              <div className="text-black">{error.code}</div> 
              <br /> 
              {error.response.data.message} 
              <br /> 
              <br /> 
              Note :{" "} 
              <i> 
                {" "} 
                Due to exceeded of MONTHLY quota for Requests. You can not do
                more requests for the end of the month.{" "} 
              </i> 
              <b> 
                <u>Currently it shows demo api data.</u> 
              </b> 
            </div> 
          } 
        </div> 
      )} 
      <header className="font-Roboto max-w-full  
                           mx-4 h-32 rounded-lg  
                         bg-jobs-background bg-left-bottom  
                         flex items-center justify-center  
                         md:mx-8 md:bg-cover "> 
        <form 
          onSubmit={(e) => HandleSubmit(e)} 
          className="bg-white flex items-center  
                       justify-around gap-0  
                     rounded-lg m-10 md:w-2/3  
                     md:gap-8 sm:gap-4 "
        > 
          <MdWorkOutline className="flex-none text-sm m-2  
                                      sm:m-4 text-gray-400 sm:text-xl" /> 
          <input 
            type="text"
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Title, companies, expertise or benefits"
            className="outline-0 text-sm grow font-Roboto w-full"
          /> 
          <input 
            type="submit"
            className="bg-primary text-white px-4  
                       py-2 text-sm rounded-md  
                       flex-none m-1 sm:px-6  
                       sm:py-3 sm:text-lg"
          /> 
        </form> 
      </header> 
      <main className="flex flex-col w-full md:flex-row"> 
        <form className="p-4 py-8 font-Roboto text-secondary  
                         text-sm font-normal w-full  
                         md:pl-8 md:pr-0 md:w-1/3 sm:text-lg"> 
          <input 
            type="checkbox"
            checked={fullTime} 
            className="w-4 h-4 mx-3 mb-4"
            onChange={handleFullTime} 
          />{" "} 
          Full Time 
          <br /> 
          <label className="font-bold text-gray-400">Location</label> 
          <div className="flex items-center bg-white  
                            shadow rounded p-4 my-4 gap-2 w-full "> 
            <BiWorld /> 
            <input 
              type="text"
              className="text-sm outline-none grow w-full"
              placeholder="City, state, zip code or country"
              onChange={(e) => handleLocation(e)} 
            /> 
          </div> 
          <label> 
            <input 
              type="radio"
              name="radio-location"
              className="w-4 h-4 mx-3 mb-4"
              value="India"
              onClick={(e) => handleLocation(e)} 
            /> 
            India 
          </label> 
          <br /> 
          <label> 
            <input 
              type="radio"
              name="radio-location"
              className="w-4 h-4 mx-3 mb-4"
              value="London"
              onClick={(e) => handleLocation(e)} 
            /> 
            London 
          </label> 
          <br /> 
          <label> 
            <input 
              type="radio"
              name="radio-location"
              className="w-4 h-4 mx-3 mb-4"
              value="New York"
              onClick={(e) => handleLocation(e)} 
            /> 
            New York 
          </label> 
          <br /> 
          <label> 
            <input 
              type="radio"
              name="radio-location"
              className="w-4 h-4 mx-3 mb-4"
              value="Berlin"
              onClick={(e) => handleLocation(e)} 
            /> 
            Berlin 
          </label> 
          <br /> 
        </form> 
        <section className="p-4 w-full md:w-2/3 md:p-8 "> 
          {/* {demo.jobs_results.map((item,i) => <JobCard key={i} data={item}/>)} */} 
          {apiData == null ? ( 
            <div className="flex flex-col justify-center items-center h-full"> 
              <svg 
                aria-hidden="true"
                className="w-12 h-12 mr-2 text-white  
                           animate-spin dark:text-gray-300  
                           fill-blue-600 mb-4 "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              > 
                <path 
                  d= 
"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                /> 
                <path 
                  d= 
"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                /> 
              </svg> 
              <h3>Loading jobs...</h3> 
            </div> 
          ) : ( 
            apiData && <JobCards apiData={apiData} pagination={pagination} /> 
          )} 
        </section> 
      </main> 
    </div> 
  ); 
} 
export default MainPage; 