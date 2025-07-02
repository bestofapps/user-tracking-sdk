import FingerprintJS from '@fingerprintjs/fingerprintjs';

let cliqId = getOrCreateCliqId();

export function getCliqId() {
  return cliqId;
}

export async function trackEvent(eventType, metadata = {}) {
  const fp = await FingerprintJS.load();
  const fingerprint = await fp.get();

  const payload = {
    timestamp: new Date().toISOString(),
    cliq_id: cliqId,
    fingerprint: fingerprint.visitorId,
    eventType,
    ...metadata
  };

  navigator.sendBeacon("/track", JSON.stringify(payload));
}

function getOrCreateCliqId() {
  let cid = getCookie("cliq_id");
  if (!cid) {
    cid = crypto.randomUUID();
    document.cookie = "cliq_id=" + cid + "; SameSite=Lax; Secure";
  }
  return cid;
}

function getCookie(name) {
  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
