import logo from "../assets/mapp.jpg";
import React, { useState } from 'react';

export default function MajorSearch() {
  const [count, setCount] = useState(0);
  console.log("I rendered");
  let foo = 0;
  return (
    <div className="major-search">
      <img src={logo} alt="Molloy Logo" />
      <h1>Molloy Advising</h1>
      <select>
        <option>Select a Major</option>
      </select>
      {foo}
      <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
  {count}
    </div>
     
  );
}

<div className="course-search">
<select>
  <option>Select a Course</option>
  <option>Select a Major</option>
</select>
<button onClick= "Select a Course()">Click me</button>
  <button onClick= "Select a Major()">Click me</button>
<input type= "Course list" value="Course List"> </input>
</div>

