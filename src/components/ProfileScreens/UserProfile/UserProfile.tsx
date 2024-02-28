import { cnUserProfile } from './UserProfile.classname';

import { FC } from 'react';


import imageEdit from '../image/Edit.svg';

import './UserProfile.css';

type UserProfileProps = {
    imageUser: string;
    name: string;
    description: string;
}

const UserProfile: FC<UserProfileProps> = ({ imageUser, name, description }) => {
    return (
        <main className={cnUserProfile()}>
            <div className={cnUserProfile('Container')}>
                <div className={cnUserProfile('Wrapper')}>
                    <img className={cnUserProfile('Image')} src={imageUser} alt='user-profile' />
                    <button className={cnUserProfile('Button')}>
                        <img className={cnUserProfile('Icon')} src={imageEdit} alt='icon-edit' />
                    </button>
                </div>
            </div>
            <div className={cnUserProfile('Text')}>
                <div className={cnUserProfile('Text-Container')}>
                <h2 className={cnUserProfile('User-Name')}>
                    {name}
                </h2 >
                <p className={cnUserProfile('User-Description')}>{description}</p>
                </div>
            </div>
        </main>
    );
}

export { UserProfile };