import { useState } from "react";
import moment from "moment/moment";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase";

import BarRulings from "./BarRulings";
import VoteNow from "./VoteNow";

import "../styles/components/CardRuling.scss";

const CardRuling = ({ ruling, view }) => {
  const data = ruling.data;
  const lastUpdated = new Date(data.lastUpdated);
  const isVotesPositives = data.votes.positive >= data.votes.negative;

  const [isVoteSaved, setIsVoteSaved] = useState(false);

  const handleSaveVote = async ({ isPositiveVote }) => {
    const personDocRef = doc(db, 'people', ruling.id);

    try {
      setIsVoteSaved(true);

      await updateDoc(personDocRef, {
        votes: {
          positive: isPositiveVote ? ( data.votes.positive + 1 ) : data.votes.positive,
          negative: !isPositiveVote ? ( data.votes.negative + 1 ) : data.votes.negative,
        },
        lastUpdated: new Date().getTime()
      });
    } catch (err) {
      setIsVoteSaved(false);
      console.error(err);
    }
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
                <span className={`card-ruling__head-title-icon card-ruling__head-title-icon--bg-${ isVotesPositives ? 'green' : 'yellow' }`}>
                  <img src={`/assets/img/thumbs-${ isVotesPositives ? 'up' : 'down' }.svg`} alt="thumb" />
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
