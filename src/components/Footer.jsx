import React from 'react';
import rock from '../image/rock.png';
import paper from '../image/paper.png';
import scissors from '../image/scissors.png';
import './Footer.css';

const Footer = ({onGetImage , game }) => {
    return ( 
        <section className="footer">
            <div className="item rock" onClick={() => onGetImage({...game[0]}) }>
                <img src={rock} alt="rock"/>
            </div>
            <div className="item paper" onClick={() => onGetImage({...game[1]})}>
                <img src={paper} alt="paper"/>
            </div>
            <div className="item scissors" onClick={() => onGetImage({...game[2]})}>
                <img src={scissors} alt="scissors"/>
            </div>
        </section>
     );
}
 
export default Footer;
