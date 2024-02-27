import './SuperButton.css';

import { FC } from 'react';

import { cnSuperButton } from './SuperButton.nameclass';

// type SuperButtonProps = {
//     isDisabled: boolean;
//     children: string;
//     className: string;
//     isActive?: boolean;
// }

// const SuperButton: FC<SuperButtonProps> = ({ children, className, isDisabled, isActive }) => {
//     return (
//         <div className={cnSuperButton()}>
//             <div className={cnSuperButton('Container')}>
//                 <button className={cnSuperButton({ className })} disabled={isDisabled} >{children}</button>
//             </div>
//         </div>
//     );
// }

type SuperButtonProps = {
    theme: 'light' | 'dark';
    typeBackGround: 'primary' | 'secondary';
    isDisabled: boolean;
    children: string;
}

const SuperButton: FC<SuperButtonProps> = ({ theme, typeBackGround, isDisabled, children }) => {

    const classCss = `${theme}-${typeBackGround}`

    return (
        <div className={cnSuperButton()}>
            <div className={cnSuperButton('Container')}>
                <button
                    className={cnSuperButton('Button', { type: classCss })}
                    disabled={isDisabled} >
                    {children}
                </button>
            </div>
        </div> 
    );
}

export { SuperButton };
