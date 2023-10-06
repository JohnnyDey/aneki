const setups = [
"Купил мужик шляпу",
"Шел медведь по лесу. Видит, машина горит,",
"Лупа и Пупа пошли получать зарплату, но в бухгалтерии все перепутали",
"Приходит Петька к Василию Ивановичу",
"Жил-был царь и было у него косоглазие. Пошел куда глаза глядят",
"Вовочка прибегает домой со школы",
"Идет волк по лесу. К нему подбегает заяц",
"Идут два моряка. Один другому говорит",
"Летят в самолете американец, француз и русский",
"Заходит улитка в бар",
"Приходит мужик в аптеку",
"Рабинович продает арбузы. 3 за 10 рублей, 1 за 3 рубля. Подходит к нему мужик",
"Однажды молодой человек пришел к мудрецу",
"Приходит заика в магазин",
"Плавают 2 гея в бассейне",
"Мужик пошел купаться в озеро",
"Приходит мужик на прием к доктору с жалобой, что в заднем проходе что-то колется. Доктор посмотрел"
]

const punchlines = [
", а она ему как раз.",
", сел в нее и сгорел.",
", а Пупа получил за лупу.",
" и порвался!",
", а там насрано.",
", а солдат громко отвечает: -я рядовой табуретка!",
", а там армяне в нарды играют.",
", это был Албер Энштейн.",
", но есть нюанс.",
". Ну а чего ты хотел? 46 тонн!",
", и тут голос спрашивает: \"Плюс 2 или минус 2?\"",
". Вывод: тараканы без ног не слышат."]

const laughs = [new Audio('SmehAlmaz.mp3'), new Audio('SmehWardi.mp3'), new Audio('SmehVitec.mp3'), new Audio('SmehAlena.mp3')]

function mashUp() {
  const setup = setups[getRandomInt(setups.length)];
  const punchline = punchlines[getRandomInt(punchlines.length)];
  const textarea = document.getElementById("value");

  const result = setup + punchline;
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