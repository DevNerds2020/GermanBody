import Home from "./components/Home/Home";
import { css } from '@emotion/css';


const App = () => {
  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #f5f5f5;
    `}>
      <Home />
    </div>
  );
}

export default App;
