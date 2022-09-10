import { useEffect, useState } from "react";

import CardRuling from "./CardRuling";

import "../styles/components/PreviousRulings.scss";

const PreviousRulings = () => {
  const rulingsStored = localStorage.getItem('rulings');
  const [rulings, setRulings] = useState(rulingsStored);
  const [view, setView] = useState('');

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
    <main role="main">
      <h2>Previous Rulings</h2>

      <ul className={`previous-rulings${view}`}>
        { rulings ? rulings.map(ruling => (
          <li key={ ruling.id }>
            <CardRuling data={ruling} />
          </li>
        )) : (
          <p>There are not previous rulings to show.</p>
        )}
      </ul>
    </main>
  )
}

export default PreviousRulings;
