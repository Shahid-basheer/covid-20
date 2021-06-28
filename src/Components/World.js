import './World.css'
import { Table } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const World = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        Axios.get('https://corona.lmao.ninja/v2/countries').then((res) => {
            setState(res.data)
        })
    }, [])
    return (
        <div className='world'>
       
            <h3>World</h3>
            <div className="container mt-5 pt-5" style={{maxHeight:'600px', overflowY:' auto'}}>
            <Table striped bordered hover variant="dark" responsive >
            <thead>
                <tr>
                    <th>No</th>
                    <th>Flags</th>
                    <th>Country</th>
                    <th>Total Case</th>
                    <th>Recovered</th>
                    <th>Death</th>
                </tr>
            </thead>
            {
                state.map((item, key) => {
                    return (
                        <tbody>
                        <tr>
                            <td>{key+1}</td>
                           <td><img src={item.countryInfo.flag} alt="" style={{width:'30px'}} />
                           </td>                            
                           <td>{item.country}</td>
                            <td>{item.cases}</td>
                            <td>{item.recovered}</td>
                            <td>{item.deaths}</td>
                        </tr>
        
                    </tbody>
                    
                    )

                })
            }
            </Table>
       
                

            </div>

        </div>
        
    )
}

export default World
