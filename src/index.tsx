import ReactDOM from 'react-dom';
import Router from './app/components/App';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.ts')
        .then(registration => {
          console.log('Service Worker registered: ', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }

ReactDOM.render(<Router />, document.querySelector('#root'));


