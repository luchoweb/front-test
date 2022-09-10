import { useEffect, useState } from "react";

import CardRuling from "./CardRuling";

const PreviousRulings = () => {
  const rulingsStored = localStorage.getItem('rulings');
  const [rulings, setRulings] = useState(rulingsStored);

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
    <div className="max-centered">
      <main role="main">
        <h2>Previous Rulings</h2>

        <ul className="previous-rulings">
          { rulings ? rulings.map(ruling => (
            <CardRuling data={ruling} key={ ruling.name } />
          )) : (
            <p>There are not previous rulings to show.</p>
          )}
        </ul>
      </main>
    </div>
  )
}

export default PreviousRulings;
