// current file
const fileName = window.location.pathname.slice(7, -12);
let currentFileId
for (let i = 0; i < worksList.length; i++) {
  if(worksList[i]['fileName'] == fileName) {
    currentFileId = i;
  }
}

// thumbnail
const thumbnail = `<img src="${worksList[currentFileId]['thumb']}"></img>`;
const thumbnailPosition = document.getElementById('thumbnail');
thumbnailPosition.insertAdjacentHTML('afterbegin', thumbnail);

// work name
const workName = worksList[currentFileId]['workName'];
const workNamePosition = document.getElementById('work-name');
workNamePosition.insertAdjacentHTML('afterbegin', workName);

// language list 
let languageList = '';
for (let i = 0; i < worksList[currentFileId]['lang'].length; i++) {
  languageList += `<li>${worksList[currentFileId]['lang'][i]}</li>`;
}
const languageListPosition = document.getElementById('language-list');
languageListPosition.insertAdjacentHTML('afterbegin', languageList);

// demo link
const demoLink = `<a href="${worksList[currentFileId]['demoLink']}" target="_blank">demo</a>`;
const demoLinkPosition = document.getElementById('demo-link');
demoLinkPosition.insertAdjacentHTML('afterbegin', demoLink);

// download link
const downloadLink = `<a href="${worksList[currentFileId]['downloadLink']}" target="_blank">github</a>`;
const downloadLinkPosition = document.getElementById('download-link');
downloadLinkPosition.insertAdjacentHTML('afterbegin', downloadLink);

// main content
const mainContent = worksList[currentFileId]['mainContent'];
const mainContentPosition = document.getElementById('main-content');
mainContentPosition.insertAdjacentHTML('afterbegin', mainContent);