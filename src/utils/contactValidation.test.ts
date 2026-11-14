import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildMailtoHref,
  buildWhatsAppUrl,
  normalizeIndianPhone,
  validateContactForm,
} from './contactValidation';

test('normalizeIndianPhone handles +91, 0 prefix, and spacing', () => {
  assert.equal(normalizeIndianPhone('87674 61499'), '8767461499');
  assert.equal(normalizeIndianPhone('+91 8767461499'), '8767461499');
  assert.equal(normalizeIndianPhone('08767461499'), '8767461499');
});

test('validateContactForm flags missing required fields', () => {
  const result = validateContactForm({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.message);
});

test('validateContactForm validates email, Indian mobile number, and message length', () => {
  const invalid = validateContactForm({
    fullName: 'A',
    email: 'invalid-email',
    phone: '12345',
    message: 'Hi',
  });
  assert.equal(invalid.isValid, false);
  assert.equal(invalid.errors.fullName, 'Full name must be at least 2 characters.');
  assert.equal(invalid.errors.email, 'Please enter a valid email address.');
  assert.equal(invalid.errors.phone, 'Please enter a valid 10-digit Indian mobile number.');
  assert.equal(
    invalid.errors.message,
    'Please write at least 10 characters so our team can assist you.'
  );
});

test('validateContactForm passes for valid Ratnagiri customer submission', () => {
  const valid = validateContactForm({
    fullName: 'Soham Mhadaye',
    email: 'soham@example.com',
    phone: '+91 98234 56789',
    message: 'I would like to list our local restaurant on UnboxRTN.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
  assert.equal(valid.normalizedPhone, '9823456789');
});

test('buildWhatsAppUrl and buildMailtoHref construct encoded action links', () => {
  const wa = buildWhatsAppUrl('918767461499', {
    fullName: 'Rohan Joshi',
    email: 'rohan@example.com',
    phone: '8767461499',
    message: 'Need support with pre-order scheduling.',
  });
  assert.ok(wa.startsWith('https://wa.me/918767461499?text='));
  assert.ok(wa.includes(encodeURIComponent('Rohan Joshi')));

  const mailto = buildMailtoHref('unboxrtn@gmail.com', {
    fullName: 'Rohan Joshi',
    email: 'rohan@example.com',
    phone: '8767461499',
    message: 'Need support with pre-order scheduling.',
  });
  assert.ok(mailto.startsWith('mailto:unboxrtn@gmail.com?subject='));
  assert.ok(mailto.includes(encodeURIComponent('Rohan Joshi')));
});
