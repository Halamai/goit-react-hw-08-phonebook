window.CMS_MANUAL_INIT = true;

function waitForCMS() {
  if (window.CMS) {
    window.CMS.init({
      config: "/admin/config.yml",
    });
  } else {
    setTimeout(waitForCMS, 50);
  }
}

waitForCMS();
