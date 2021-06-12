import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      important: false
    }
    
    console.log(this.state)
    this.handleClickImportant = () => {
      this.setState( state => ({
        important: !state.important
      })) 
    };

    this.handleClickOnLabel = () => {
      this.setState( state => ({
        done: !state.done
      })) 
    }
  }

  render () {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = '';

    if( done ) {
      classNames += ' text-decoration-line-through'
    }

    if( important ) {
      classNames += ' fw-bolder'
    }

    return (
      <div className="todo-list-item d-flex justify-content-between align-items-center">

        <span className={classNames} onClick={ this.handleClickOnLabel }>{ label }</span>

        <span className="btn-group" role="group" aria-label="Basic example">
          <button onClick={ this.handleClickImportant } type="button" className="btn btn-outline-success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-lg" viewBox="0 0 16 16">
              <path d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z"/>
            </svg>
          </button>

          <button type="button" className="btn btn-outline-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </span>

      </div>
    )
  }
}

export default TodoListItem;