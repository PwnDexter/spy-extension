import { SearchParamKey } from "../consts";

const searchParams = new URL(window.location.href).searchParams;

const title = searchParams.get(SearchParamKey.TITLE);
const faviconUrl = searchParams.get(SearchParamKey.FAVICON_URL);

if (title) {
  document.title = title;
}
if (faviconUrl) {
  document.querySelector(`link[rel="icon"]`)?.setAttribute("href", faviconUrl);
}

function useReturnUrl() {
  const returnUrl = searchParams.get(SearchParamKey.RETURN_URL) as string;

  if (returnUrl) {
    window.location.href = returnUrl;
  }
}

if (document.visibilityState === "visible") {
  useReturnUrl();
}

document.addEventListener("visibilitychange", () => useReturnUrl());

(async () => {
  try {
    // await updateGeolocation();
  } catch (e) {}

  // sendMessage(BackgroundMessage.SEND_TAB_BACK);
})();