import React, { Component } from 'react';
import { Container, Row, Col, Button, Overlay } from 'react-bootstrap';
import { connect } from 'react-redux';
class Contacts extends Component {
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
        const List = this.props.contacts.map((contact, index) => (
            <div key={index.toString()} value={index} onChange={() => this.onChange(contact.id)}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);