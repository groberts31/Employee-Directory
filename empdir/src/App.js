import React from "react";
import PageWorking from "./components/Page";
import EmployeeInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import Employees from "./employees.json";



function App() {
  return 
  <Wrapper>
    <PageWorking />
  <EmployeeInfo />
  </Wrapper>
}

export default App;
