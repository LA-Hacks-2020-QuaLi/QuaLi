// TODO: How to split the components of filter with the proper state?

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./index.css";

export class FilterTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: 0,
            numberOfMembers: 0
        } 
    }

    setDuration(e) {
        // TODO: check for cases
        let duration = e.currentTarget.value;
        this.setState({duration: duration})
    }

    setSize(e) {
        let numberOfMembers = e.currentTarget.vale;
        this.setState({numberOfMembers: numberOfMembers})
    }

    render() {
        return (
            <Container fluid className = "filter-wrapper">
                <form noValidate>
                    <p className = "mb-1">Adjust search activities</p>
                    <Row className = "form-group flex-xl-nowrap">
                        <Col md = "3">
                            <label className = "form-label" htmlFor = "duration-form">Duration</label>
                        </Col>
                        <Col md = "9">
                            <input className = "form-input" id = "duration-form" placeholder = "1 hour etc." 
                                onChange = {e => { this.setDuration(e) }} />
                        </Col>
                    </Row>

                    <Row className = "form-group flex-xl-nowrap">
                        <Col md = "3">
                            <label className = "form-label" htmlFor = "group-size-form">Size of party</label>
                        </Col>
                        <Col md = "9">
                            <input className = "form-input" id = "group-size-form" placeholder = "family, 10 people, etc."
                                onChange = {e => { this.setSize(e) }}/>
                        </Col>
                    </Row>
                </form>
                <Row className = "flex-xl-nowrap">
                    <button type = "button" className = "btn btn-secondary submit-button">Submit</button>
                </Row>
            </Container>
        )
    }
}
