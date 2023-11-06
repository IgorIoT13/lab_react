import React from 'react';

import './css/fooder.css'

import {footer} from "../../text_const";

const Footer = () => {
    return (
        <footer>
            <article>
            </article>

            <aside>
                <ul>
                    <ul>
                        <li><a href={'/'}>{footer.ukr.home}</a></li>
                        <li><a href={'/catalog'}>{footer.ukr.catalog}</a></li>
                        <li><a href={'#'}>{footer.ukr.help}</a></li>
                        <li><a href={'#'}>{footer.ukr.contact}</a></li>
                    </ul>
                </ul>
            </aside>
        </footer>
    );
};

export default Footer;