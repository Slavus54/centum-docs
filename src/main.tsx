import { render } from 'preact'
import { App } from './app.tsx'
import './app.css'

if ('serviceWorker' in window.navigator) {
    window.navigator.serviceWorker.register('/serviceWorker.js')
}

render(<App />, document.querySelector('.main')!)