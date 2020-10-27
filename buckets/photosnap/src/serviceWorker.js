import * as f from '@rex/f'
import agent from '@rex/agent'

if (agent.isUser) {
  if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
      navigator
        .serviceWorker
        .register('/sw.js')
        .then(registration => console.log('SW registered: ', registration))
        .catch(registrationError => console.log('SW registration failed: ', registrationError))
    }
  }
}
