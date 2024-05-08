import React from 'react'
import Demo from '../Demo/Demo'
import dora from './assertsMovieCard/Dora and the Lost City of Gold.jpg'
import itChapter2 from './assertsMovieCard/ItChapter2.jpg'
import abominable from './assertsMovieCard/Abominable.jpg'
import detectivePikachu from './assertsMovieCard/detectivePikachu.jpg'
import pinocchio from './assertsMovieCard/Pinocchio.jpg'
import piratesOfTheCaribbean from './assertsMovieCard/piratesOfTheCaribbean.jpg'
import maleficent from './assertsMovieCard/Malificent.jpg'
import theSchoolGoodAndBad from './assertsMovieCard/theSchoolForGoodAndEvil.jpg'
import theFamilyPlan from './assertsMovieCard/theFamilyPlan.jpg'
import poniyinSelvanPart1 from './assertsMovieCard/poniyinSelvanPart1.jpg'
import sarpatta from './assertsMovieCard/sarpatta.jpg'
import doctor from './assertsMovieCard/doctor.jpg'
import bigil from './assertsMovieCard/bigil.jpg'
import siren from './assertsMovieCard/siren.jpg'
import aadukalam from './assertsMovieCard/aadukalam.jpg'
import avengersEndGame from './assertsMovieCard/avengersEndGame.jpg'
import theMarvels from './assertsMovieCard/theMarvels.jpg'
import thorLoveAndThunder from './assertsMovieCard/thorLoveAndThunder.jpg'
import captainMarvel from './assertsMovieCard/captainMarvel.jpg'
import eternals from './assertsMovieCard/eternals.jpg'
import blackPantherWakandaForever from './assertsMovieCard/blackPantherWakandaForever.jpg'
import loki from './assertsMovieCard/loki.jpg'
import ironMan3 from './assertsMovieCard/ironMan3.jpg'
import spiderManFarFromHome from './assertsMovieCard/spiderManFarFromHome.jpg'
import wandaVision from './assertsMovieCard/wandaVision.jpg'
import guardiansOfTheGalaxyVol2 from './assertsMovieCard/guardianOfTheGalaxyVol2.jpg'
import msMarvel from './assertsMovieCard/msMarvel.jpg'
import ironMan2 from './assertsMovieCard/ironMan2.jpg'
import spiderManNoWayHome from './assertsMovieCard/spiderManNoWayHome.jpg'
import shangChi from './assertsMovieCard/shangChi.jpg'
import hangOver from './assertsMovieCard/hangOver.jpg'
import flash from './assertsMovieCard/flash.jpg'
import batManTheDarkKnight from './assertsMovieCard/batManTheDarkKnight.jpg'
import joker from './assertsMovieCard/joker.jpg'





const MovieCards = () => {
  return (
    <div className='grid grid-cols-4'>
      
      <Demo image={dora} title='Dora And The Lost City Of Gold' rating='8.2' language='English'/>
      <Demo image={itChapter2} title='IT Chapter 2' rating='7.5' language='English'/>
      <Demo image={abominable} title='Abominable' rating='8.5' language='English'/>
      <Demo image={detectivePikachu} title='Pokemon Detective Pikachu' rating='8' language='English'/>
      <Demo image={pinocchio} title='Pinocchio' rating='7' language='English'/>
      <Demo image={piratesOfTheCaribbean} title='Pirates Of The Caribbean' rating='9' language='English'/>
      <Demo image={maleficent} title='Maleficent' rating='8.9' language='English'/>
      <Demo image={theSchoolGoodAndBad} title='The School For Good And Bad' rating='8.3' language='English'/>
      <Demo image={theFamilyPlan} title='The Family Plan' rating='8.5' language='English'/>
      <Demo image={poniyinSelvanPart1} title='PS I' rating='9' language='Tamil'/>
      <Demo image={sarpatta} title='Sarpatta' rating='9.5' language='Tamil'/>
      <Demo image={doctor} title='Doctor' rating='8.5' language='Tamil'/>
      <Demo image={bigil} title='Bigil' rating='7' language='Tamil'/>
      <Demo image={siren} title='Siren' rating='6.25' language='Tamil'/>
      <Demo image={aadukalam} title='Aadukalam' rating='9' language='Tamil'/>
      <Demo image={avengersEndGame} title='Avengers End Game' rating='9.3' language='English'/>
      <Demo image={theMarvels} title='The Marvels' rating='7.7' language='English'/>
      <Demo image={thorLoveAndThunder} title='Thor Love And Thunder' rating='8.9' language='English'/>
      <Demo image={captainMarvel} title='Captain Marvel' rating='9' language='English'/>
      <Demo image={eternals} title='Enternals' rating='7.8' language='English'/>
      <Demo image={blackPantherWakandaForever} title='Wakanda Forever' rating='8.5' language='English'/>
      <Demo image={loki} title='Loki' rating='8.3' language='English'/>
      <Demo image={ironMan3} title='Iron Man 3' rating='8.7' language='English'/>
      <Demo image={spiderManFarFromHome} title='Spideman Far From Home' rating='7.8' language='English'/>
      <Demo image={wandaVision} title='Wanda Vision' rating='5.5' language='English'/>
      <Demo image={guardiansOfTheGalaxyVol2} title='Guardians Of The Galaxy Vol2 ' rating='8.6' language='English'/>
      <Demo image={msMarvel} title='MS Marvel' rating='7.4' language='English'/>
      <Demo image={ironMan2} title='Iron Man 2' rating='9.1' language='English'/>
      <Demo image={spiderManNoWayHome} title='Spiderman No Way Home' rating='7.8' language='English'/>
      <Demo image={shangChi} title='Shang Chi' rating='8.7' language='English'/>
      <Demo image={hangOver} title='Hang Over' rating='9.9' language='English'/>
      <Demo image={flash} title='Flash' rating='8.9' language='English'/>
      {/* <Demo image={batManTheDarkKnight} title='The Dark Knight' rating='7.2' language='English'/>
      <Demo image={joker} title='Joker' rating='6' language='English'/> */}
      </div>
  )
}

export default MovieCards