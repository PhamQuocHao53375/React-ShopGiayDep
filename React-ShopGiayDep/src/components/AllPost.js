import React, { Component } from 'react';
import EditPost from './EditPost';
import Post from './Post';
import PropTypes from 'prop-types';

class AllPost extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h1>
                    All Product
                </h1>
                {
                    this.props.posts.map((post) => (
                        <div key={ post.id }>
                            { post.editing 
                            ? <EditPost post={ post } 
                                key={ post.id } 
                                updatePost={ this.props.actions.updatePost } /> 
                            : <Post post={ post } 
                                key={ post.id } 
                                editPost={ this.props.actions.editPost } 
                                deletePost={ this.props.actions.deletePost } /> }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default AllPost;
