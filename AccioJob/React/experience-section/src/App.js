import "./App.css";
import { useState, useEffect } from "react";
import Title from "./Components/Title";
import Company from "./Components/Company";
import CompanyDetails from "./Components/CompanyDetails";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJob = async () => {
    const response = await fetch(url);
    const newJob = await response.json();
    setJobs(newJob);
    setLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return (
      <div className="section loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="section">
      <Title />
      <div className="jobs-center">
        <Company jobs={jobs} value={value} setValue={setValue} />
        <CompanyDetails jobs={jobs} value={value} />
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
