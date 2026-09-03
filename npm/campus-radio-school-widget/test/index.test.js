import test from 'node:test';
import assert from 'node:assert/strict';

import {
  CAMPUS_RADIO_SITE,
  WIDGET_DOCS_URL,
  WIDGET_SCRIPT_URL,
  buildEmbedMarkup,
  schoolPageUrl,
  validateSchoolSlug,
} from '../index.js';

test('exports official 校园点歌台 URLs', () => {
  assert.equal(CAMPUS_RADIO_SITE, 'https://radio.hn.cn');
  assert.equal(WIDGET_SCRIPT_URL, 'https://radio.hn.cn/widget.js');
  assert.equal(WIDGET_DOCS_URL, 'https://radio.hn.cn/widget.html');
});

test('validates public school slugs', () => {
  assert.equal(validateSchoolSlug('luohe-vocational-technical-college'), 'luohe-vocational-technical-college');
  assert.throws(() => validateSchoolSlug('Luohe School'), TypeError);
  assert.throws(() => validateSchoolSlug('../admin'), TypeError);
  assert.throws(() => validateSchoolSlug(''), TypeError);
});

test('builds the canonical public school page URL', () => {
  assert.equal(
    schoolPageUrl('luohe-vocational-technical-college'),
    'https://radio.hn.cn/school/luohe-vocational-technical-college/',
  );
});

test('builds crawlable fallback markup and escapes display text', () => {
  const markup = buildEmbedMarkup({
    school: 'luohe-vocational-technical-college',
    schoolName: '测试 <广播站> & "校园"',
    buttonText: '去点歌 "现在"',
  });

  assert.match(markup, /<campus-radio/);
  assert.match(markup, /school="luohe-vocational-technical-college"/);
  assert.match(markup, /https:\/\/radio\.hn\.cn\/school\/luohe-vocational-technical-college\//);
  assert.match(markup, /https:\/\/radio\.hn\.cn\/widget\.js/);
  assert.match(markup, /测试 &lt;广播站&gt; &amp; &quot;校园&quot;/);
  assert.match(markup, /button-text="去点歌 &quot;现在&quot;"/);
  assert.doesNotMatch(markup, /测试 <广播站>/);
});
