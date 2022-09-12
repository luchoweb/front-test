import { useEffect, useState } from "react";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "../firebase";
import { dispatchActions } from "../helpers";

import useRulings from "../hooks/useRulings";

import CardRuling from "./CardRuling";
import SelectView from "./SelectView";

import "../styles/components/PreviousRulings.scss";

const PreviousRulings = () => {
  const { state: rulings, dispatch } = useRulings();
  const [isDataLoading, setIsDataLoading] = useState(true);

  const viewOptions = ['list', 'grid'];
  const [view, setView] = useState(viewOptions[0]);

  useEffect(() => {
    if ( !rulings.length ) {
      try {
        const { UPDATE_STATE } = dispatchActions;
        const q = query(collection(db, 'people'), orderBy('lastUpdated', 'desc'));
        onSnapshot(q, (querySnapshot) => {
          const payload = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }));

          if ( !querySnapshot.empty ) {
            dispatch({
              type: UPDATE_STATE,
              payload
            });
          }

          setIsDataLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsDataLoading(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main role="main" className="main">
      <div className="main__head">
        <h2>Previous Rulings</h2>
        
        <SelectView
          defaultOption={view}
          options={viewOptions}
          setView={setView}
        />
      </div>

      { !isDataLoading ? (
        <ul className={`previous-rulings previous-rulings--${view}`}>
        { rulings.length ? rulings.map(ruling => (
          <li key={ ruling.id }>
            <CardRuling ruling={ruling} view={view} />
          </li>
        )) : (
          <p>{ !rulings?.error ? 'There are not previous rulings to show.' : 'An error has occurred obtaining the information, please refresh the page.'}</p>
        )}
      </ul>
      ) : (
        <p>Loading previous rulings, please wait...</p>
      )}
    </main>
  )
}

export default PreviousRulings;
