import { cnSettingsMenu } from './SettingsMenu.classname';


import keySvg from './image/Key.svg';
import chatSvg from './image/Chat.svg';
import bellSvg from './image/Bell.svg';
import storageSvg from './image/Storage.svg';
import helpSvg from './image/Help.svg';
import inviteSvg from './image/Invite a friend.svg';



import './SettingsMenu.css';


const SettingMenu = () => {
    return (
        <nav className={cnSettingsMenu()}>
            <ul className={cnSettingsMenu('List')}>
                <li className={cnSettingsMenu('Item')}><img src={keySvg} alt='icon' /><a href='/'>Account</a></li>
                <li className={cnSettingsMenu('Item')}><img src={chatSvg} alt='icon' /><a href='/'>Chat Settings</a></li>
                <li className={cnSettingsMenu('Item')}><img src={bellSvg} alt='icon' /><a href='/'>Notifications</a></li>
                <li className={cnSettingsMenu('Item')}><img src={storageSvg} alt='icon' /><a href='/'>Storage</a></li>
                <li className={cnSettingsMenu('Item')}><img src={helpSvg} alt='icon' /><a href='/'>Help</a></li>
                <li className={cnSettingsMenu('Item')}><img src={inviteSvg} alt='icon' /><a href='/'>Invite a friend</a></li>
            </ul>
        </nav>
    );
}

export { SettingMenu };