const rawUrl = 'https://api.github.com/users/';
const xhr = new XMLHttpRequest();

const submitBtn = document.querySelector('.submit-btn');
const UserNameFild = document.getElementById('githubUsername');
const githubForm = document.getElementById('githubForm');
const errorMessageContainer = document.getElementById('errorMsg');

submitBtn.addEventListener('click', verifyUsername);
githubForm.addEventListener('submit', function (event) {
    event.preventDefault();
    verifyUsername();
});

UserNameFild.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        event.preventDefault();
    }
});

let responseText; // Declare a global variable to store responseText

function verifyUsername() {
    const UserNameCurrentValue = document.getElementById('githubUsername').value;

    if (UserNameCurrentValue === '') {
        errorMessage('Fill the input field');
    } else {
        IsUserNameExist(UserNameCurrentValue);
    }
}

function errorMessage(message) {
    errorMessageContainer.textContent = message;

    setTimeout(() => {
        errorMessageContainer.textContent = '';
    }, 10000);


}

function IsUserNameExist(userNameCurrentValue) {
    const url = rawUrl + userNameCurrentValue;
    // errorMessage('')
    showLoading();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            hideLoading();
            if (xhr.status === 200) {
                const newData = JSON.parse(xhr.responseText);
                responseText = newData; // Store responseText in the global variable
                localStorage.setItem('responseText', JSON.stringify(responseText));
                window.location.href = './cards/card.html';
            } else if (xhr.status === 404) {
                errorMessage('User does not exist');
            } else {
                errorMessage('Server problem, try again later');
            }
        }
    };
    xhr.send();
}

// Loading Section 
const loadingElement = document.getElementById('loading');
loadingElement.style.display = 'none';

function showLoading() {
    loadingElement.style.display = 'block';
    errorMessage('')
}

function hideLoading() {
    loadingElement.style.display = 'none';
}
