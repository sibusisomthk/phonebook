import React, { Component } from 'react';
import { Container, Row, Col, Button, Overlay } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../Styles/phonebooks.css';

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
            <Container className="phonebook-container">
                <div className="header">
                    <div className="header-content">
                    </div>
                    <div className="header-concave">
                    </div>
                </div>

                <div className="list-container">
                </div>              
            </Container >
        );
    }
}
const mapStateToProps = state => {
    return {
        phonebooks: state.action.phonebooks
    };
}
//action creators
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebooks);