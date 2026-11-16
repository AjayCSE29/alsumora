import { useId, type ChangeEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type AccessibilityToggleProps = {
  highContrast: boolean;
  onHighContrastChange: (value: boolean) => void;
};

export function AccessibilityToggle({
  highContrast,
  onHighContrastChange,
}: AccessibilityToggleProps) {
  const { translation } = useLanguage();
  const headingId = useId();
  const inputId = useId();
  const descriptionId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onHighContrastChange(event.target.checked);
  };

  return (
    <section className="accessibility" aria-labelledby={headingId}>
      <h2 id={headingId} className="accessibility__heading">
        {translation.accessibility.label}
      </h2>
      <div className="accessibility__control">
        <input
          id={inputId}
          className="accessibility__input sr-only"
          type="checkbox"
          role="switch"
          checked={highContrast}
          onChange={handleChange}
          aria-labelledby={`${headingId} ${descriptionId}`}
        />
        <label className="accessibility__switch" htmlFor={inputId} aria-hidden="true">
          <span className="accessibility__knob" />
        </label>
        <span id={descriptionId} className="sr-only">
          {translation.accessibility.description}
        </span>
      </div>
    </section>
  );
}
