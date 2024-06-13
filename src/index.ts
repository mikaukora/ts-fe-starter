import './style.scss'
import { upperCase, map } from 'lodash'
import { Counter } from './counter'

const tools = [
  { name: 'Webpack', url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg' },
  { name: 'TypeScript', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'SASS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
  { name: 'HTML5', url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'Lodash', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lodash.svg' }
]

const render = () => {
  return `
    <div class="main">
    <h1>Vanilla${upperCase('ts')} starter</h1>
    <p>
    This is a starter template for HTML + SASS + TypeScript frontend development.
    Assets are bundled with Webpack. Lodash is included for demo purposes.
    </p>
    <div>
    <p>This is a counter for fun.</p>
    <div id="counter"></div>
    </div>
    <div class="icon-container">
     ${tools.map(tool => `<div><img src=${tool.url} alt=${tool.name}></div>`).join(' ')}
    </div>
    </div>
    `
}

document.getElementById('app').innerHTML = render()
const counter = new Counter('counter')
counter.updateTree()
