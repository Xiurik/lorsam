import { Phone, Contact } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { Container } from '../ui/Container';
import { CTAButton } from '../ui/CTAButton';
import { WhatsAppIcon } from '../ui/BrandIcons';
import { telHref, waHref, formatPhone } from '../../lib/format';
import { ERoute } from '../../types';

/**
 * Closing call-to-action band. Reused as the funnel end on Home and at the
 * foot of detail pages. Offers call, WhatsApp and quote actions.
 */
export function ContactoCTA(): React.JSX.Element {
  const { contact } = lorsamData;
  const message = 'Hola LORSAM, me interesa una cotización para un proyecto HVAC/R.';

  return (
    <section aria-label="Contáctanos" className="relative isolate overflow-hidden bg-brand-blue-900">
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-brand-blue-900 to-brand-blue-700" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-red-500/20 blur-3xl"
      />

      <Container className="py-16 text-center sm:py-20">
        <h2 className="text-balance font-display text-2xl font-extrabold text-white sm:text-4xl">
          ¿ Listo Para Optimizar Tu Climatización ?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-brand-blue-100">
          Solicita asesoría técnica y una cotización sin compromiso. Respondemos rápido por teléfono o WhatsApp.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href={waHref(contact.whatsapp[0], message)} external variant="green" size="lg">
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </CTAButton>
          <CTAButton href={telHref(contact.office[0])} variant="white" size="lg">
            <Phone className="h-5 w-5" aria-hidden focusable={false} />
            {formatPhone(contact.office[0])}
          </CTAButton>
          <CTAButton to={ERoute.Contacto} variant="ghost-invert" size="lg">
            <Contact className="h-5 w-5" aria-hidden focusable={false} />
            Ver todos los contactos
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
