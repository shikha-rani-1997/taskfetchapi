import './App.css';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import Image from './Imageapi';


const App = () => {
  
  const [employees, setEmployees] = useState([]);
  const [visible, setVisible] = useState(1);
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setEmployees(response.data);
    }
    const loadMore = () => {
      setVisible(visible + 1);
    };


    const renderHeader = () => {
        let headerElement = ['id', 'name', 'email', 'phone', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

  const renderBody = (person, index) => {
    return (
      <tr >
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.phone}</td>
        <td><button onClick={loadMore}>Load 1 More</button></td>
      </tr>
    );
  };
    

    return (
      <> 
        <Image />
            <h1 id='title'>React Table</h1>
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
            {employees.slice(0, visible).map(renderBody)}
            {visible < employees.length}
                </tbody>
            </table>
        </>
    )
}

export default App;