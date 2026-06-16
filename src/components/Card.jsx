import {Bookmark} from "lucide-react";

export default function Card(props){

    return(
      <div className="card">

        <div className="top">
          <img src={props.logo} />
          <button className="saveBtn">
            Save <Bookmark size={16}/>
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>{props.day}</span>
          </h3>

          <h2>{props.pos}</h2>

          <div className="tags">
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
          </div>
        </div>

        <div className="bottom">
            <div>

                <div>
                    <h3>{props.price}</h3>
                    <p>{props.loc}</p>
                </div>

                <div>
                    <button>Apply Now</button>
                </div>

            </div>
        </div>

      </div>
  );
    
}