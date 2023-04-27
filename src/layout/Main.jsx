import React from "react"
import { Movies } from "../components/Movies"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
   state= {
      movies: [],
      loading: false,
   }

   componentDidMount() {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=series`)
      .then(response=> response.json())
      .then(data => this.setState({movies: data.Search, loading:true}))
      .catch((err)=> {
         console.error(err);
         this.state({loading:true})
      })
   }

   searchUpdate = (props, type='all') => {
      this.setState({loading: false})
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${props}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response=> response.json())
      .then(data => this.setState({movies: data.Search, loading:true}))
   }

   handleChange = (props) => {
      this.setState({[props.target.name]:props.target.value})
   }


   render() {
      const {movies,loading} = this.state;

      return <main className="container content">
         <Search searchUpdate={this.searchUpdate}/>
         {
            loading ? (<Movies movies={movies}/>) :  
            <div className="preloader-wrapper big active">
               <div className="spinner-layer spinner-green-only">
                  <div className="circle-clipper left">
                     <div className="circle"></div>
                  </div><div className="gap-patch">
                     <div className="circle"></div>
                  </div><div className="circle-clipper right">
                     <div className="circle"></div>
                  </div>
               </div>
            </div>
         }
         
   </main>
   }
}

export { Main }