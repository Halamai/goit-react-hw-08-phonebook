window.CMS_MANUAL_INIT = true;

document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/netlify-cms@^2.10.192/dist/netlify-cms.js";
  script.onload = () => {
    CMS.init({ config: "/admin/config.yml" });
  };
  document.body.appendChild(script);
});
