import { Seo } from '../components/seo/Seo';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { lorsamData } from '../data/lorsam';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Icon } from '../components/ui/Icon';
import { Stat } from '../components/ui/Stat';
import { ContactoCTA } from '../components/sections/ContactoCTA';
import { ERoute } from '../types';
import historiaImage from '../assets/historia.png';

/**
 * Historia page — narrative intro, a vertical milestone timeline, the technical
 * evolution grid and headline stats.
 */
export function HistoriaPage(): React.JSX.Element {
  const { history, company } = lorsamData;

  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Historia]} />
      <PageHeader eyebrow="Nuestra Historia" title={history.headline} lead={history.intro[0]} image={historiaImage} />

      <Section tone="white" ariaLabel="Reseña histórica">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-graphite">
          {history.intro.slice(1).map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="mist" ariaLabel="Línea de tiempo">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Cuatro Décadas de Evolución"
          lead="De un taller local a líderes regionales en climatización y refrigeración."
        />

        <ol className="mx-auto mt-14 max-w-3xl space-y-2 border-l-2 border-brand-blue-200 pl-0">
          {history.timeline.map((event, i) => (
            <li key={event.name} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-2.25 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-red-500 ring-4 ring-mist"
              />
              <Reveal delay={i * 0.05}>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-2xl font-extrabold text-brand-blue-700">{event.year || '—'}</span>
                  <span className="rounded-full bg-brand-blue-100 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand-blue-700">
                    {event.stage}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-ink">{event.name}</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-steel">{event.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white" ariaLabel="Evolución técnica">
        <SectionHeading
          eyebrow="Nuestra Evolución Técnica"
          title="Dominio de Sistemas Críticos"
          lead="Con los años expandimos nuestra especialización para dominar la ingeniería, instalación y mantenimiento de sistemas cada vez más exigentes."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {history.technicalEvolution.map((cap, i) => (
            <Reveal key={cap.category} delay={(i % 3) * 0.06} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-fog bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                  <Icon name={cap.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{cap.category}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">{cap.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="blue-deep" ariaLabel="Cifras">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Stat invert value={company.yearsExperience} label="Años de experiencia" />
          <Stat invert value={`${company.unitsInstalled}+`} label="Unidades VRF/TVR instaladas" />
          <Stat invert value={String(company.foundedYear)} label="Año de fundación" />
        </div>
      </Section>

      <ContactoCTA />
    </>
  );
}
