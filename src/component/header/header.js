import React, {Component} from 'react';

import './header.css';


class Header extends Component{
    state = {
        newJob: ''
    }
   
    onChange = (e) => {
        this.setState({
            newJob:e.currentTarget.value 
        });
    }    

       
      
    
    
    onSubmit = (e) => {
      e.preventDefault()
      const value = this.state.newJob;
      const {setItem} = this.props
      if(value.length > 0) {
         setItem(value)  
      }
      this.setState({
        newJob: ''
    });
    }
    render() {
        return (
            <div id="myDIV" className="header">
            <h2 style={{margin: "5px"}}>My shopping list</h2>

            <form onSubmit={this.onSubmit}>
             <input name='new-job' value={this.state.newJob}
                    onChange={this.onChange} type="text" id="myInput" placeholder="Name of product..." />
            <button type='submit' className="addBtn">Add</button>
            </form>
            </div>
    )
    }
}

export default Header;