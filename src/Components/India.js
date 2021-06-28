import React,{useState,useEffect} from 'react'
import StateData from './StateData'
import { Card } from 'react-bootstrap'
import Axios from 'axios'
const India = () => {
    const [state,setState] = useState({})
useEffect((item,key)=>{
Axios.get('https://corona.lmao.ninja/v2/countries/india').then((res)=>{
    setState(res.data)

})

},[])
    return (
        <div>
            <img src="https://www.countryflags.io/in/shiny/64.png" alt="india" />
            <h3>India</h3>
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-4 pt-4">
                        <Card style={{maxwidth: '5px' }} >
                            <Card.Body className='bg-info'>
                                <Card.Title>Total Case</Card.Title>
                                <h2>{state.cases}</h2>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-4 pt-4">
                        <Card style={{ maxwidth: '18rem' }}>
                            <Card.Body className='bg-warning'>
                                <Card.Title>Active Case</Card.Title>
                                <h2>{state.active}</h2>
                            
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-4 pt-4">
                        <Card style={{ maxwidth: '18rem' }}>
                            <Card.Body className='bg-success'>
                                <Card.Title>Recovery Case</Card.Title>
                                <h2>{state.recovered}</h2>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-12 col-xl-12 pt-4">
                        <Card style={{ maxwidth: '18rem' }}>
                            <Card.Body className='bg-danger'>
                                <Card.Title>Death</Card.Title>
                                <h2>{state.deaths}</h2>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </div>
            <StateData />
            </div>
    )
}

export default India
