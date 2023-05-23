import { useEffect, useState } from "react";
import Tab from "./components/Tab";
import EmployeeInfo from "./components/EmployeeInfo";
import axios from "axios";

const API_URL = "https://course-api.com/react-tabs-project";

interface Employee {
  id: string;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

function App() {
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("TOMMY");

  useEffect(() => {
    async function getInfo() {
      try {
        const res = await axios(API_URL);
        const data = res.data;
        setEmployeesList(data);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  }, []);

  if (!loaded) return <h1>Loading...</h1>;

  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col lg:flex-row">
      <nav className="h-32 w-full flex lg:w-1/3 items-end justify-center lg:h-full lg:block lg:py-16 lg:pl-8">
        <ul className="flex lg:flex-col lg:w-full lg:items-end gap-4">
          {employeesList?.map((employee) => {
            if (activeTab === employee.company) {
              return (
                <Tab
                  key={employee.id}
                  active={true}
                  setActiveTab={setActiveTab}
                  name={employee.company}
                />
              );
            } else {
              return (
                <Tab
                  key={employee.id}
                  active={false}
                  setActiveTab={setActiveTab}
                  name={employee.company}
                />
              );
            }
          })}
        </ul>
      </nav>
      {employeesList?.map((employee) => {
        if (activeTab === employee.company) {
          return <EmployeeInfo key={employee.id} {...employee} />;
        }
      })}
    </div>
  );
}

export default App;
