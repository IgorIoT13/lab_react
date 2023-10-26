import React from 'react';
import './css/head.css'

const Header = () => {
    return (
        <header>
            <div className={'up'}>
                <h1>Завжди хотів піднятись у небо?</h1>
                <h3>Тоді ти по адресу найбільший вибір літаків в Україні</h3>
            </div>

            <div className={'down'}>
                <a href={'#'} className={'button_header'}> Детальніше</a>
            </div>
        </header>
    );
};

export default Header;