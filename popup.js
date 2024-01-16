const feelingButtonText = [
  'Bad',
  'Fearful',
  'Angry',
  'Disgusted',
  'Sad',
  'Happy',
  'Surprised',
]

const feelingColors = {
  'Bad': 'rgba(166, 124, 82, 0.4)',
  'Fearful': 'rgba(0, 255, 0, 0.4)',
  'Angry': 'rgba(255, 0, 0, 0.4)',
  'Disgusted': 'rgba(217, 224, 33, 0.4)',
  'Sad': 'rgba(0, 113, 188, 0.4)',
  'Happy': 'rgba(251, 176, 59, 0.4)',
  'Surprised': 'rgba(102, 45, 145, 0.4)'
};

const feelingsActions = {
  'Bad': 'Identify the cause of your negative feelings with journaling.',
  'Fearful': 'Take slow, deep breaths to calm your nervous system.',
  'Angry': 'Take a step back and breathe before responding.',
  'Disgusted': 'Reflect on why you feel disgusted',
  'Sad': 'It is okey to feel sad, allow yourself to feel sad.',
  'Happy': 'Wohoo, share your happiness with others.',
  'Surprised': 'Is the suprise positive or negative? Respond accordingly.'
};

const FEELINGS_TEXT_SELECTOR = '[data-feelings-text]';
const FEELINGS_SELECTOR = '[data-feelings]';

export default class FeelingsHandler {
  constructor() {
    this._element = document.querySelector(FEELINGS_SELECTOR);
    this._feelingsButton;
    this._feelingText = document.querySelector(FEELINGS_TEXT_SELECTOR);
  }

  init() {
    this.setUpButtons();
    this.setUpButtonsColor();
  }

  setUpButtons() {
    feelingButtonText.forEach((item) => {
      const button = document.createElement('button');
      button.innerText = item;
      button.setAttribute('data-feelings-button', '');
      this._element.appendChild(button);
    });
  }

  setUpButtonsColor() {
    this._feelingsButton = document.querySelectorAll('[data-feelings-button]');
    
    this._feelingsButton.forEach((feelingButton, index) => {
      const feeling = feelingButtonText[index];
      const color = feelingColors[feeling];
      feelingButton.style.backgroundColor = color;
      this.setUpEvents(feelingButton)

    });  }

  setUpEvents(feelingButton) {
    feelingButton.addEventListener('click', () => this.handleFeeling(feelingButton.innerText));
  }

  handleFeeling(feeling) {
    const actionText = feelingsActions[feeling];
    this._feelingText.innerText = actionText;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const feelingsHandler = new FeelingsHandler().init();
});