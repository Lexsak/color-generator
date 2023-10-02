// inputs
const viewFingerSign = document.getElementById("view-finger-sign");
const statusLocation = document.getElementById("status-location");
const saveToggleMail = document.getElementById("save-toggle-mail");
const namePasswordCalendar = document.getElementById("name-password-calendar");
let dotChat = document.getElementById("dot-chat");

//hex to rgba
function hexToRgba(hex, alpha = 1) {
    const match = hex.match(/\w\w/g);
    const [r, g, b] = match.map((item) => parseInt(item, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// Colors change
const viewProfile = document.querySelector(".view-profile");
const fingerIcon = document.getElementById("finger-icon");
const signIng = document.getElementById("sign-in");
const col = document.getElementById("col");
viewFingerSign.oninput = () => {
    viewProfile.style.backgroundColor = viewFingerSign.value;
    fingerIcon.style.backgroundColor = hexToRgba(viewFingerSign.value, 0.2);
    fingerIcon.style.color = viewFingerSign.value;
    signIng.style.color = viewFingerSign.value;
    col.style.color = viewFingerSign.value;
}

const changeStatus = document.querySelector(".change-status");
const locationOutline = document.getElementById("location-outline");
const or = document.getElementById("or");
statusLocation.oninput = () => {
    changeStatus.style.backgroundColor = hexToRgba(statusLocation.value, 0.2);
    changeStatus.style.color = statusLocation.value;
    locationOutline.style.backgroundColor = hexToRgba(statusLocation.value, 0.2);
    locationOutline.style.color = statusLocation.value;
    or.style.color = statusLocation.value;
}

const saveChanges = document.querySelector(".save-changes");
const toggleBtnTrue = document.querySelector(".toggle-btn-true");
const mailOutline = document.getElementById("mail-outline");
const gene = document.getElementById("gene");
saveToggleMail.oninput = () => {
    saveChanges.style.backgroundColor = saveToggleMail.value;
    toggleBtnTrue.style.backgroundColor = saveToggleMail.value;
    mailOutline.style.backgroundColor = hexToRgba(saveToggleMail.value, 0.2);
    mailOutline.style.color = saveToggleMail.value;
    gene.style.color = saveToggleMail.value;
}

const name = document.querySelector(".name");
const passwordInput = document.querySelector(".password-input");
const calendar = document.getElementById("calendar");
const ra = document.getElementById("ra");
namePasswordCalendar.oninput = () => {
    name.style.backgroundColor = hexToRgba(namePasswordCalendar.value, 0.3);
    name.style.border.color = namePasswordCalendar.value;
    passwordInput.style.backgroundColor = hexToRgba(namePasswordCalendar.value, 0.3);
    passwordInput.style.border.color = namePasswordCalendar.value;
    calendar.style.backgroundColor = hexToRgba(namePasswordCalendar.value, 0.2);
    calendar.style.color = namePasswordCalendar.value;
    ra.style.color = namePasswordCalendar.value;
}

const dot = document.querySelector(".dot");
const chat = document.getElementById("chat");
const tor = document.getElementById("tor");
function dotChatChange() {
    chat.style.backgroundColor = hexToRgba(dotChat.value, 0.2);
    chat.style.color = dotChat.value;
    dot.style.backgroundColor = dotChat.value;
    tor.style.color = dotChat.value;
}


