import React from 'react';
import './Header.css';

const Header = ({result}) => {
    return ( 
        <section className="header">
            <h2>Oản Tù Tì Battle</h2>
            <p>Luật chơi : mỗi lần thắng giành được 1 điểm, nếu hòa nhau cả hai đều không được điểm, bên nào giành được 5 điểm trước sẽ thắng</p>
        </section>
        
    );
}

export default Header;