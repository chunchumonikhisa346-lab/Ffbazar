// settings.js

// Theme
export function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
}

export function loadTheme() {
    const theme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", theme);
}

// Language
export function setLanguage(lang) {
    localStorage.setItem("language", lang);
}

export function getLanguage() {
    return localStorage.getItem("language") || "en";
}

// Notification
export function enableNotification() {
    localStorage.setItem("notification", "true");
}

export function disableNotification() {
    localStorage.setItem("notification", "false");
}

export function notificationStatus() {
    return localStorage.getItem("notification") === "true";
}

// Logout
export function logout() {
    localStorage.clear();
    window.location.href = "login.html";
      }
