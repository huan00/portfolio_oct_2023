import warmWeatherImage from '../assets/projectImage/warmWeather.png'
import deviseImage from '../assets/projectImage/letsDevise.png'
import thirteenImage from '../assets/projectImage/thirteen.png'

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
      'Full development frontend development with react native and backend with Nodejs, socket.io and create the game logic.',
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
      'One of my favorite childhood card game. Development this to reminisce my childhood and play with friends.',
    devType: 'Full stack development: ',
    development:
      'React native for frontend development, and backend with Node.js for game logic, and socket.io for multi-player server communication.',
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
      'React typescript with tailwind for frontend. Backend developed with django-rest framework along with OpenAI for data generation.',
    website: 'https://warm-weather.netlify.app'
  }
]
