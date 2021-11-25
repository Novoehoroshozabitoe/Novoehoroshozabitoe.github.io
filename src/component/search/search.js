import React, {Component} from "react";
import  './search.css'


class Search extends Component{
    state = {
        search: ''
    }
    onChange = (e) => {
        this.setState({
            search:e.currentTarget.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.setSearch(this.state.search)
        this.setState({
            search: ''
        })

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input style={{border:'1px solid black'}} name='search' value={this.state.search}
                       onChange={this.onChange} type="text" />
                <button type='submit' className="addBtn">Search</button>
            </form>
        )


}

}

export default Search;