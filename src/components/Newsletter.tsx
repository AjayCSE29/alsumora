import { useId, useState, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmissionStatus = 'success' | 'error' | null;

export function Newsletter() {
  const { translation } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const emailInputId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = EMAIL_PATTERN.test(email.trim());
    setStatus(isValid ? 'success' : 'error');
    if (isValid) {
      setEmail('');
    }
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <h2 id="newsletter-heading" className="newsletter__heading">
        {translation.newsletter.heading}
      </h2>
      <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor={emailInputId}>
          {translation.newsletter.emailLabel}
        </label>
        <input
          id={emailInputId}
          className={`newsletter__input${status === 'error' ? ' has-error' : ''}`}
          type="email"
          autoComplete="email"
          placeholder={translation.newsletter.placeholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === 'error') {
              setStatus(null);
            }
          }}
        />
        <button className="newsletter__confirm" type="submit">
          {translation.newsletter.confirm}
        </button>
      </form>
      {status && (
        <p
          className={`newsletter__message newsletter__message--${status}`}
          role="status"
          aria-live="polite"
        >
          {status === 'success' ? translation.newsletter.success : translation.newsletter.error}
        </p>
      )}
    </section>
  );
}
