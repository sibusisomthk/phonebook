import React from 'react';
import { Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { history } from './Helpers/history';
import { connect } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import pusIcon from './Components/Asserts/Icons/plus.svg';
import phoneIcon from './Components/Asserts/Icons/telephone.svg';
import phonebookIcon from './Components/Asserts/Icons/phonebook.svg'
import * as PageSection from './Constants/Enums/pageSection'
import * as alertActions from './Actions/alertActions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPageMenu: false

    }

  }
  componentDidMount() {

  }
  onShowNavOptions = (section) => {
    this.setState({
      showPageMenu: !this.state.showPageMenu
    });
    if (section != null) {
      this.props.onChangeSection(section)
    }
  }
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          {!this.state.showPageMenu ? <div className="phonebook-container">
            <Row className="nav-section">
              <Container className="nav-container">
                <img src={this.props.currentSection == PageSection.CONTACTS?phoneIcon:phonebookIcon} className="small-icon" /><div className="nav-label" onClick={() => this.onShowNavOptions(null)}>{this.props.currentSection == PageSection.CONTACTS ? 'Contacts' : 'Phone Books'}</div><img src={pusIcon} className="small-icon" />
              </Container>

            </Row>
            <Row className="body-section">

            </Row>
            <Row className="footer-section">
              <div className="footer">
                Phonebook App
              </div>
            </Row>
          </div> : <Container className="nav-options">
              <div className="option" onClick={() => this.onShowNavOptions(PageSection.CONTACTS)}>
                <img src={phoneIcon} className="medium-icon" />
                <div className="option-label">Contacts</div>
              </div>
              <div className="option" onClick={() => this.onShowNavOptions(PageSection.PHONEBOOKS)}>
                <img src={phonebookIcon} className="medium-icon" />
                <div className="option-label">Phonebooks</div>
              </div>
            </Container>}
        </Router>
      </React.Fragment>
    );
  }
}
//redux states
const mapStateToProps = state => {
  return {
    currentSection: state.alert.currentSection,
    activeContact: state.alert.activeContact,
    isLoading: state.alert.loading
  };
}
//action
const mapDispatchToProps = dispatch => {
  return {
    onChangeSection: (section) => dispatch(alertActions.changeSection(section)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
