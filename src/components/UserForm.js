import React from "react";
import { addUser } from '../actions'
import { connect } from 'react-redux';
import './UserForm.css';

class UserForm extends React.Component {
    addUser(e) {
        let firstName = e.target.firstName.value;
        let lastName = e.target.lastName.value;
        let phone = e.target.phone.value;
        let email = e.target.email.value;
        this.props.addUser({
            firstName,
            lastName,
            phone,
            email
        })
        e.preventDefault();
    }
    
    render() {
        return (
            <div className="UserForm">
                <form onSubmit={(e) => this.addUser(e)}>
                    <p><input type="text" name="firstName" placeHolder="Förnamn" /></p>
                    <p><input type="text" name="lastName" placeHolder="Efternamn" /></p>
                    <p><input type="text" name="email" placeHolder="Epostadress" /></p>
                    <p><input type="text" name="phone" placeHolder="Telefonnummer" /></p>
                    <button>Lägg till användare</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {
    addUser
})(UserForm);