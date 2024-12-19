
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate(); 

  const handleUpdateClick = () => {
    navigate('/update'); 
  };

  return (
    <>
      <button onClick={handleUpdateClick}>Go to Update</button>
      <table className="Tables">
        <tbody>
          <tr className="Rows">
            <th className="Head">S NO.</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Place</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Kalash</td>
            <td>CS</td>
            <td>Indore</td>
            <button onClick={handleUpdateClick}>Update</button>
            <button>Delete</button>
          </tr>
          <tr>
            <td>2.</td>
            <td>Krishna</td>
            <td>CS</td>
            <td>Indore</td>
            <button onClick={handleUpdateClick}>Update</button>
            <button>Delete</button>
          </tr>
          <tr>
            <td>3.</td>
            <td>Kritika</td>
            <td>IT</td>
            <td>Bhopal</td>
            <button onClick={handleUpdateClick}>Update</button>
            <button>Delete</button>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;