import React from 'react';
import s from '../../common/styles.module.css';
import projectsStyle from './projects.module.css'
import ProjectCard from "../projectCard/ProjectCard";
import shoes from "../../images/projects/shoesStore.jpg";
import coffeeHouse from "../../images/projects/coffeeHouse.jpg";
import spaceJourney from "../../images/projects/spaceJourney.jpg";
import shoppingList from "../../images/projects/shoppingList.jpg";
import nineFloors from "../../images/projects/nineFloors.jpg";
import slider from "../../images/projects/adaptiveSlider.jpg";
import snakeGame from "../../images/projects/snakeGame.jpg";
import wintersTale from "../../images/projects/wintersTale.jpg";


const Projects = (props) => {

    const {lang, theme} = props;

    const projects = [
        {
            id: 1,
            image: shoes,
            title: 'Shoes store',
            descriptionENG: 'web-site',
            descriptionRU: 'веб-сайт',
            descriptionModalENG: 'First layout. IT-Academia.\n' +
                'The main page of the site of the shoe store.\n' +
                'The float property is used for markup.\n' +
                'Used: HTML, CSS.',
            descriptionModalRU: 'Первый макет. IT-Академия.\n' +
                'Главная страница сайта обувного магазина.\n' +
                'Свойство float используется для разметки.\n' +
                'Используется: HTML, CSS.',
            url: 'https://reshkodzmitry.github.io/ShoesStore/'
        },
        {
            id: 2,
            image: coffeeHouse,
            title: 'Coffee house "Realist cafe"',
            descriptionENG: 'web-site',
            descriptionRU: 'веб-сайт',
            descriptionModalENG: 'Website for the Realist Cafe chain of coffee houses.\n' +
                'Technologies used:\n' +
                'HTML, CSS, Bootstrap, Lightbox Gallery.',
            descriptionModalRU: 'Сайт сети кофеен Realist Cafe.\n' +
                'Используемые технологии:\n' +
                'HTML, CSS, Bootstrap, Галерея Lightbox.',
            url: 'https://reshkodzmitry.github.io/CoffeeHouse/'
        },
        {
            id: 3,
            image: nineFloors,
            title: 'Nine floors',
            descriptionENG: 'web-site',
            descriptionRU: 'веб-сайт',
            descriptionModalENG: 'Layout of the main page of the rental services website.\n' +
                'Used HTML, CSS, Slick Slider, BEM, Flex.',
            descriptionModalRU: 'Макет главной страницы сайта аренды жилья.\n' +
                'Использованы HTML, CSS, Slick Slider, BEM, Flex.',
            url: 'https://reshkodzmitry.github.io/nineFloors/'
        },
        {
            id: 4,
            image: spaceJourney,
            title: 'Space journey',
            descriptionENG: 'game',
            descriptionRU: 'игра',
            descriptionModalENG: 'Space Jorney - is a game in which you have to overcome the asteroid belt.\n' +
                'Your path will be difficult and dangerous. Ahead of you is the unknown space,\n' +
                'the bewitching beauty of galaxies and other worlds. \n' +
                'Used technologies: HTML, CSS, JS, Canvas.',
            descriptionModalRU: 'Space Jorney - это игра, в которой вам предстоит преодолеть пояс астероидов.\n' +
                '— Твой путь будет труден и опасен. Впереди неизведанный космос,\n' +
                'завораживающая красота галактик и других миров.\n' +
                'Используемые технологии: HTML, CSS, JS, Canvas.',
            url: 'https://reshkodzmitry.github.io/spaceJourney/'
        },
        {
            id: 5,
            image: shoppingList,
            title: 'Shopping list',
            descriptionENG: 'application',
            descriptionRU: 'веб-приложение',
            descriptionModalENG: 'Web application Shopping Planner.\n' +
                'Come to the store and remember what you had to buy? The shopping planner will always help you \n' +
                'choose exactly what you need.\n' +
                'Used technologies: HTML, CSS, MaterialUI, JavaScript, TypeScript, React, React Hook',
            descriptionModalRU: 'Веб-приложение Планировщик покупок.\n' +
                'Пришел в магазин и вспомнил, что ты должен был купить? Планировщик покупок всегда поможет вам\n' +
                'выберите именно то, что вам нужно.\n' +
                'Используемые технологии: HTML, CSS, MaterialUI, JavaScript, TypeScript, React, React Hook',
            url: 'https://reshkodzmitry.github.io/shoppingList/'
        },
        {
            id: 6,
            image: wintersTale,
            title: 'Winter`s tale',
            descriptionENG: 'application',
            descriptionRU: 'веб-приложение',
            descriptionModalENG: 'The page of the online store selling tubings with a basket.\n' +
                'Used to create: JavaScript, Material UI',
            descriptionModalRU: 'Страница интернет-магазина по продаже тюбингов с корзиной.\n' +
                'Используется для создания: JavaScript, Material UI',
            url: 'https://reshkodzmitry.github.io/Winter-sTale/'
        },
        {
            id: 7,
            image: slider,
            title: 'Adaptive slider',
            descriptionENG: 'application',
            descriptionRU: 'веб-приложение',
            descriptionModalENG: 'Adaptive slider in pure JS.\n' +
                'Used HTML, CSS, JS, Flex.',
            descriptionModalRU: 'Адаптивный слайдер на чистом JS.\n' +
                'Используется HTML, CSS, JS, Flex.',
            url: 'https://reshkodzmitry.github.io/Adaptive-slider/'
        },
        {
            id: 8,
            image: snakeGame,
            title: 'Snake game',
            descriptionENG: 'game',
            descriptionRU: 'игра',
            descriptionModalENG: 'The classic game "Snake".\n' +
                'Used HTML, CSS, JS, Canvas.',
            descriptionModalRU: 'Классическая игра "Змейка"\n' +
                'Используется HTML, CSS, JS, Canvas.',
            url: 'https://reshkodzmitry.github.io/SnakeGame/'
        },
    ]

    return (
        <div className={theme ? "" : projectsStyle.projectsBGNight} id='project'>
            <h3 className={`${s.montserratFont} ${projectsStyle.projectTitle}`}>{lang ? "Projects" : "Проекты"}</h3>
            <div className={`${s.container} ${s.flex} ${projectsStyle.projectsWrapper}`}>


                <div className={`${projectsStyle.projects}`}>

                    {projects.map(m => {
                        return (
                            <ProjectCard
                                key={m.id}
                                image={m.image}
                                title={m.title}
                                descriptionENG={m.descriptionENG}
                                descriptionRU={m.descriptionRU}
                                descriptionModalENG={m.descriptionModalENG}
                                descriptionModalRU={m.descriptionModalRU}
                                url={m.url}
                                projects={projects}
                                lang={lang}
                                theme={theme}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Projects;