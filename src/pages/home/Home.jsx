import React from 'react'
import Top from './Top'
import Grid from './Grid'

function Home  ({popup}) {
  return (
    <>
    <Top popup={popup}/>
    <Grid />
    </>
  )
}

export default Home
