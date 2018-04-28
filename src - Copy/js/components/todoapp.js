import React, { Component } from 'react'
import { connect } from "react-redux"


class TodoApp extends React.Component {

render() {
       
    return (
			<p>will</p>    	
);
  }
}

const mapStateToProps = state =>  ({
	user: state.user,
    userFetched: state.user.fetched,
    tweets: state.tweets.tweets,
	
});

const mapStateToActions = state =>  ({
	
	
});

export default connect(mapStateToProps,mapStateToActions)(TodoApp);
