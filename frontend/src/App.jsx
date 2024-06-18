import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Spinners from './components/Spinners';

function App() {
  const [data, setData]= useState([]);
  const [loading, setLoading]= useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("http://127.0.0.1:8000/api/get-data");
    // const json = await response.json();
    const resData = await response.data.data;
    setLoading(false);
    setData(resData);
  };

  useEffect(() => {

    fetchData();
    console.log(data);

    
  }, []);

  

  return (
    <>
      <div className="container my-5">
      <h1 className="text-center my-5">Table Data Visualization</h1>
      {loading && <Spinners/>}
        {!loading && (
          <table className="table  table-success table-striped-columns" border={3}>
          <caption className="text-center">Table Visualization</caption>

            <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Trade Code</th>
              <th scope="col">High</th>
              <th scope="col">Low</th>
              <th scope="col">Open</th>
              <th scope="col">Close</th>
              <th scope="col">Volume</th>
            </tr>
          </thead>
          <tbody>
          

              {
                data.map((item) => {
                    return(
                      <tr>
                      <th scope="row">{item.date}</th>
                      <td>{item.trade_code}</td>
                      <td>{item.high}</td>
                      <td>{item.low}</td>
                      <td>{item.open}</td>
                      <td>{item.close}</td>
                      <td>{item.volume}</td>
                    </tr>
                    );
                  
                })
              }

            

          </tbody>
        </table>
        )}
      </div>
    </>
  );
}

export default App;
