import React from "react"

class Search extends React.Component {
   state = {
      search: '',
      type: 'all'
   }

   handlKey = (event)=> {
      if(event.key === 'Enter'){
         this.props.searchUpdate(this.state.search,this.state.type)
      }
   }

   handlFilter = (e) => {
      this.setState(()=> ({type: e.target.dataset.type}), ()=>(this.props.searchUpdate(this.state.search,this.state.type)))
      
   }

   render() {
      return <div className="row">
      <div className="input-field col s12">
        <input 
            id="search" 
            placeholder="search"
            type="search" 
            className="validate"
            value={this.setState.search}
            onChange={e => this.setState({search: e.target.value})}
            onKeyDown={this.handlKey}
            />
            
            <p>
               <label>
                  <input className="with-gap" name="type" type="radio" data-type="all"
                  onChange={this.handlFilter}/>
                  <span>All</span>
               </label>
               <label>
                  <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handlFilter}/>
                  <span>Movies only</span>
               </label>
               <label>
                  <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handlFilter}/>
                  <span>Series only</span>
               </label>
            </p>
      </div>
    </div>
   }
}

export { Search }