import { useEffect, useState } from "react";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "../firebase";

import CardRuling from "./CardRuling";
import SelectView from "./SelectView";

import "../styles/components/PreviousRulings.scss";

const PreviousRulings = () => {
  const [rulings, setRulings] = useState(undefined);

  const viewOptions = ['list', 'grid'];
  const [view, setView] = useState(viewOptions[0]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if ( !rulings ) {
      try {
        const q = query(collection(db, 'people'), orderBy('lastUpdated', 'desc'));
        onSnapshot(q, (querySnapshot) => {
          setRulings(
            querySnapshot.empty ? [] : querySnapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
  
          setIsDataLoading(false);
        });
      } catch (error) {
        setRulings({ error: true });
      }
    }
  }, [rulings]);

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
