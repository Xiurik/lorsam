import { ArrowRight } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';
import { CTAButton } from '../ui/CTAButton';
import { ERoute } from '../../types';

/**
 * Home preview of the sectors served, as a compact icon grid linking to the
 * full clients page.
 */
export function ClientesPreview(): React.JSX.Element {
  const { clients } = lorsamData;

  return (
    <Section id="clientes" tone="white" ariaLabel="Sectores y clientes">
      <SectionHeading
        eyebrow="Nuestros Clientes"
        title="Confianza en Sectores de Misión Crítica"
        lead={clients.intro}
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {clients.sectors.map((sector, i) => (
          <Reveal key={sector.name} delay={(i % 4) * 0.05} className="h-full">
            <div className="flex h-full items-start gap-3 rounded-xl border border-fog bg-mist p-5 transition-colors hover:border-brand-blue-200 hover:bg-white">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue-600 text-white">
                <Icon name={sector.icon} className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">{sector.name}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <CTAButton to={ERoute.Clientes} variant="secondary" size="lg">
          Ver proyectos y clientes
          <ArrowRight className="h-5 w-5" aria-hidden focusable={false} />
        </CTAButton>
      </div>
    </Section>
  );
}
