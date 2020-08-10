import React from 'react';
import './Body.css';

const Body = ({user, computer, userScore, computerScore}) => {
    return ( 
        <section className="body">
            <div className="battlefield">
                <div className="user">
                <h3>Người Chơi: {userScore} điểm</h3>
                    <div className="item-battle">
                        <img src={user? user.link : ""} alt=""/>
                    </div>
                </div>
                <div className="computer">
                    <h3>Máy: {computerScore} điểm</h3>
                    <div className="item-battle">
                        <img src={computer? computer.link : ""} alt=""/>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Body;