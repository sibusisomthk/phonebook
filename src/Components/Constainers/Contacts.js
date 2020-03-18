import React, { Component } from 'react';
import { Container, Row, Col, Button, Overlay } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../Styles/contacts.css';
import ProfileIcon from '..//Asserts/Icons/profile.png';
import FavIcon from '..//Asserts/Icons/starF.svg';
import NotFavIcon from '..//Asserts/Icons/starNF.svg';

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
        const contactsList = this.props.contacts.map((contact, index) => (
            <div className="contact-container" key={index.toString()} value={index} onChange={() => this.onChange(contact.phone)}>
                <div className="contact">
        <img className="medium-icon" style={{margin:'unset'}} src={contact.image?contact.image:ProfileIcon} /><div className="name">{contact.firstName+" "+contact.lastName }</div><img className="extra-small-icon" src={contact.isFavourite?FavIcon:NotFavIcon} style={{alignSelf:'center'}}/>
                </div>
                <hr className="contact-underline" />
            </div>
        ));
        //styles
        return (
            <Container className="contacts-container">
                <div className="header">
                    <div className="header-content">

                    </div>
                    <div className="header-concave">
                    </div>
                </div>

                <div className="list-container">
                    {contactsList}
                </div>
            </Container >
        );
    }
}
const mapStateToProps = state => {
    return {
        contacts: state.action.contacts
    };
}
//action creators
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);