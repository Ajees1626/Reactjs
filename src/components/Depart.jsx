import React, { useState } from 'react'
import "./Depart.css"
 
const departments = [
    { code: "HRD", name: "Human Resource", description: "Adipisciing et cillum tempor minim atdquilq exce", createdBy: "Admin", createdOn: "31/05/2025", active: false },
    { code: "ADM", name: "Administration", description: "Lorem consectetur ea", createdBy: "Owner", createdOn: "03/11/2020", active: false },
    { code: "PDE", name: "Product Engineering", description: "Est nostrum eu", createdBy: "Owner", createdOn: "19/07/2020", active: false },
    { code: "SSD", name: "Support Service", description: "Nisi est dolore aliquip", createdBy: "Admin", createdOn: "20/06/2020", active: false },
    { code: "MKT", name: "Marketing", description: "Aliquip culpa enim ipsum", createdBy: "Admin", createdOn: "10/12/2023", active: false },
    { code: "SAS", name: "Sales", description: "Laboris incididunt amet", createdBy: "Owner", createdOn: "03/12/2024", active: false },
  ];

const Department  = () => {

    const [toggled,setToggle] =useState(Array(departments.length).fill(false))
    
    const toggleButton = (index) => {
        setToggle((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index];  
          return newState;
        });
      };

  return (
    <div className='department'>
        
        <h2>Department</h2>

        <div className="departmentbox">
    
        <table>
              
            <tr>
                <th><span></span></th>
                <th>Code</th>
                <th>Name</th>
                <th>Description </th>
                <th>Created By </th>
                <th>Created On </th>
                <th>active</th>
            </tr>
            {departments.map((dept, index) => (
            <tr key={dept.code}>
                <td><span></span></td> 
                <td>{dept.code}</td>
                <td>{dept.name}</td>
                <td>{dept.description}</td>
                <td>{dept.createdBy}</td>
                <td>{dept.createdOn}</td>
                <td><button className={`toggle-btn ${toggled[index]? "toggled" :""}`} onClick={() => toggleButton(index)}>
                    <div className="thumb"></div></button></td> 
            </tr>
             ))}
            
            
        </table>
         <button>back</button>
         
        </div>
      
    </div>
          
  )
}

export default Department 
