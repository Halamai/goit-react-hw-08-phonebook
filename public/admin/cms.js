window.CMS_MANUAL_INIT = true;

function waitForCMS() {
  if (window.CMS && document.getElementById("nc-root")) {
    window.CMS.init({
      config: "/admin/config.yml",
    });
  } else {
    setTimeout(waitForCMS, 50);
  }
}

waitForCMS();
