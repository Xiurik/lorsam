import { ArrowRight } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { CTAButton } from '../ui/CTAButton';
import { ERoute } from '../../types';
import evolucionImage from '../../assets/ourstory.png';

/**
 * Home teaser for the company history: headline, first/last milestones and a
 * "40+ años" stat, linking to the full timeline page.
 */
export function HistoriaPreview(): React.JSX.Element {
  const { history, company } = lorsamData;
  const first = history.timeline[0];
  const last = history.timeline[history.timeline.length - 1];

  return (
    <Section id="historia" tone="blue" ariaLabel="Nuestra historia">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-brand-red-600">Nuestra Historia</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{history.headline}</h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">{history.intro[0]}</p>

          <ol className="mt-8 space-y-4">
            {[first, last].map((event) => (
              <li key={event.name} className="flex gap-4">
                <span className="mt-1 inline-flex h-3 w-3 shrink-0 rounded-full bg-brand-red-500 ring-4 ring-brand-red-100" />
                <div>
                  <div className="text-md font-bold text-brand-blue-700">{event.year || event.stage}</div>
                  <div className="text-md text-graphite">{event.name}</div>
                </div>
              </li>
            ))}
          </ol>

          <CTAButton to={ERoute.Historia} variant="secondary" size="lg" className="mt-8">
            Conoce nuestra trayectoria
            <ArrowRight className="h-5 w-5" aria-hidden focusable={false} />
          </CTAButton>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <img
              src={evolucionImage}
              alt="Instalación industrial de sistemas de climatización"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-blue-700 px-7 py-5 text-white shadow-lg">
              <div className="font-display text-4xl font-extrabold">{company.yearsExperience}</div>
              <div className="text-xs font-medium uppercase tracking-wide text-brand-blue-100">
                Años de herencia técnica
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
