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
    const q = query(collection(db, 'people'), orderBy('lastUpdated', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setRulings(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));

      setIsDataLoading(false);
    });
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
        { rulings ? rulings.map(ruling => (
          <li key={ ruling.id }>
            <CardRuling ruling={ruling} view={view} />
          </li>
        )) : (
          <p>There are not previous rulings to show.</p>
        )}
      </ul>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  )
}

export default PreviousRulings;
