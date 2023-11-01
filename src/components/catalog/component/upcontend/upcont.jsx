import React from 'react';

const Upcont = (props) => {
    return (
        <div>
            <h2>Вітаю у каталозі</h2>
            <p>Вибирайте те що вам довподоби</p>

            <div>
                <label>ВВедіть назву літака</label>
                <input type={"search"} id={'search_input'} />
            </div>
        </div>
    );
};

export default Upcont;