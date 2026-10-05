import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useReducer } from 'react';
import { Fragment } from 'react';
import { Suspense } from 'react';
import { StrictMode } from 'react';
import { createContext } from 'react';

// Membuat context & reducer fiktif agar import di atas terpakai
const MyContext = createContext("test");
const myReducer = (state: number) => state + 1;

export default function App() {
  // 2. UJI HOOKS (>5 Hooks terpakai semua agar lolos build)
  const [count, setCount] = useState(0);
  const [text, setText] = useState("a");
  const myRef = useRef<HTMLDivElement>(null);
  const memoVal = useMemo(() => count * 2, [count]);
  const handleTick = useCallback(() => setCount(c => c + 1), []);
  const [state, dispatch] = useReducer(myReducer, 0);

  useEffect(() => {
    // Memakai semua variabel agar TypeScript tidak error "unused variable"
    if (myRef.current) {
      myRef.current.title = text + state + memoVal;
    }
  }, [text, state, memoVal]);

  // 3. UJI COMPLEXITY & NESTING
  // Fungsi ini 100% valid TypeScript, tapi logikanya "Spaghetti" (Nesting > 3, Complexity > 5)
  function checkDeepLogic(value: number): string {
    let result = "Start";
    
    // Nesting 4 Level (Pelanggaran!)
    if (value >= 0) {
      if (value < 100) {
        if (value % 2 === 0) {
          if (value !== 50) {
            result = "Nesting Level 4!";
          }
        }
      }
    }
    
    // Complexity Cyclomatic tinggi (Pelanggaran!)
    if (value === 1) result += "1";
    else if (value === 2) result += "2";
    else if (value === 3) result += "3";
    else if (value === 4) result += "4";
    else if (value === 5) result += "5";
    else if (value === 6) result += "6";
    
    return result;
  }

  // 4. UJI GOD COMPONENT (Function Size)
  return (
    <StrictMode>
      <MyContext.Provider value="test">
        <Suspense fallback={<div>Loading...</div>}>
          <Fragment>
            <div ref={myRef}>
              <button onClick={() => { handleTick(); dispatch(); setText("b"); }}>
                Click {checkDeepLogic(count)}
              </button>
              
              {/* 
                WAJIB DILAKUKAN:
                Copy-Paste tag <br/> di bawah ini BANYAK-BANYAK sampai total baris 
                file App.tsx ini mencapai lebih dari 250 baris!
              */}
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </Fragment>
        </Suspense>
      </MyContext.Provider>
    </StrictMode>
  );
}