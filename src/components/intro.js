import React from 'react';

import { useStateValue } from '../data/state';
import Button from './button';
import Description from './description';
import Fade from './fade';

export default function Intro() {
  const [{ hasLoaded, start }, dispatch] = useStateValue();

  return (
    <Fade className="intro" show={!start}>
      <h1>Earthenco</h1>
      <p>
        <Description />
      </p>
      <Fade show={hasLoaded}>
      <button
      style={{pointerEvents: `auto`, }}
        onClick={() => dispatch({ type: 'START' })}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Observe Pollution
      </button>
        {/* <Button label="Explore" onClick={() => dispatch({ type: 'START' })} /> */}
      </Fade>
    </Fade>
  );
}
