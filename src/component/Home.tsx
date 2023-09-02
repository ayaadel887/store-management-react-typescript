import { useState } from "react";
import "./Home.style.css";
import { dumyemployeeList, IEmployee } from "./Employee.type";
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dumyemployeeList as IEmployee[]
  );
  return (
    <>
      <header className="artical-header">
        hi we gona have fun with typescript
      </header>
      <section className="section-content">
        <div>this is content </div>
      </section>
    </>
  );
};

export default Home;
