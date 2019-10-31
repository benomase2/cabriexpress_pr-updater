const notification = document.getElementById('electron-notification');
const message = document.getElementById('electron-message');
const restartButton = document.getElementById('electron-restart-button');
const downloadButton = document.getElementById('electron-download-button');
const closeButton = document.getElementById('electron-close-button');

restartButton.innerText = Translator.translate('electron_button_restart');
downloadButton.innerText = Translator.translate('electron_button_download');
closeButton.innerText = Translator.translate('electron_button_close');

let electronVersionID;

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
    ipcRenderer.removeAllListeners('app_version');
    electronVersionID = arg.version;
});

ipcRenderer.on('update_available', () => {
    ipcRenderer.removeAllListeners('update_available');
    message.innerText = Translator.translate("electron_update_available");
    notification.classList.remove('hidden');
    downloadButton.classList.remove('hidden');
});

ipcRenderer.on('update_downloaded', () => {
    ipcRenderer.removeAllListeners('update_downloaded');
    message.innerText = Translator.translate("electron_update_downloaded");
    restartButton.classList.remove('hidden');
    notification.classList.remove('hidden');
});

ipcRenderer.on('update_error', ()=>{
    ipcRenderer.removeAllListeners('update_error');
    message.innerText = Translator.translate("electron_update_error");
    downloadButton.classList.remove('hidden');
});

function closeNotification() {
    notification.classList.add('hidden');
}

function restartApp() {
    ipcRenderer.send('restart_app');
}

function downloadUpdate() {
    ipcRenderer.send('download_update');
    downloadButton.classList.add('hidden');
    message.innerText = Translator.translate('electron_update_downloading');
}