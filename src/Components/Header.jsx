

import { useTranslation } from 'react-i18next';
import BRFlag from '../assets/BR.png'
import USFlag from '../assets/US.png'
import './Header.css'
export default function Header() {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };
    // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    return (
        <div className="header__container" >
            <div className="header__logo">a</div>
            <div className="header__buttons">
                <div className="header__language">      
                    {i18n.language === "pt" ? <img src={BRFlag} alt="" /> : <img src={USFlag} alt="" />}
                    <select value={i18n.language} onChange={handleLanguageChange}>
                        <option value="en">{t('english')}</option>
                        <option value="pt">{t('portuguese')}</option>           
                    </select>
                </div>
               
          
                <button>{t('resume')}</button>
                <button>{t('about')}</button>
                <button>{t('projects')}</button>
                <button>{t('contact')}</button>
            </div>
        </div>
    )
}
