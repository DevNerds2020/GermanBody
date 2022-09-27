import React from 'react'
import { data } from '../../utils/data'
import WordCards from '../WordCards/WordCards'

const Home = () => {
  return (
    <>
        {data.map((item, index) => {
           return <WordCards key={index} item={item}/>
        })}
    </>
  )
}

export default Home