import { useState } from "react";
import moment from "moment/moment";

import BarRulings from "./BarRulings";

import "../styles/components/CardRuling.scss";
import VoteNow from "./VoteNow";

const CardRuling = ({ data }) => {
  const isPositiveVotes = data.votes.positive >= data.votes.negative;
  const truncateTitleLimit = 16;
  const truncateDots = data.name.length > truncateTitleLimit ? '...' : '';

  const [isVoteSaved, setIsVoteSaved] = useState(false);

  const handleSaveVote = (voteId) => {
    setIsVoteSaved(true);
  }

  return (
    <div
      className="card-ruling"
      style={{
        backgroundImage: `url(/assets/img/${data.picture})`
      }}
    >
      <div className="card-ruling__container">
        <div className="card-ruling__head">
          <p className="card-ruling__head-title">
            <span className={`card-ruling__head-title-icon card-ruling__head-title-icon--bg-${ isPositiveVotes ? 'green' : 'yellow' }`}>
              <img src={`/assets/img/thumbs-${ isPositiveVotes ? 'up' : 'down' }.svg`} />
            </span>
            <span>
              {`${ data.name.substr(0, truncateTitleLimit) }${ truncateDots }`}
            </span>
          </p>
        </div>

        <p className="card-ruling__description">
          { data.description }
        </p>

        {!isVoteSaved && (
          <p className="card-ruling__last-updated">
            { moment(data.lastUpdated).fromNow() } in
            <span className="card-ruling__category">
              { data.category }
            </span>
          </p>
        )}

        <VoteNow
          idVote={data.id}
          handleSaveVote={handleSaveVote}
          setIsVoteSaved={setIsVoteSaved}
          isVoteSaved={isVoteSaved}
        />

        <BarRulings votes={data.votes} />
      </div>
    </div>
  )
}

export default CardRuling;
