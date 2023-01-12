import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieCard({enName, year, imbd, time, img}) {
  // const handleChosenMovie = (id)=>{
  //   localStorage.setItem('movieData',JSON.stringify({idMovie:id,atWatch:0}));
  // }
  return (
    <div
      className="static m-5 p-1 w-auto rounded-xl bg-violet-600 bg-opacity-70 bg-clip-padding backdrop-blur drop-shadow-1g "
    >
      <Link to="/Watch">
      <img name="image"
        // onClick={(e)=>handleChosenMovie(id)}
        className={" w-full rounded-xl bg-cover "}
        style={{height:"100%"}}
        src={"https://www.themoviedb.org/t/p/original"+img} />
      </Link>
      <div className="clear-both" />
      <p className="float-left pl-1 pt-1 text-yellow-50 font-semibold font-sans text-l">
        {enName} ({year})
      </p>
      <div className="clear-both" />
      <div
        className="bg-slate-900
        rounded-full
        p-1
        shadow-lg
        absolute 
        right-4
        bg-opacity-50
        bottom-4
        mb-2
        "
      >
        <h4
          className="
         text-white
         text-sm
         ml-2
         mr-2
         font-sans
         font-normal
        "
        >
          {time}
        </h4>
      </div>
      <div
        className="bg-white
        rounded-full
        p-2
        absolute 
        left-4
        top-4
        bg-opacity-30
        mb-2
        "
      >
        <h4
          className="
         text-white
         text-sm
         ml-2
         mr-2
         font-sans
         font-normal
        "
        style={{textShadow: "1px 1px #000000"}}
        >
          <FontAwesomeIcon className="text-yellow-400 mr-1.5 shadow-lg font-bold" icon={faStar} />
          IMDb {imbd}
        </h4>
      </div>
    </div>
  );
}
export default MovieCard;
