import warmWeatherImage from '../assets/projectImage/warmWeather.png'
import deviseImage from '../assets/projectImage/letsDevise.png'
import thirteenImage from '../assets/projectImage/thirteen.png'
import otherdayImage from '../assets/projectImage/otherday.png'

export const PROJECTS = [
  {
    title: 'Devise.co',
    work: 'web development',
    imgUrl: deviseImage,
    tech: ['react', 'css'],
    description:
      "Freelance opportunity to revamp a recruitment agency's website with updated branding and messaging.",
    devType: 'Web development: ',
    development:
      'Frontend development with react native and backend with Nodejs, socket.io and create the game logic.',
    website: 'https://letsdevise.co'
  },
  {
    title: 'Thirteen-card game',
    work: 'react-native',
    imgUrl: thirteenImage,
    tech: [
      'react native',
      'css',
      'express',
      'nodejs',
      'socket.io',
      'googleAdmob'
    ],
    description:
      'One of my favorite childhood card games, I developed this to reminisce about my childhood and play with friends.',
    devType: 'Full stack development: ',
    development:
      'React native for frontend development, and backend developed with Node.js for game logic, and socket.io for multi-player server communication.',
    website: 'https://apps.apple.com/us/app/13-with-friends/id6447323987'
  },
  {
    title: 'Warm-weather',
    work: 'full stack development',
    imgUrl: warmWeatherImage,
    tech: [
      'react-typescript',
      'tailwind',
      'weather-api',
      'open-ai',
      'django-rest framework'
    ],
    description:
      'Develop an AI-powered clothing recommendation app to help people choose the right clothes for the weather.',
    devType: 'Full stack development: ',
    development:
      'React typescript with Tailwind for frontend development. Backend developed with django-rest framework along with OpenAI for data generation.',
    website: 'https://warm-weather.netlify.app'
  },
  {
    title: 'Otherday fitness',
    work: 'full stack development',
    imgUrl: otherdayImage,
    tech: ['react-native-typescript', 'open-ai', 'django-rest framework'],
    description:
      'Unleash your fitness potential with our AI-powered workout generator. Experience the convenience of having a fitness expert at your fingertips, anytime, anywhere.',
    devType: 'Full stack development: ',
    development:
      'React-native typescript and style. Backend developed with django-rest framework along with OpenAI for data generation. \n Take a test run with: \n Username: demo@demo.com \n Password: demo',
    website: 'https://otherday.netlify.app/'
  }
]
