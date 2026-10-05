import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useLayoutEffect, useId } from 'react';
import { createRoot } from 'react-dom/client'; // Import ke-10

export default function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const ref = useRef(null);
  useEffect(() => {}, []);

  // Nesting Ekstrem (Lebih dari 3 level)
  function spaghettiLogic() {
    if (a) {
      if (b) {
        if (c) {
          if (true) { // Level 4: Pelanggaran!
            console.log("Too deep!");
          }
        }
      }
    }
  }

  return (
    <div>
      <h1>Test</h1>
      {/* COPY PASTE <br/> INI SAMPAI FILE MENCAPAI LEBIH DARI 250 BARIS KODE */}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}