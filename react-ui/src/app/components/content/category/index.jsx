import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./index.css";

export class Category extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container fluid>
                <Row className = "form-group">
                    <Col>
                        <button className = "category-btn btn btn-primary">Suprised</button>
                    </Col>
                </Row>
                <Row className = "form-group">
                    <Col>
                        <button className = "category-btn btn btn-light">Cooking</button>
                    </Col>
                </Row>
                <Row className = "form-group">
                    <Col>
                        <button className = "category-btn btn btn-light">Family</button>
                    </Col>
                </Row>
            </Container>            
        )
    }
}