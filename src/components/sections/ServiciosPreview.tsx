import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { CTAButton } from '../ui/CTAButton';
import { ServiciosGrid } from './ServiciosGrid';
import { ERoute } from '../../types';

/**
 * Home funnel preview of the services offering, linking to the full page.
 */
export function ServiciosPreview(): React.JSX.Element {
  return (
    <Section id="servicios" tone="mist" ariaLabel="Nuestros servicios">
      <SectionHeading
        eyebrow="Nuestros Servicios"
        title="Cobertura Integral del Ciclo de Vida"
        lead="Desde la asesoría y la ingeniería hasta la instalación, el mantenimiento y las pólizas: un solo proveedor para toda tu operación térmica."
      />

      <div className="mt-14">
        <ServiciosGrid />
      </div>

      <div className="mt-12 flex justify-center">
        <CTAButton to={ERoute.Servicios} variant="secondary" size="lg">
          Ver todos los servicios
          <ArrowRight className="h-5 w-5" aria-hidden focusable={false} />
        </CTAButton>
      </div>
    </Section>
  );
}
