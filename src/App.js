import { useState } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import logo from './assets/logo.svg'
import AboutMe from './containers/AboutMe/AboutMe'

import githubIcon from '@iconify/icons-ant-design/github-filled'
import linkedinIcon from '@iconify/icons-ant-design/linkedin-filled'
import behanceIcon from '@iconify/icons-ant-design/behance-circle-filled'
import penIcon from '@iconify/icons-bx/bx-pen'
import codeIcon from '@iconify/icons-gg/brackets'
import userIcon from '@iconify/icons-bx/bx-user-pin'
import happyIcon from '@iconify/icons-heroicons-outline/emoji-happy'
import clipboardIcon from '@iconify/icons-heroicons-outline/clipboard-list'
import annotationIcon from '@iconify/icons-heroicons-outline/annotation'
import groupIcon from '@iconify/icons-heroicons-outline/user-group'
import figmaLogo from '@iconify/icons-ph/figma-logo';

import kal1 from './assets/Kal/kal1.png'
import kal_back from './assets/Kal/kal-back.png'
import kal_content_1 from './assets/Kal/KalContent1.jpg'
import kal_content_2 from './assets/Kal/KalContent2.jpg'
import cremosos1 from './assets/Cremosos/cremosos1.png'
import cremosos2 from './assets/Cremosos/cremosos2.png'
import cremososdesk from './assets/Cremosos/cremosos-desk.png'
import cremosos_back from './assets/Cremosos/cremosos-back.png'
import cremosos_content_1 from './assets/Cremosos/CremososContent1.jpg'
import cremosos_content_2 from './assets/Cremosos/CremososContent2.jpg'

import medot1 from './assets/Medot/medot1.png'
import medot2 from './assets/Medot/medot2.png'
import medot_back from './assets/Medot/medot-back.png'
import aventi1 from './assets/Aventi/aventi1.png'
import aventi2 from './assets/Aventi/aventi2.png'
import aventi3 from './assets/Aventi/aventi3.png'
import ProjectDetail from './containers/ProjectDetail/ProjectDetail'


function App() {
  const[socials] = useState([
    {
      title: "My Github",
      icon: githubIcon,
      url: '#',
      id: 1
    },
    {
        title: "My LinkedIn",
        icon: linkedinIcon,
        url: '#',
        id: 2
    },
    {
        title: "My Behance",
        icon: behanceIcon,
        url: '#',
        id: 3
    }
  ]);
  const[proeficiencies] = useState([
    {
      icon: penIcon,
      title: "UI Designer",
      id: 1
    },
    {
        icon: codeIcon,
        title: "Front-end Developer",
        id: 2
    },
    {
        icon: userIcon,
        title: "Front-end Developer",
        id: 3
    }
  ]);
  const[discplines] = useState([
      {
          title: "UX Design",
          text: "I can take the requeriments of a new interface from scratch, realize user testings and prototypes in order to design an interface that achieve the expectations and needs of the target.",
          id: 1
      },
      {
          title: "Front-end Dev",
          text: "I can estimate an interface and their funcitonal requeriments with attention and detail in order to code it without losing the design purpuse and aesthetic of the functionality, creating code modular and reusable, and using the best technologies and libraries to achieve the UI Design needs and requeriments.",
          id: 2
      },
      {
          title: "UX Design",
          text: "I can translate requeriments into usable and desirable interfaces, prioritizing accesibility, making user testings  in order to validate that the user needs are being satisfied.",
          id: 3
      }
  ]);
  const[abilities] = useState([
    {
      title: "Teamworker",
      icon: happyIcon,
      id: 1
  },
  {
      title: "Frustration Tolerant",
      icon: clipboardIcon,
      id: 2
  },
  {
      title: "Task Prioritizer",
      icon: annotationIcon,
      id: 3
  },
  {
      title: "Good Comunicator",
      icon: groupIcon,
      id: 4
  }
  ]);
  const[projects] = useState([
    {
      name: "Kal",
      project_type: "desktop",
      images: [kal1],
      backImage: kal_back,
      id: "kal",
      tags: ["ux", "ui", "dev"],
      socialMedia: [
        {
          title: "View on Figma",
          icon: figmaLogo,
          url: '#'
        }
      ],
      projectContent: [{
        type: "text",
        title: 'The job to be done',
        content: 'An agriculture enterprise on Cali needed to develop an application to track their machinery and their replacements. At the begginning the idea was very abstract and was necesary to divide the big picture into several steps to be sure of achieve the needs of the users. The process began from the creation of the brand and design parametres to the front-end development of the application with AngularJs.'
      },{
        type: "text",
        title: 'The user',
        content: 'The user were people from 25 to 30 years used to tracking and management applications. The forms was made with material design to approach the target and the contrast is high in the most of the visuals and screens.'
      },{
        type: 'onContentImage',
        url: kal_content_1
      },{
        type: "text",
        title: 'The challenge',
        content: 'It was necessary to create a reusable and modular interface. Was made a design system and every module was created from these point.  The learning of new libraries and of Angular as a framework was also a challenge for me due to my experience with modular frameworks on Javascript. It empowered me to learn about new frameworks and technologies on the industry.'
      },{
        type: 'image',
        url: kal_content_2
      }]
    },
    {
      name: "Cremosos",
      project_type: "responsive",
      images: [
        {
          type: "mobile",
          url: cremosos1,
        },
        {
          type: "desktop",
          url: cremososdesk,
        },
        {
          type: "mobile",
          url: cremosos2,
        },
      ],
      backImage: cremosos_back,
      id: "cremosos",
      tags: ["ux", "ui", "dev"],
      socialMedia: [
        {
          title: "View on Github",
          icon: githubIcon,
          url: '#'
        },
        {
          title: "View on Behance",
          icon: behanceIcon,
          url: '#'
        }
      ],
      projectContent: [
        ,{
          type: "text",
          title: 'The user',
          content: 'It was a redesign of Ice Cream Nation’s Website. They needed to approach a new target between 18 and 22 years old. We decided to use a trivia by its engage and it’s ease of sharing on social media.'
        },{
          type: "text",
          title: 'The characters',
          content: 'Were selected vivid colors to attract people’s interest. The different colors and accesories were added to make it personanizable and easily recognizable.'
        },{
        type: 'onContentImage',
        url: cremosos_content_1
        },{
          type: "text",
          title: 'The challenge',
          content: 'Were selected vivid colors to attract people’s interest. The different colors and accesories were added to make it personanizable and easily recognizable.'
        },{
        type: 'image',
        url: cremosos_content_2
        }
    ]
    },
    {
      name: "Medot",
      project_type: "mobile",
      images: [medot1, medot2],
      backImage: medot_back,
      id: "medot",
      tags: ["dev"],
      socialMedia: [
        {
          title: "View on Github",
          icon: githubIcon,
          url: '#'
        }
      ],
      projectContent: [{
        type: "text",
        title: 'The project',
        content: 'Medot is an application being developed in higher scale in Valle del Lili’s Hospital in Cali. The idea surged from the need of new doctors on practicing arterial intervention on real contexts. It was developed from scratch in a team of three people being me the one in charge of the development. Was needed rapid prototiping that’s why the application was developed with Vanilla Javascript and used for testing with real users in only three weeks with development sesions of three hours by week, prioritizing tasks in order to achieve every time a better MVP.'
      },]
    }
  ]);

  /*
      {
      name: "Aventi",
      project_type: "various",
      images: [aventi1, aventi2, aventi3],
      id: "aventi",
      tags: ["ux", "ui", "dev"]
  }*/
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <section className="main-container--blue">
        <Header logo={logo}/>
        <main className="main-container--blue">
          <Switch> 
            <Route exact path='/' render={() => (
              <>
                <Home proeficiencies={proeficiencies} projects={projects}/>
              </>
            )}
            />
            <Route path='/about-me' render={() => (
              <>
                <AboutMe socials={socials} proeficiencies={proeficiencies} abilities={abilities} discplines={discplines}/>
              </>
            )}
            />
            <Route path='/project/:id'>
              <ProjectDetail projects={projects} />
            </Route>
          </Switch>
        </main>
      </section>
    </Router>
  );
}



export default App;
