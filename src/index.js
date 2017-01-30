import 'regenerator-runtime/runtime';
import App from './App';

const app = new App({
  target: document.querySelector('#root'),
  data: { weeks: [] }
});

(async () => {
  try {
    const response = await fetch(
      'https://uosdxsnu6j.execute-api.eu-central-1.amazonaws.com/latest/all');
    const result = await response.json();
    console.log(result);
    app.set({ weeks: result })
  } catch (error) {
    console.log(error.message);
  }
})();

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }).catch(function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
