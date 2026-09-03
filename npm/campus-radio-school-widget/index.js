export const CAMPUS_RADIO_SITE = 'https://radio.hn.cn';
export const WIDGET_SCRIPT_URL = `${CAMPUS_RADIO_SITE}/widget.js`;
export const WIDGET_DOCS_URL = `${CAMPUS_RADIO_SITE}/widget.html`;

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function normalizeText(value, field) {
  const text = String(value ?? '').trim();
  if (!text) throw new TypeError(`${field} is required`);
  return text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function validateSchoolSlug(school) {
  const slug = normalizeText(school, 'school');
  if (!SLUG_RE.test(slug)) {
    throw new TypeError('school must be a lowercase public-school slug using letters, numbers and hyphens');
  }
  return slug;
}

export function schoolPageUrl(school) {
  const slug = validateSchoolSlug(school);
  return `${CAMPUS_RADIO_SITE}/school/${encodeURIComponent(slug)}/`;
}

export function buildEmbedMarkup({ school, schoolName, buttonText = '' }) {
  const slug = validateSchoolSlug(school);
  const name = normalizeText(schoolName, 'schoolName');
  const href = schoolPageUrl(slug);
  const safeName = escapeHtml(name);
  const button = String(buttonText ?? '').trim();
  const buttonAttr = button ? `\n  button-text="${escapeHtml(button)}"` : '';

  return `<campus-radio\n  school="${slug}"\n  school-name="${safeName}"${buttonAttr}>\n  <a href="${href}">\n    ${safeName}广播站在线点歌｜校园点歌台\n  </a>\n</campus-radio>\n<script src="${WIDGET_SCRIPT_URL}" defer></script>`;
}

export function createCampusRadioElement(
  { school, schoolName, buttonText = '' },
  documentRef = globalThis.document,
) {
  if (!documentRef?.createElement) {
    throw new TypeError('createCampusRadioElement requires a browser-like document');
  }

  const slug = validateSchoolSlug(school);
  const name = normalizeText(schoolName, 'schoolName');
  const element = documentRef.createElement('campus-radio');
  element.setAttribute('school', slug);
  element.setAttribute('school-name', name);
  if (String(buttonText ?? '').trim()) {
    element.setAttribute('button-text', String(buttonText).trim());
  }

  const fallback = documentRef.createElement('a');
  fallback.href = schoolPageUrl(slug);
  fallback.textContent = `${name}广播站在线点歌｜校园点歌台`;
  element.appendChild(fallback);
  return element;
}

let loaderPromise;

export function loadCampusRadioWidget(documentRef = globalThis.document) {
  if (!documentRef?.createElement || !documentRef?.head) {
    return Promise.reject(new TypeError('loadCampusRadioWidget requires a browser-like document'));
  }

  if (globalThis.customElements?.get?.('campus-radio')) {
    return Promise.resolve();
  }

  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    const existing = Array.from(documentRef.scripts || []).find((script) => script.src === WIDGET_SCRIPT_URL);
    const script = existing || documentRef.createElement('script');

    const onLoad = () => resolve();
    const onError = () => {
      loaderPromise = undefined;
      reject(new Error(`Failed to load ${WIDGET_SCRIPT_URL}`));
    };

    script.addEventListener('load', onLoad, { once: true });
    script.addEventListener('error', onError, { once: true });

    if (!existing) {
      script.src = WIDGET_SCRIPT_URL;
      script.defer = true;
      script.dataset.campusRadioWidget = 'true';
      documentRef.head.appendChild(script);
    } else if (globalThis.customElements?.get?.('campus-radio')) {
      resolve();
    }
  });

  return loaderPromise;
}
