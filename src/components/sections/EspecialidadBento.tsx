import { ArrowRight } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { cn } from '../../lib/cn';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';
import { CTAButton } from '../ui/CTAButton';
import { ERoute } from '../../types';
import ingenieriasImage from '../../assets/ingenierias.png';

/** Grid span per catalog index to build the asymmetric bento layout. */
const SPAN_BY_INDEX: Record<number, string> = {
  0: 'sm:col-span-2',
  4: 'sm:col-span-2',
};

/**
 * "Nuestra Especialidad" as a Bento grid: a featured VRF/TVR narrative tile,
 * a flagship highlight, capability tiles and a national-reach stat tile.
 */
export function EspecialidadBento(): React.JSX.Element {
  const { specialty, company } = lorsamData;

  return (
    <Section id="especialidad" tone="mist" ariaLabel="Nuestra especialidad">
      <SectionHeading
        eyebrow="Nuestra Especialidad"
        title="Ingeniería VRF/TVR a Gran Escala"
        lead="Alta capacidad técnica en el cálculo, ingeniería e instalación de sistemas de volumen de refrigerante variable, apoyados en software de última generación."
      />

      <Reveal className="mt-14">
        <div className="grid auto-rows-[minmax(11rem,1fr)] grid-flow-row-dense gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Featured narrative tile */}
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-brand-blue-950 p-7 text-white sm:col-span-2 sm:row-span-2">
            <img
              src={ingenieriasImage}
              alt=""
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-linear-to-t from-brand-blue-950 via-brand-blue-950/70 to-transparent"
            />
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl text-white">{specialty.headline}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-blue-100">{specialty.description}</p>
            <CTAButton to={ERoute.Servicios} variant="white" size="md" className="mt-6 self-start">
              Conoce el proceso
              <ArrowRight className="h-4 w-4" aria-hidden focusable={false} />
            </CTAButton>
          </article>

          {/* Capability tiles */}
          {specialty.catalog.map((item, i) => (
            <article
              key={item.title}
              className={cn(
                'flex flex-col justify-between rounded-2xl border border-fog bg-white p-6 text-graphite transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200 hover:shadow-lg',
                SPAN_BY_INDEX[i],
              )}
            >
              <Icon name={item.icon} className="h-8 w-8 text-brand-blue-600" strokeWidth={1.75} />
              <div className="mt-4">
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel">{item.detail}</p>
              </div>
            </article>
          ))}

          {/* National-reach stat tile */}
          <article className="flex flex-col justify-center rounded-2xl bg-brand-blue-700 p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="font-display text-4xl font-extrabold">{company.unitsInstalled}+</div>
            <p className="mt-2 text-sm leading-relaxed text-brand-blue-100">
              Unidades instaladas en distintos estados de la {company.regionsCovered}.
            </p>
          </article>
        </div>
      </Reveal>
    </Section>
  );
}
