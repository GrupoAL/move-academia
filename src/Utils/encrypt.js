const strToBuf = (str) => new TextEncoder().encode(str);
const bufToStr = (buf) => new TextDecoder().decode(buf);
const bufToBase64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const base64ToBuf = (b64) =>
  Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)).buffer;

const SECRET_KEY = "minha-chave-secreta-super-segura";

async function getKey() {
  return crypto.subtle.importKey(
    "raw",
    strToBuf(SECRET_KEY.padEnd(32, "0")),
    "AES-GCM",
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptUserData(userData) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey();
  const encoded = strToBuf(JSON.stringify(userData));

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded
  );

  return JSON.stringify({
    iv: bufToBase64(iv),
    data: bufToBase64(encrypted),
  });
}

export async function decryptUserData(encryptedString) {
  const { iv, data } = JSON.parse(encryptedString);
  const key = await getKey();

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBuf(iv) },
    key,
    base64ToBuf(data)
  );

  return JSON.parse(bufToStr(decrypted));
}
