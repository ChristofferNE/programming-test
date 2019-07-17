import React from 'react';
import { fetchUsers } from '../actions'
import { connect } from 'react-redux';

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    
    renderList() {
        return this.props.users.map((user) => {
            return <li>{user}</li>
        })
    }
    
    render() {
        return <ul>{this.renderList()}</ul>;
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps, {
    fetchUsers
})(UserList);