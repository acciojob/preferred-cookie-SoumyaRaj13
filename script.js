//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.querySelector("form");

  // Function to set font preferences from cookies
  function applyPreferences() {
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");
    
    if (savedFontSize) {
      document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
      fontSizeInput.value = savedFontSize;
    }
    if (savedFontColor) {
      document.documentElement.style.setProperty("--fontcolor", savedFontColor);
      fontColorInput.value = savedFontColor;
    }
  }

  // Function to get cookie value by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return "";
  }

  // Function to set cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    
    const selectedFontSize = fontSizeInput.value;
    const selectedFontColor = fontColorInput.value;
    
    setCookie("fontsize", selectedFontSize, 365);
    setCookie("fontcolor", selectedFontColor, 365);
    
    applyPreferences();
  });

  // Apply stored preferences on page load
  applyPreferences();
});
