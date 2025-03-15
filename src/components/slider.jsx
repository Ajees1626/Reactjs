import React from 'react'
import './slider.css'

const Slider = () => {
  return (
    <div className='slider'>
      <table>
        <ul>
          <h3>Quick Access</h3>
          <li>inbox</li>
          <li>calendar</li>
        </ul>
      </table>
      <table>
        <ul>
          <h3>Sales Force Management </h3>
          <li>Visit Manager </li>
          <li>Doctor List </li>
          <li>Expense Claim </li>
          <li>Contents </li>
        </ul>
      </table>
      <table>
        <ul>
          <h3>Human Resource </h3>
          <li>User </li>
          <li>Payroll </li>
          <li>Reimbursement </li>
          <li>Letters </li>
          <li>Leave Management </li>
        </ul>
      </table>
      <hr />
      <h4>Configuration</h4>
    </div>
  )
}

export default Slider
