import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPost extends Component {
    static propTypes = {
        post: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            cover: PropTypes.string,
            price: PropTypes.number,
            discount: PropTypes.number,
        }).isRequired,
        updatePost: PropTypes.func.isRequired
    };
    
    render() {
        return (
            <div>
                <form onSubmit={ this.handleEdit }>
                    <input required type="text" 
                        ref={ (input) => this.getName = input }
                        defaultValue={ this.props.post.name }
                        placeholder="Enter Name" />
                    <br />
                    <textarea required type="number"
                        ref={ (input) => this.getPrice = input }
                        defaultValue={ this.props.post.price }
                        placeholder="Enter Price" />
                    <br />
                    <input required type="text" 
                        ref={ (input) => this.getCover = input }
                        defaultValue={ this.props.post.cover}
                        placeholder="Enter Image Link" />
                    <br />
                    <input required type="number" 
                        ref={ (input) => this.getDiscount = input }
                        defaultValue={ this.props.post.discount }
                        placeholder="Enter Discount" />
                    <br />
                    <button>
                        Edit
                    </button>
                </form>
            </div>
        );
    }

    handleEdit = (e) => {
        e.preventDefault();
        const id = this.props.post.id;
        const newName = this.getName.value;
        const newPrice = this.getPrice.value;
        const newCover = this.getCover.value;
        const newDiscount = this.getDiscount.value;
        this.props.updatePost(id, newName, newPrice, newCover, newDiscount);
    }
}

export default EditPost;
