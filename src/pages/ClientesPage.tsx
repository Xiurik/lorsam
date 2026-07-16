import { Seo } from '../components/seo/Seo';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { lorsamData } from '../data/lorsam';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { Icon } from '../components/ui/Icon';
import { Stat } from '../components/ui/Stat';
import { ContactoCTA } from '../components/sections/ContactoCTA';
import { ERoute } from '../types';
import clientesImage from '../assets/clientes.webp';

/**
 * Clientes page — sectors served, each with its representative clients, plus a
 * national-reach stat band.
 */
export function ClientesPage(): React.JSX.Element {
  const { clients, company } = lorsamData;

  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Clientes]} />
      <PageHeader
        eyebrow="Nuestros Clientes"
        title="Proyectos de Misión Crítica en México"
        lead={clients.intro}
        image={clientesImage}
      />

      <Section tone="blue-deep" ariaLabel="Alcance nacional">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Stat invert value={`${company.unitsInstalled}+`} label="Unidades instaladas" />
          <Stat invert value={String(clients.sectors.length)} label="Sectores atendidos" />
          <Stat invert value={company.yearsExperience} label="Años de experiencia" />
        </div>
      </Section>

      <Section tone="white" ariaLabel="Sectores y clientes">
        <div className="grid gap-6 lg:grid-cols-2">
          {clients.sectors.map((sector, i) => (
            <Reveal key={sector.name} delay={(i % 2) * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-fog bg-white p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-600 text-white">
                    <Icon name={sector.icon} className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-ink">{sector.name}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-steel">{sector.description}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 border-t border-fog pt-5">
                  {sector.clients.map((client) => (
                    <li key={client.name} className="flex flex-col">
                      <span className="text-sm font-semibold text-brand-blue-700">{client.name}</span>
                      <span className="text-sm text-steel">{client.detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactoCTA />
    </>
  );
}
