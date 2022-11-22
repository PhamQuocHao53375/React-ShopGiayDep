import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <h1>
                    Add Product
                </h1>
                <form onSubmit={ this.handleSubmit }>
                    <input required type="text" placeholder="Enter Name Product" ref={ (input) => this.getName = input } />
                    <br />
                    <textarea required type="number" placeholder="Enter Price" ref={ (input) => this.getPrice = input } />
                    <br />
                    <input required type="cover" placeholder="Enter Image link" ref={ (input) => this.getCover = input } />
                    <br />
                    <input required type="number" placeholder="Enter Discount" ref={ (input) => this.getDiscount = input } />
                    <br />
                    <button>
                        Add
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getNamevalue;
        const price = this.getPrice.value;
        const cover = this.getCover.value;
        const discount = this.getDiscount.value;
        this.props.addPost(name, price, cover, discount);
        this.getName.value = '';
        this.getPrice.value = '';
        this.getCover.value = '';
        this.getDiscount.value = '';
    }
}

export default PostForm;
