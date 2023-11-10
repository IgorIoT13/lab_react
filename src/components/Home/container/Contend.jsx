import React, {useEffect, useState} from 'react';
import Element from "./element/Element";
import './css/header.css'
import DecorateBlocEle from "./element/DecorateBlocEle";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import icon_1 from './img/gear-solid.svg';

import Boing_1 from './img/boing-1.jpg';

import Superjet from './img/superjet.jpg';

import Boing_2 from './img/boing-2.jpg'
import {getAlllight} from "../../API/BackEnd";


const elementsData = [
    {
        img: Boing_1,
        title: "Boing-45",
        description: "Унікальний літак побудований у 1989. Зарекомендував себе в Чехії та Угорщині."
    },
    {
        img: Superjet,
        title: "SuperJet",
        description: "Унікальний літак побудований у 1989. Зарекомендував себе в Чехії та Угорщині.'"
    },
    {
        img: Superjet,
        title: "Boing- 87",
        description: "Унікальний літак побудований у 1989. Зарекомендував себе в Чехії та Угорщині.test test test test"
    }
];



const Contend = () => {

    const [elementCatalog, setElementCatalog] = useState([]);
    const [visibleElements, setVisibleElements] = useState(6); // Початкова кількість видимих елементів

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await getAlllight();
            setElementCatalog(data);
        } catch (error) {
            console.error('Помилка завантаження даних', error);
        }
    };

    const loadMore = () => {
        // Збільшуємо кількість видимих елементів на 6
        setVisibleElements(visibleElements + 6);
    };






    return (
        <span>
            <div className={'pre_ambul'}>
                <h1>Ми пропонуєм:</h1>
                <h4>
                    Прекрасний вибір літальних апаратів, які зарокемендували себе у незліченних польотах.
                    Ви можете спробувати унікальний досвід на різних літаках.
                    Ось деяий їх прелік детальніше при нажиманні на відповідну комірку!
                </h4>
            </div>
            <div className={'container'}>
                {elementsData.map((element, index) => (
                    <Element
                        key={index}
                        post={element}
                    />
                ))}
            </div>
            <div className={'Down_block'}>
                     <div className={'decoration_text'}>
                         <h3> Не втрачай можливість отримати -25% до літака</h3>
                        <h4>Наші принципи це :</h4>
                     </div>
                    <div className={'decorate_block'}>

                        <div className={'Block'}>
                            <div className={'flex_block mar'}>
                                <DecorateBlocEle post = {{img:"",
                                    title:"Чесність",
                                    description:"Уразі будь яких не зручностей ви можете звернутись " +
                                        "у нашу підтримку"}}/>,

                                <DecorateBlocEle post = {{img:"",
                                    title:"Безпека",
                                    description:"Усі наші літаки проходять регулярну перевірку " +
                                        "і обсуговуються при першій нагоді"}}/>,
                            </div>
                        </div>



                            <div className={'flex_block'}>

                                    <DecorateBlocEle post = {{img:"",
                                        title:"Ціна",
                                        description:"Наша політика це забезпечення максимальної доступності для клієнтів"}}/>,

                                <DecorateBlocEle className={'last'} post = {{img:"",
                                    title:"Різноманіття",
                                    description:"У наших ангарах знаходяться велика " +
                                        "кількість різноманітних влітаків тому у нас ви точно найдете літак по смаку"}}/>

                            </div>`
                    </div>
            </div>
        </span>
    );
};

export default Contend;