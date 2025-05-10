import React, { useState } from "react";

export default function Marksheet() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [table, setTable] = useState([]);

  const handle_click = () => {
    setTable([...table, { name, marks }]);
    setName("");
    setMarks("");
  };
  return (
    <>
      <center>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Number
        <input
          type="text"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <br />
        <button onClick={handle_click}>Add</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {table.map((e, index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}
