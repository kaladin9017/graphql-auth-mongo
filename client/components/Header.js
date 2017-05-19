import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

class Header extends Component {
  render() {
    console.log(this.props)
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    return (
      <div>
        header
      </div>
    )
  }
}

export default graphql(query)(Header);
