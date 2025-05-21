import { useState } from 'react'
import './App.css';
import BasicTable from './components/tables';
import Feedback from './components/feedback';
import Feedback2 from './components/feedback2';
import { Margin } from '@mui/icons-material';



function App() {
 

  return (

    <div className='Alles'>
      <h1 className='Title'><span className='Retro'> Pong</span> bauen mit Scratch(also Lego?)</h1>

      <div className='Iframe'>
              <iframe
              src="https://scratch.mit.edu/projects/1176113107/embed"

              frameBorder="0"
              allowFullScreen={true}
    
              scrolling="no"
              title="Scratch Pong"
              className='Iframe_Scratch'

              
            />
            <p className='Nerds'>Vier Schüler Bauen Pong mit Legosteinen - Und haben es am Ende geschafft 

              <br /><span className='wow'>Dieses Pong spiel hat sowohl Singleplayer (falls man keine freunde hat) als auch Multiplayer <br /> und das Spiel hat sogar einen Ball! </span>
            </p>
        </div>

        <div>
                <BasicTable className="Table_Basic"></BasicTable>

        </div>
        <div className='Feedback'>
        <Feedback ></Feedback>
        <Feedback2></Feedback2>
        </div>
</div>
  )
}

export default App
