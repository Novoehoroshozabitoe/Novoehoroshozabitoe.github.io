import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/header/header';
import ItemContainer from './component/item-container/item-container';
import Counter from './component/counter';
import Search from './component/search/search';

class App extends Component{

    minId = 100

  state = {
    data : [
      // {label:'Hit the gym',checked:false,id:1},
      // {label:'Pay bills',checked:false,id:2},
     

     ],
      search:""
  }

  setItem = (jobLabel) => {
      this.setState(({data})=>{
          const newId = this.minId++
          const newObj = {label: jobLabel, checked:false, id:newId}
          const newDate = [...data,newObj]
          return {data:newDate}
  })
  }
  onCheck =(idObj)=>()=> {
        this.setState(({data})=>{
          const index=data.findIndex(({id})=>id === idObj)
          if (index !== -1){
            const obj = data[index]
            const newObj = {...obj,checked: !obj.checked}
            const newDate = [...data.slice(0,index), newObj,...data.slice(index+1)]
            return {data:newDate}
          } 
     })
  }
  delateItem =(idObj)=>()=> {
         this.setState(({data})=>{
         const index=data.findIndex(({id})=>id === idObj)
         const newDate = [...data.slice(0,index), ...data.slice(index+1)]
             return {data:newDate}
    
    })
}
  getDataLength = () => {
    return this.state.data.length
  }
  getCheckedLength = () => {
    return this.state.data.filter(({checked})=>checked).length
  }
  searchData = () => {
      const {search} = this.state;
      return this.state.data.filter(({label}) => label.includes(search))
  }

  setSearch = (search) => {
      this.setState({
          search
      })
  }

  render() {
      const newData = this.searchData()
    return (
      <div className ="container">
          <Header setItem={this.setItem}/>
          <ItemContainer
             delateItem={this.delateItem}
             onCheck = {this.onCheck}
             data = {newData}
             />
            <Counter
             all={this.getDataLength()}
             checked={this.getCheckedLength()}
             />
          <Search setSearch={this.setSearch}/>
     </div>

     )
  }
}




ReactDOM.render(<App />,document.getElementById('root')
);


