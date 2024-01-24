document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const url = 'https://uselessfacts.jsph.pl/random.json?language=en'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('p').innerText = data.text;
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}