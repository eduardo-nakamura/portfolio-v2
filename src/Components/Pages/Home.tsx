import React from 'react'
import { useTranslation } from 'react-i18next';

import AnimatedSection from '../AnimatedSection'
import photo from '../../assets/photo.jpeg'

export default function Home({ onChangeStyle, count }) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <section className="home">
        <AnimatedSection>
            <div className="home__intro">
              <img src={photo} alt="Photo of Eduardo Issamu Nakamura" />
              <article className="home__intro__text">
                <p><strong>Frontend | Game Developer</strong></p>
                <h1>Eduardo Nakamura</h1>
                <p>{t('home1')}</p>
                <div className="home__intro__buttons">
                  <button id='btn1' onClick={onChangeStyle}>{t('rolldice')}</button><button id='btn2'>{t('resume')}</button>
                </div>
              </article>
            </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
