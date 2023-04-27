export function Movie (props) {
   const {
      Title: title,
      Year: year,
      Id: id,
      Type: type,
      Poster: poster
   }= props


   return <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
              {poster === "N/A" ? <img className="activator " src={"https://www.groupdynamics-laundry.com/images/NoPartImage.jpg"} alt="movie-img"/> : <img className="activator " src={poster} alt="movie-img"/>}
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{title}</span>
              <p>{year}</p> <span className="right">{type}</span>
            </div>
          </div>

}

