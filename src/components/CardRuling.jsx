import moment from "moment/moment";

import "../styles/components/CardRuling.scss";

const picturePath = '/assets/img';

const CardRuling = ({ data }) => {
  return (
    <div
      className="card-ruling"
      style={{
        backgroundImage: `url(${picturePath}/${data.picture})`
      }}
    >
      <div className="card-ruling__head">
        <p className="card-ruling__head-title">
          { data.name } 
        </p>
        <p className="card-ruling__description">
          { data.description }
        </p>
      </div>

      <p className="card-ruling__last-updated">
        { moment(data.lastUpdated).fromNow() } in
        <span className="card-ruling__category">
          { data.category }
        </span>
      </p>
    </div>
  )
}

export default CardRuling;
