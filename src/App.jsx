import React, { memo } from 'react';
import { css } from '@emotion/css';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import Home from './components/Home/Home';

function App() {
  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #f5f5f5;
    `}
    >
      <Home />
    </div>
  );
}

export default memo(App);
