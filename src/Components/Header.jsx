

import { useTranslation } from 'react-i18next';
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
    // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    return (
        <div className="header__container" >
            <div className="header__logo">
                <img src={Icon} alt=""  />
            </div>
            <div className="header__buttons">
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
        </div>
    )
}
