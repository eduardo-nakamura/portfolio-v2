

import { useTranslation } from 'react-i18next';
import {useState, useEffect} from 'react';
import BRFlag from '../assets/BR.png'
import USFlag from '../assets/US.png'
import Icon from '../assets/favicon.png'
import './Header.css'
import { NavLink  } from 'react-router-dom'

export default function Header() {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
    const [mobileMenu, SetMobileMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
    useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth < 576 === true ? setIsMobile(true) : setIsMobile(false);
            if (window.innerWidth < 576 === true) {
                setIsMobile(true)
                SetMobileMenu(false)
            } else {
                setIsMobile(false)
                SetMobileMenu(true)
            }

        }, false);
    }, [isMobile]);
    // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    return (
        <div className="header__container" >
            <div className="header__logo">
                <img src={Icon} alt=""  /> 
            </div>
            <button className={`header__menu__button ${isMobile === true ? '' : 'hide'}`} onClick={() => SetMobileMenu(!mobileMenu)}><span className={`fa fa-solid ${mobileMenu === false ? 'fa-bars' : 'fa-xmark'}`} /></button>

            <div className={`header__buttons ${(mobileMenu === true) ? '' : 'hide'}`}>
                <div className="header__language">      
                    {i18n.language === "pt" ? <img src={BRFlag} alt="" /> : <img src={USFlag} alt="" />}
                    <select value={i18n.language} onChange={handleLanguageChange}>
                        <option value="en">{t('english')}</option>
                        <option value="pt">{t('portuguese')}</option>           
                    </select>
                </div>
                <NavLink  to="/curriculo" className={({ isActive }) => isActive ? "active-link" : ""}>
                    <p>{t('resume')}</p>
                </NavLink >
                {/* <NavLink  to="/sobre" className={({ isActive }) => isActive ? "active-link" : ""}>{t('about')}</NavLink > */}
                <NavLink  to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
                    <p>{t('projects')}</p>
                </NavLink >
                {/* <NavLink  to="/" className={({ isActive }) => isActive ? "active-link" : ""}>{t('contact')}</NavLink > */}
            </div>
            {/* <div className="header__buttons__mobile">
                <button onClick={() => SetMobileMenu(!mobileMenu)}><span className={`fa fa-solid ${mobileMenu === true ? 'fa-bars' : 'fa-xmark'}`} />{mobileMenu === true}</button>
            
            </div> */}
        </div>
    )
}
