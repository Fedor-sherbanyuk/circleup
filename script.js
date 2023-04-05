const VIDEO = document.createElement('video');
const ROOT = document.querySelector('#root');
VIDEO.src = 'background.mp4';
const AUDIO = document.createElement('audio');
AUDIO.src = 'blink-182.mp3';
AUDIO.controls = true;
VIDEO.autoplay = true;
VIDEO.muted = true;
VIDEO.loop = true;
const CIRCLE_CLASS = 'round';
const INPUT_FILL = document.createElement('input');
const BUTTON_FILL = document.createElement('button');
const RESTART = document.createElement('button');
document.body.append(VIDEO);
document.body.append(AUDIO);
document.body.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.id === 'play'||event.target.textContent==="Нарисовать круг") {
        INPUT_FILL.type = 'number';
        INPUT_FILL.placeholder = 'Введите число диаметра круга';
        INPUT_FILL.style.cssText = "padding: 10px; margin: 10px; border: 1px solid black; border-radius: 5px; width: 200px; height: 30px; font-size: 20px; font-weight: bold; color: black; background-color: pink;";
        BUTTON_FILL.id = "buttonFill";
        BUTTON_FILL.style.cssText = "padding: 14px 0 35px 0;; margin: 10px; border: 1px solid black; border-radius: 5px; width: 200px; height: 30px; font-size: 20px; font-weight: bold; color: black; background-color: blue;";
        BUTTON_FILL.textContent = "Нарисовать";
        document.querySelector('#play').remove();
        ROOT.append(INPUT_FILL);
        ROOT.append(BUTTON_FILL);
    }
     else if (event.target.id === 'buttonFill'||event.target.textContent==="Нарисовать") {
        function createDiv() {
            const divCircle = document.createElement('div');
            divCircle.classList.add(CIRCLE_CLASS);
            divCircle.style.width = `${INPUT_FILL.value}px`;
            divCircle.style.height = `${INPUT_FILL.value}px`;
            divCircle.style.borderRadius = '50%';
            divCircle.style.backgroundColor = getRandomHexColor();
            return divCircle;
        }

        const circlesCollection = document.createDocumentFragment();
        function displayCircle(){
            for (let i = 0; i <100; i++) {
                circlesCollection.append(createDiv());
            }
            return circlesCollection;
        }
        RESTART.id = "restart";
        RESTART.textContent = "ОБНОВИТЬ";
        RESTART.classList.add('btn');
        ROOT.append(RESTART);
        ROOT.append(displayCircle());
        INPUT_FILL.remove();
        BUTTON_FILL.remove();

        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')}`;
        }

    } else if(event.target.closest('.round')){
       event.target.remove();
    } else if(event.target.id=== 'restart'){
      window.location.reload();
}

});
