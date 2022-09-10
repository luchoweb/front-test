import { useEffect, useState } from "react";

import CardRuling from "./CardRuling";

import "../styles/components/PreviousRulings.scss";
import SelectView from "./SelectView";

const PreviousRulings = () => {
  const rulingsStored = localStorage.getItem('rulings');
  const [rulings, setRulings] = useState(rulingsStored);

  const viewOptions = ['list', 'grid'];
  const [view, setView] = useState(viewOptions[1]);

  useEffect(() => {
    if ( !rulings ) {
      const fetchData = async () => {
        const res = await fetch('/assets/data.json');
        const data = await res.json();
         if ( data )
          setRulings(data.data);
      }
  
      fetchData();
    }

    return () => {};
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

      <ul className={`previous-rulings previous-rulings--${view}`}>
        { rulings ? rulings.map(ruling => (
          <li key={ ruling.id }>
            <CardRuling data={ruling} view={view} />
          </li>
        )) : (
          <p>There are not previous rulings to show.</p>
        )}
      </ul>
    </main>
  )
}

export default PreviousRulings;
