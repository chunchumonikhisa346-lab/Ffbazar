// notification.js

// Show Success Notification
export function showSuccess(message) {

    const div = document.createElement("div");

    div.className = "notification success";

    div.innerHTML = message;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);

}

// Show Error Notification
export function showError(message) {

    const div = document.createElement("div");

    div.className = "notification error";

    div.innerHTML = message;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);

}

// Show Warning Notification
export function showWarning(message) {

    const div = document.createElement("div");

    div.className = "notification warning";

    div.innerHTML = message;

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);

    }
