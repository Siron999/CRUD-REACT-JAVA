import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from '../Cards/Cards'

const Home = () => {
    return (
        <>
           <Container className="d-flex flex-column justify-content-center mt-5" >
              {/* <div className="d-flex justify-content-center mb-4"><h1>Games</h1></div> */}
              <Cards />
              </Container>
              
        </>
    )
}

export default Home
