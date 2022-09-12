import { useState } from "react";
import moment from "moment/moment";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase";
import { dispatchActions } from "../helpers";

import BarRulings from "./BarRulings";
import VoteNow from "./VoteNow";

import "../styles/components/CardRuling.scss";

const CardRuling = ({ ruling, dispatch, view }) => {
  const data = ruling.data;
  const lastUpdated = new Date(data.lastUpdated);

  const [isVoteSaved, setIsVoteSaved] = useState(false);

  const isVotesPositives = data.votes.positive >= data.votes.negative;

  const handleSaveVote = async ({ isPositiveVote }) => {
    try {
      const { UPDATE_VOTE } = dispatchActions;

      const votesUpdated = {
        positive: isPositiveVote ? data.votes.positive + 1 : data.votes.positive,
        negative: !isPositiveVote ? data.votes.negative + 1 : data.votes.negative
      };

      const personDocRef = doc(db, 'people', ruling.id);
      await updateDoc(personDocRef, {
        lastUpdated: new Date().getTime(),
        votes: votesUpdated
      });

      dispatch({
        type: UPDATE_VOTE,
        payload: {
          docId: ruling.id,
          votes: votesUpdated
        }
      });

      setIsVoteSaved(true);
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
                <span className="card-ruling__head-title-name" data-testid="card-ruling-name">
                  {data.name}
                </span>
              </p>
            </div>

            <p className="card-ruling__description" data-testid="card-ruling-description">
              { data.description }
            </p>
          </div>

          <div className="card-ruling__last-group">
            {!isVoteSaved && (
              <p className="card-ruling__last-updated">
                <span data-testid="card-ruling-last-update">
                  { moment(lastUpdated).fromNow() }
                </span> in
                <span className="card-ruling__category" data-testid="card-ruling-category">
                  { data.category }
                </span>
              </p>
            )}

            <VoteNow
              voteId={ruling.id}
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
