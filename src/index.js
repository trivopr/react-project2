import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './routes/Routes'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
