import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import './Todo.css'
import {Link} from "react-router-dom";
import {todoActions} from "../../Actions";

class Todo extends React.Component {
    constructor(props) {
        super(props);

    }


    handleFinish() {

            return (e) => {

                const title = this.getTitle.value;
                const description =  this.getDescription.value;
                const dateThing = this.getDateThing.value;
                const todoThing = {
                    title : title,
                    description : description,
                    date : dateThing
                }

                this.props.createTodo(todoThing)
                this.props.history.push('/home');

            }
    }


    render() {

        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Title</label>
                            <input type="text" className="form-control"

                                   ref={(input)=>this.getTitle = input}

                                   placeholder="Title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Description</label>
                            <textarea className="form-control"

                                      ref={(input)=>this.getDescription = input}

                                      placeholder="Description" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Date</label>
                            <input type="date" className="form-control"

                                   ref={(input)=>this.getDateThing = input}

                                   placeholder="Date"/>
                        </div>

                        <button type="button" onClick={this.handleFinish()}  className="btn btn-primary">Add</button>

                    </form>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {  }

}

const actionCreators = {
    createTodo: todoActions.createTodo,
};

const connectedTodo = connect(mapStateToProps, actionCreators)(Todo);
export { connectedTodo as Todo };