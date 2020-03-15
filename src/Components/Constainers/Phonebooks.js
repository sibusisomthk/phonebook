import React, { Component } from 'react';
import { Container, Row, Col, Button, Overlay } from 'react-bootstrap';
import { connect } from 'react-redux';
class Phonebooks extends Component {
    constructor(props) {
        super(props);
        //state variables
        this.state = {
           
        }
        //methods binding
    }
    //helper methods
    componentDidMount() {
    }
    render() {
        //constants
        const List = this.props.phonebooks.map((phonebook, index) => (
            <div key={index.toString()} value={index} onChange={() => this.onChange(phonebook.id)}>
            </div>
        ));
        //styles
        return (
            <Container>
            </Container >
        );
    }
}
const mapStateToProps = state => {
    return {
    };
}
//action creators
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebooks);