import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class AddItem extends Component{
    renderInput(props){
        console.log('Render input arguments:', props);
        return(
            <div className="row">
                <div className="s12">
                    <label>{props.input.name}</label>
                    <input {...props.input} type="text"/>
                </div>
            </div>
        )
    }

    saveItem = (values) => {
        console.log('form values', values);
    }

    render(){
        console.log('add item props', this.props);
        const {handleSubmit} = this.props;

        return(
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form onSubmit={handleSubmit(this.saveItem)}>
                            <Field name="title" component={this.renderInput}/>
                            <Field name="details" component={this.renderInput}/>
                            <div className="row">
                                <div className="s12 right-align">
                                    <button className="btn red lighten-2">Add Item</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: "Dresden add a damn item"
})(AddItem);
