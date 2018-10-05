import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getListData} from '../actions';
import {Link} from 'react-router-dom';

class List extends Component{
    componentDidMount(){
        this.props.getListData();
    };
    render(){
        const {list} = this.props;

        const listElements = list.map(item=> {
            return (
                 <li key={item._id} className="collection-item">
                 <Link to={`/item/${item._id}`}>{item.title}</Link>
                 </li>
            )
        })
        return (
            <div>
                <h1 className="center">TO Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to='/add' className='btn teal lighten-2'>Add Item</Link>
                    </div>
                </div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}

function mapStatToProps(state){
    return {
        list: state.list.all
    }
};

export default connect(mapStatToProps, {
    getListData: getListData
})(List);
