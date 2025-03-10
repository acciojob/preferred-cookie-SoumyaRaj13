//your JS code here. If required.
// Function to set CSS variables based on cookie values
function applyPreferences() {
  const fontsize = getCookie("fontsize") || "16px";
  const fontcolor = getCookie("fontcolor") || "#000000";
  
  document.documentElement.style.setProperty("--fontsize", fontsize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolor);
  
  document.getElementById("fontsize").value = parseInt(fontsize);
  document.getElementById("fontcolor").value = fontcolor;
}

// Function to get cookie value
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return "";
}

// Function to set cookies
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

// Event listener for saving preferences
document.getElementById("saveBtn").addEventListener("click", function () {
  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;
  
  setCookie("fontsize", fontsize, 30);
  setCookie("fontcolor", fontcolor, 30);
  
  applyPreferences();
});

// Apply stored preferences on page load
applyPreferences();
