const setups = [
"Купил мужик шляпу,",
"Шел медведь по лесу. Видит, машина горит,",
"Лупа и Пупа пошли получать зарплату, но в бухгалтерии все перепутали и",
"Приходит Петька к Василию Ивановичу и",
"Жил-был царь и было у него косоглазие. Пошел куда глаза глядят,"
]

const punchlines = [
"а она ему как раз.",
"сел в нее и сгорел.",
"Пупа получил за лупу",
"и порвался!"]

const laughs = [new Audio('SmehAlmaz.mp3'), new Audio('SmehWardi.mp3'), new Audio('SmehVitec.mp3'), new Audio('SmehAlena.mp3')]

function mashUp() {
  const setup = setups[getRandomInt(setups.length)];
  const punchline = punchlines[getRandomInt(punchlines.length)];
  const textarea = document.getElementById("value");

  const result = setup + " " + punchline;
  textarea.value = result;
  const isSpeechOn = document.getElementById("speechOn");
  if (isSpeechOn.checked) {
    speak(result);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function speak(text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterThis);
  utterThis.onend = () => {
      laughs[getRandomInt(laughs.length)].play();
  }
}