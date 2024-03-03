import { FC } from 'react';

import { cnSuperButton } from './SuperButton.nameclass';

import './SuperButton.css';

type SuperButtonProps = {
    theme: 'light' | 'dark';
    type: 'primary' | 'secondary';
    isDisabled: boolean;
    text: string;
}

const SuperButton: FC<SuperButtonProps> = ({ theme, type, isDisabled, text }) => {
    return (
        <div className={cnSuperButton()}>
            <button
                className={cnSuperButton('Button', {theme, type , isDisabled} )}
                disabled={isDisabled} >
                {text}
            </button>
        </div>
    );
}

export { SuperButton };

