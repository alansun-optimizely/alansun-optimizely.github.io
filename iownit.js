/**
 * Learn To Apply Button
 */
function scrollToApply(event) {
  event.preventDefault();
  document.getElementById('apply').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
document.getElementById('learn-to-apply').addEventListener('click', scrollToApply);
document.getElementById('holding-your-spot').addEventListener('click', scrollToApply);

/**
 * Questions Toggling
 */
function accordianToggler(event) {
  const className = 'expand';
  if (this.classList.contains(className)) {
    this.classList.remove(className);
  } else {
    this.classList.add(className);
  }
}
const questionGroups = document.getElementsByClassName('question-group');
for (let question of questionGroups) {
  const togglee = question.getElementsByTagName('h4')[0];
  togglee.addEventListener('click', accordianToggler.bind(question));
}

/*
  Modals
*/
function closeModal(event) {
  const target = event.target;
  if (target.classList.contains('video')) {
    return;
  }

  const video = this.getElementsByClassName('video')[0];
  video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  this.classList.remove('show');
}
const modals = document.getElementsByClassName('modal');
for(let modal of modals) {
  modal.addEventListener('click', closeModal);
}

function showModal(event) {
  // intercept this if the width of the viewport is 767px or less
  if (window.innerWidth < 767) {
    let modalId = document.getElementById(event.target.dataset.modal).id;
    let url;
    if (modalId === 'modal-lauren') {
      url = 'https://www.youtube.com/watch?v=LPzqcFDYDro';
    }
    if (modalId === 'modal-kelly') {
      url = 'https://www.youtube.com/watch?v=-6BDkW0kN5w';
    }
    window.open(url, '_blank');
    return;
  }
  document.getElementById(event.target.dataset.modal).classList.add('show');
}

const modalLinks = document.getElementsByClassName('modal-link');
for (let link of modalLinks) {
  link.addEventListener('click', showModal);
}
