import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPost from '../components/AllPost';
import { bindActionCreators } from 'redux';
import * as PostActions from '../actions/PostActions';

class AllPostContainer extends Component {
    render() {
        return (
            <AllPost posts={ this.props.posts } actions={ this.props.actions } />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(PostActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPostContainer);
