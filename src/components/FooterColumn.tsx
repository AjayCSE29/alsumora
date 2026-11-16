import { useId, useState } from 'react';
import { ChevronIcon } from './icons';

type FooterColumnProps = {
  heading: string;
  links: Array<{ label: string; href: string }>;
};

export function FooterColumn({ heading, links }: FooterColumnProps) {
  const contentId = useId();
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="footer-column">
      <h3 className="footer-column__heading-wrapper">
        <button
          type="button"
          className="footer-column__heading"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((value) => !value)}
        >
          <span>{heading}</span>
          <ChevronIcon
            className={`footer-column__chevron${expanded ? '' : ' is-collapsed'}`}
          />
        </button>
      </h3>
      <ul id={contentId} className={`footer-column__links${expanded ? '' : ' is-collapsed'}`}>
        {links.map((link) => (
          <li key={link.label}>
            <a className="footer-column__link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
