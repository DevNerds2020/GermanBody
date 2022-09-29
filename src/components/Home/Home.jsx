/* eslint-disable react/jsx-no-useless-fragment */
import React, { memo } from 'react';
import data from '../../utils/data';
import WordCards from '../WordCards/WordCards';
// import read from '../../service/firebase-crud/read';

function Home() {
  // const [apiData, setApiData] = useState([]);

  // const onSuccess = (apiResult) => {
  //   setApiData(apiResult);
  //   localStorage.setItem('verbs', JSON.stringify(apiResult));
  // };

  // const onFailure = () => {
  //   try {
  //     setApiData(JSON.parse(localStorage.getItem('verbs')));
  //   } catch (error) {
  //     console.error('%c 🥝 error', 'color:#3f7cff', error);
  //   }
  // };

  // useEffect(() => {
  //   read('verbs', onSuccess, onFailure);
  // }, []);

  return (
    <>
      {
      data.length !== 0
        ? data.map((item) => <WordCards item={item} />)
        : <>loading.....</>
      }
    </>
  );
}

export default memo(Home);
