const disableExperimentalUI = (hostname, param) => {
  const url = new URL(window.location.href);
  if (!url.hostname.endsWith(hostname)) {
    return;
  }

  const value = url.searchParams.get(param);
  if (value === null || value === "false") {
    return;
  }

  url.searchParams.set(param, "false");
  window.location.replace(url.toString());
};

disableExperimentalUI("udemy.com", "udfrontends");
