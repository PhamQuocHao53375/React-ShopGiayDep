import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    static propTypes = {
        post: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            cover: PropTypes.string,
            price: PropTypes.number,
            discount: PropTypes.number,
        }).isRequired,
        editPost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>                            
                <div className='box'>
                    <div className='product mtop'>
                        <div className='img'>
                            <span className='discount'>{this.props.post.discount}% Off</span>
                            <img src={this.props.post.cover} alt='' />
                        </div>
                        <div className='product-details'>
                            <div className='price'>
                                <p>{this.props.post.name}</p>
                                <p>
                                    {this.props.post.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={ () => this.props.editPost(this.props.post.id) }>
                    Edit
                </button>
                <button onClick={ () => this.props.deletePost(this.props.post.id) }>
                    Delete
                </button>
            </div>
        );
    }
}

export default Post;
