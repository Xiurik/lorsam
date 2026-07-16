import { Check } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { lorsamData } from '../data/lorsam';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Icon } from '../components/ui/Icon';
import { ServiciosGrid } from '../components/sections/ServiciosGrid';
import { ContactoCTA } from '../components/sections/ContactoCTA';
import { ERoute } from '../types';
import serviciosImage from '../assets/servicios.webp';

/**
 * Servicios page — full service catalog, technical coverage checklist and the
 * VRF/TVR specialty catalog.
 */
export function ServiciosPage(): React.JSX.Element {
  const { servicesEquipment, specialty } = lorsamData;

  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Servicios]} />
      <PageHeader
        eyebrow="Servicios"
        title="Ingeniería, Instalación y Mantenimiento HVAC/R"
        lead="Cubrimos todo el ciclo de vida de tus sistemas de climatización y refrigeración con técnicos certificados y estricto cumplimiento de presupuesto."
        image={serviciosImage}
      />

      <Section tone="white" ariaLabel="Catálogo de servicios">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Seis Servicios, Un Solo Proveedor"
          lead="De la asesoría inicial a las pólizas de mantenimiento integral."
        />
        <div className="mt-14">
          <ServiciosGrid />
        </div>
      </Section>

      <Section tone="mist" ariaLabel="Especialización y cobertura técnica">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Especialización y Cobertura Técnica"
              title="Proyectos de Cualquier Magnitud y Complejidad"
              lead="Somos expertos en el cálculo, ingeniería, instalación y mantenimiento de una amplia variedad de equipos."
            />
            <ul className="mt-8 space-y-3">
              {servicesEquipment.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue-600 text-white">
                    <Check className="h-4 w-4" aria-hidden focusable={false} />
                  </span>
                  <span className="text-graphite">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-ink">Catálogo de especialidades y equipos</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {specialty.catalog.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 0.06} className="h-full">
                  <div className="flex h-full gap-4 rounded-xl border border-fog bg-white p-5">
                    <Icon name={item.icon} className="h-7 w-7 shrink-0 text-brand-blue-600" strokeWidth={1.75} />
                    <div>
                      <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
                      <p className="mt-1 text-sm text-steel">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ContactoCTA />
    </>
  );
}
