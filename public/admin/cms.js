window.CMS_MANUAL_INIT = true;

function loadCMS() {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/netlify-cms@^2.10.192/dist/netlify-cms.js";
  script.onload = () => {
    // Коли CMS завантажено і елемент існує — ініціалізуємо
    const checkReady = () => {
      if (window.CMS && document.getElementById("nc-root")) {
        window.CMS.init({ config: "/admin/config.yml" });
      } else {
        setTimeout(checkReady, 50);
      }
    };
    checkReady();
  };
  document.head.appendChild(script);
}

loadCMS();
