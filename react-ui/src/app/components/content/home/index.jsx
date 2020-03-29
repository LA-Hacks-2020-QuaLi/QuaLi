import React from 'react';
import { Activities } from '../activities';
import { FilterTool } from '../filterTool';
import { Category } from "../category";
import data from '../../../data/index.json';
import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Category/>
                </Col>
                <Col xs = "8">
                    <div className = "card-wrapper">
                    {
                        data.map(({PHOTO, category, activity}) =>                     
                        <Activities {...{ picture: PHOTO, title: activity, text: category}}/> 
                    )}
                    </div>

                </Col>
                <Col>
                    <FilterTool/>
                </Col>
            </Row>            
        </Container>
    ) 
}
