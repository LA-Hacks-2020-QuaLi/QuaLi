import React from 'react'
import { Activities } from '../Activies';
import data from '../../../data/index.json';
import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
    return (
        <Container fluid>
            <Row className = "flex-xl-nowrap">
                <Col xl ="2">1 of 3</Col>
                <Col xl ="8">
                    <div className = "card-wrapper">
                    {
                        data.map(({PHOTO, category, activity}) =>                     
                        <Activities {...{ picture: PHOTO, title: activity, text: category}}/> 
                    )}

                    </div>

                </Col>
                <Col xl ="2">3 of 3</Col>
            </Row>            
        </Container>
        // <div className='container-fluid'>
        //     <div className = "col-ms-2">
        //         <h1>Test1</h1>
        //     </div>
        //     <div className = "col-ms-8">
        //     </div>
        //     <div className = "col-ms-2">
        //         <h1>Test2</h1>
        //     </div>
        // </div>
    ) 
}
