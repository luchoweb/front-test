import { useState } from "react";
import moment from "moment/moment";

import BarRulings from "./BarRulings";

import "../styles/components/CardRuling.scss";
import VoteNow from "./VoteNow";

const CardRuling = ({ ruling, view }) => {
  const data = ruling.data;
  const lastUpdated = new Date(data.lastUpdated.seconds * 1000);
  const isPositiveVotes = data.votes.positive >= data.votes.negative;

  const [isVoteSaved, setIsVoteSaved] = useState(false);

  const handleSaveVote = (voteId) => {
    setIsVoteSaved(true);
  }

  return (
    <div
      className={`card-ruling card-ruling--${view}`}
      style={{
        backgroundImage: `url(/assets/img/${data.picture})`
      }}
    >
      <div className="card-ruling__overlay">
        <div className="card-ruling__container">
          <div className="card-ruling__text">
            <div className="card-ruling__head">
              <p className="card-ruling__head-title">
                <span className={`card-ruling__head-title-icon card-ruling__head-title-icon--bg-${ isPositiveVotes ? 'green' : 'yellow' }`}>
                  <img src={`/assets/img/thumbs-${ isPositiveVotes ? 'up' : 'down' }.svg`} alt="thumb" />
                </span>
                <span className="card-ruling__head-title-name">{data.name}</span>
              </p>
            </div>

            <p className="card-ruling__description">
              { data.description }
            </p>
          </div>

          <div className="card-ruling__last-group">
            {!isVoteSaved && (
              <p className="card-ruling__last-updated">
                { moment(lastUpdated).fromNow() } in
                <span className="card-ruling__category">
                  { data.category }
                </span>
              </p>
            )}

            <VoteNow
              idVote={ruling.id}
              handleSaveVote={handleSaveVote}
              setIsVoteSaved={setIsVoteSaved}
              isVoteSaved={isVoteSaved}
            />
          </div>

          <BarRulings votes={data.votes} />
        </div>
      </div>
    </div>
  )
}

export default CardRuling;
