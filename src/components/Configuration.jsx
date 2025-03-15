import React from 'react'
import './Configuration.css'
import Department from './Depart'
import {Link, useNavigate} from "react-router";

const Configuration = () => {

    const navigate = useNavigate()

  return (
    <div className='Configuration'>
        <div className="condiv"> 
      <h1>Configuration </h1>
       <div className='homediv'>
       <table>
        <ul>
          <h3>site Configuration</h3>
          <a href=""><li>Organisation </li></a> 
         <a href=""><li>Branch/Campus </li></a> 
          <a href=""><Link to='/Department'  >Department</Link></a> 
          {/* <a href="" onClick={() => navigate("/Department")}> Department </a>  */}
          <a href=""><li>Teams  </li></a> 
        </ul>
      </table>
      <table>
        <ul>
          <h3>human resource </h3>
          <li>Specilsation  </li>
          <li>Category  </li>
          <li>Engagement Mode  </li>
           
        </ul>
      </table>
      <table>
        <ul>
          <h3>hospital management</h3>
          <li> Employee Group  </li>
          <li>Employee Grade  </li>
          <li>Employee Type  </li>
           
        </ul>
      </table>
       </div>
       </div>

       
    </div>
  )
}

export default Configuration
