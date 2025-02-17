import React, { useState, useRef, useEffect } from 'react';
import './estilos.css';
import AnimatedSection from '../AnimatedSection'
export default function Curriculo() {
    return (
        <div className='curriculo' >
            <section>
                <p><strong>Frontend | Game Developer</strong></p>
                <h1>Eduardo <span>Naka</span>mura</h1>
                <p>Profissional de Front-end com experiência em desenvolvimento e design web. Sólida experiência em React.js, HTML5, CSS, Sass e JavaScript, com foco na criação de interfaces de usuário responsivas e de alta qualidade. Habilidade em versionamento de código com Git e GitHub.</p>
            </section>
            <section>
                <ul>
                    <li><p>Nome: Eduardo Issamu Nakamura</p></li>
                    <li><p>E-mail:<a href="shouryuha@gmail.com">shouryuha@gmail.com</a></p></li>
                    <li><p>Telefone:+55 11 97473-9805</p></li>
                    <li><p>LinkedIn: <a href="https://www.linkedin.com/in/eduardo-nakamura-6771898/">https://www.linkedin.com/in/eduardo-nakamura-6771898/</a></p></li>
                    <li><p>GitHub: <a href="mailto:shouryuha@gmail.com">shouryuha@gmail.com</a></p></li>
                    <li><p>Portfólio: <a href="shouryuha@gmail.com">shouryuha@gmail.com</a></p></li>
                </ul>
            </section>
            <section>
                <p>Resumo Profissional</p>
                <p>Desenvolvedor Front-End com [X] anos de experiência na criação de interfaces responsivas e intuitivas. Especializado em HTML, CSS, JavaScript e frameworks modernos como React.js e Vue.js. Apaixonado por design centrado no usuário e performance otimizada</p>
            </section>
            <section>
                <p>Habilidades Técnicas:</p>
                <ul>
                    <li><p>Linguagens: HTML5, CSS, Javascript, Typescript</p></li>
                    <li><p>Frameworks e Bibliotecas: React.js, Angular, SASS, Bootstrap</p></li>
                    <li><p>Ferramentas: Git, Figma, VS Code</p></li>
                    <li><p>Metodologias: Agile, Scrum, Mobile First, SEO</p></li>
                </ul>
            </section>

            <AnimatedSection>
                <section>
                    <p>Experiência Profissional:</p>
                    <ul>
                        <li>
                            <p>CONFLUENCE INFORMATICA (Maio 2019 - Setembro 2023)</p>
                            <p>Desenvolvedor Front-End para o Monitor de Integrações Omnilinker ( Angular7 ) e outros projetos usando React.</p>
                        </li>
                        <li>
                            <p>Carrefour (Outubro 2017 - Maio 2019)</p>
                            <p>Trabalhei no e-commerce, publicando peças na página principal e categorias, desenvolvendo código front-end das landing pages e hotsites de conteúdo, atualizando as vitrines e páginas de produto.</p>
                        </li>
                        <li>
                            <p>Saraiva e Siciliano · Full-time</p>
                            <p>Comecei fazendo publicação e atualização de peças na página principal e categorias, e front-end das landing pages, hotsites de conteúdo e montagem de e-mail marketing.</p>
                        </li>
                    </ul>
                </section>
              
            </AnimatedSection>

            

        </div>

    );
}
