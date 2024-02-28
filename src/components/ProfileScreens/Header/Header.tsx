import { cnHeader } from './Header.classname';

import { FC } from 'react';

import svgBackButton from './image/Vector.svg'

import './Header.css';

type HeaderProps = {
    headerText: string;
}

const Header: FC<HeaderProps> = ({ headerText }) => {
    return (
        <header className={cnHeader()}>
            <div className={cnHeader('Container')}>
                <button className={cnHeader('Button')}>
                    <img className={cnHeader('Button-img')} src={svgBackButton} alt='button-logo'/>
                </button>
                <h2>{headerText}</h2>
            </div>
        </header>
    );
}

export { Header };