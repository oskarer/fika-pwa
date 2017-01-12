import App from './App';

const app = new App({
  target: document.querySelector('#root'),
  data: { weeks: [] }
});

fetch('https://uosdxsnu6j.execute-api.eu-central-1.amazonaws.com/latest/all')
  .then(function (response) { return response.json() })
  .then(function (json) {
    const weeks = Object.keys(json);
    const values = Object.values(json)
    const schedule = weeks.map((week, index) => ({
      dependencies: values[index].dependencies,
      fika: values[index].fika,
      week,
    }))
    console.log('Got schedule', schedule);
    app.set({ weeks: schedule })
  })
  .catch(function (error) {
    console.log(error.message);
  });
