
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;

`
const Header = styled.div`
padding: 100px 100px 10px 100px;
h1{
  font-size: 42px
}`
const Subheader = styled.div`
font-size: 26px
font-weight: 300px
`


const Airlines = () =>  {
  const [airlines, setAirlines] = useState([])
  useEffect(()=>{

    axios.get('/api/v1/airlines.json')
    .then(response => {setAirlines(response.data.data) })
    .catch(response => console.log(response))
  }, [airlines.length]  )

  const grid = airlines.map(item => {
    return (
    <Airline 
      key={item.attributes.name}
      attributes = {item.attributes}/>
    )
  })
  return (
    <Home> 
      <Header>
        <h1>OpenFlights</h1>
        <div className='subheader'>Honest airline reviews</div>
        <Grid>{grid}</Grid>
    </Header>
  </Home>
  )
}

export default Airlines