import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSingleItem, clearSingleItem, toggleComplete} from '../actions';

class SingleItem extends Component{
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.itemId)
    };

    componentWillMount(){
        this.props.clearSingleItem();
    };

    render(){
        console.log('Single Item: ', this.props.item);
        const {item, toggleComplete, match: {params}} = this.props;
        return(
            <div>
                <h1 className='center'>To Do Item</h1>
                <h3>Title : {item.title}</h3> 
                <h4>Details: {item.details}</h4>
                <h4 className={ `${item.complete ? 'green-text' : 'red-text'} darken-2`}>
                {item.complete ? 'Dresden you have completed this already' : 'Dreden you havent done this yet'}
                </h4>
                <button onClick={ () => toggleComplete(params.itemId) } className={`btn ${item.complete ? 'red' : 'green'}`}>
                {item.complete ? 'Dresden was here' : 'Harry get over here'}
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    };
};

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem,
    clearSingleItem: clearSingleItem,
    toggleComplete: toggleComplete
})(SingleItem);