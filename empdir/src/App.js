import React, { Component } from "react";
import PageWorking from "./components/Page";
import EmployeeInfo from "./components/Card";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import Search from "./components/Search";

class App extends Component {

    state = {
      search: "",
      employees,
      order: "asc"
    };
  
    handleInputChange = event => {
      console.log(event.target.value);
      this.setState({ search: event.target.value });
    };
  
    sortName = event => {
      let currentEmployees = this.state.employees
      .sort(function(a, b) {
        if(a.name.value < b.name.value) return -1;
        if(a.name.value > b.name.value) return 1;
        return 0;
      })
      this.setState({ employees: currentEmployees });
    }
    
    render() {
      const filteredEmployees = this.state.employees.filter((employee) => { 
        return employee.name.indexOf(this.state.search) !== -1;
      })
  
      return (
        <Wrapper>
          <PageWorking />
          <br />
          <Search
          handleInputChange={this.handleInputChange}
          sortName={this.sortName}
          search={this.state.search}/>
          
          {filteredEmployees.map(employee => (
            <EmployeeInfo
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              role={employee.role}
              contact={employee.contact}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default App;