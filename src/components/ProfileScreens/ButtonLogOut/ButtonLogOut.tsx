import { cnButtonLogOut } from './ButtonLogOut.classname';

import { FC } from 'react';


import './ButtonLogOut.css';

type ButtonLogOutProps = {
    text: string;
    isDisabled: boolean;
}

const ButtonLogOut: FC<ButtonLogOutProps> = ({ text, isDisabled }) => {
    return (
        <div className={cnButtonLogOut()}>
            <button
                className={cnButtonLogOut('Button')}
                disabled={isDisabled} >
                {text}
            </button>
        </div>
    );
}

export { ButtonLogOut };