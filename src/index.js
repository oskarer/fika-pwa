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
