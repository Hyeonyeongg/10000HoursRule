const resultBtn = document.querySelector('.btn-exc');
const resultPage = document.querySelector('.cont-result');
const expert_name = document.querySelector('.expert_name');
const time = document.querySelector('.time');
const resultName = document.querySelector('.r-expert_name');
const resultTime = document.querySelector('.r-time');
const loadingClock = document.querySelector('.loading-clock');
const goBtn = document.querySelector('.btn-go');
const modal = document.querySelector('.cont-modal');
const closeBtn = document.querySelector('.btn-go2');
const shareBtn = document.querySelector('.btn-share');


resultBtn.addEventListener('click', showresult);

function showresult() {
    if(expert_name.value == ""){
        alert('목표 전문가를 넣어주세요');
        return;
    }else if(time.value == ""){
        alert('목표 시간을 넣어주세요');
        return;
    }else if(time.value > 24) {
        alert('목표 시간에 24이하의 값을 넣어주세요');
        return;
    }

    resultPage.style.display = "none";
    loadingClock.style.display = "block";

    setTimeout(() => {
        loadingClock.style.display = "none";
        resultName.textContent = expert_name.value;

        const calc_time = parseInt(10000 / time.value);
        resultTime.textContent = calc_time;

        resultPage.style.display = "block";
    }, 2000);
}


goBtn.addEventListener('click', showmodal);

function showmodal(){
    modal.style.display = "flex";
}


closeBtn.addEventListener('click', closemodal);

function closemodal() {
    modal.style.display = "none";
}

shareBtn.addEventListener('click', copyLink);

function copyLink() {
    let url = window.location.href;
    let inputTag = document.createElement('input');
    
    document.body.appendChild(inputTag);
    inputTag.value = url;
    inputTag.select(); //<textarea>요소 또는 <input>텍스트 필드를 포함하는 요소의 모든 텍스트를 선택합니다.
	document.execCommand("copy"); //클립보드에 복사
    document.body.removeChild(inputTag);
    
	alert("링크를 복사했습니다."); 
}
