const startBtn = document.querySelector('.start_btn');
const result = document.querySelector('.result');
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('.modal_btn');
const closeBtn = document.querySelector('.close_btn');
const shareBtn = document.querySelector('.share_btn');
const loading = document.querySelector('.result_loading');

function calculator () {
  const fieldValue = document.querySelector('#field_value');
  let timeValue = document.querySelector('#time_value');
  let timeValueInt = Number(timeValue.value);

  const fieldResult = document.querySelector('.field_result');
  const timeResult = document.querySelector('.time_result');

  if(fieldValue.value == ""){
    alert("입력한 내용이 없습니다!!!");
    fieldValue.focus();
    return false;
  } else if(timeValue.value == "") {
    alert("입력한 내용이 없습니다!!!");
    timeValue.focus();
    return false;
  } else if(timeValueInt > 24) {
    alert("24 이하의 수를 입력해주세요!!!");
    return false;
  }

  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(function(){
    result.style.display = 'flex';
    loading.style.display = 'none';
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt((10000/timeValueInt), 10);
  }, 1800)
}

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function copyurl() {
  const url = window.location.href;
  
  navigator.clipboard.writeText(url).then(() => {
    alert("URL이 복사되었습니다");
  });
}

window.onclick = function (e) {
  if(e.target == modal) {
    closeModal();
  }
}

shareBtn.addEventListener('click', copyurl);
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
startBtn.addEventListener('click', calculator);

