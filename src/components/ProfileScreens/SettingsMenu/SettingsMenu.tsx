import { cnSettingsMenu } from './SettingsMenu.classname';

import './SettingsMenu.css';
import { menuItems } from './menuItems';



const SettingMenu = () => {
    return (
        <nav className={cnSettingsMenu()}>
            <ul className={cnSettingsMenu('List')}>
                {menuItems.map((item, index) =>
                    <li className={cnSettingsMenu('Item')} key={index}><img src={item.srcImage} alt="icon" /><a href="/">{item.title}</a></li>)}
            </ul>
        </nav>
    );
}

export { SettingMenu };