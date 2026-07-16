import { Phone, Mail, Navigation } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { FacebookIcon, WhatsAppIcon, MapsPinIcon } from '../components/ui/BrandIcons';
import { CopyButton } from '../components/ui/CopyButton';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { lorsamData } from '../data/lorsam';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { telHref, waHref, mailHref, formatPhone } from '../lib/format';
import { ERoute } from '../types';
import contactoImage from '../assets/contacto.png';

/** Google Maps directions URL for the office address. */
function mapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Contacto page — call, WhatsApp, email, social and address channels. Fully
 * static (tel/wa.me/mailto/maps links); no backend or form submission.
 */
export function ContactoPage(): React.JSX.Element {
  const { contact } = lorsamData;
  const waMessage = 'Hola LORSAM, me interesa una cotización para un proyecto HVAC/R.';

  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Contacto]} />
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos de Tu Proyecto"
        lead="Estamos listos para brindarte asesoría técnica y una cotización sin compromiso. Elige el canal que prefieras."
        image={contactoImage}
      />

      <Section tone="mist" ariaLabel="Canales de contacto">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Phones */}
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-fog bg-white p-7 shadow-sm">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                <Phone className="h-6 w-6" aria-hidden focusable={false} />
              </span>
              <h2 className="text-lg font-bold text-ink">Teléfonos de Oficina</h2>
              <ul className="mt-4 space-y-2">
                {contact.office.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="flex items-center gap-3 rounded-xl border border-fog px-3 py-2.5 transition-colors hover:border-brand-blue-200 hover:bg-brand-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-500"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-700">
                        <Phone className="h-4 w-4" aria-hidden focusable={false} />
                      </span>
                      <span className="font-semibold text-ink">{formatPhone(phone)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={0.06} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-fog bg-white p-7 shadow-sm">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <h2 className="text-lg font-bold text-ink">WhatsApp</h2>
              <ul className="mt-4 space-y-2">
                {contact.whatsapp.map((phone) => (
                  <li key={phone}>
                    <a
                      href={waHref(phone, waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-fog px-3 py-2.5 transition-colors hover:border-green-200 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <WhatsAppIcon className="h-4 w-4" />
                      </span>
                      <span className="font-semibold text-ink">{formatPhone(phone)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Email + social */}
          <Reveal delay={0.12} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-fog bg-white p-7 shadow-sm">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                <Mail className="h-6 w-6" aria-hidden focusable={false} />
              </span>
              <h2 className="text-lg font-bold text-ink">Correo</h2>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-xl border border-fog px-3 py-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-700">
                    <Mail className="h-4 w-4" aria-hidden focusable={false} />
                  </span>
                  <a
                    href={mailHref(contact.email, 'Cotización de proyecto HVAC/R')}
                    className="break-all font-semibold text-ink transition-colors hover:text-brand-blue-700"
                  >
                    {contact.email}
                  </a>
                  <CopyButton value={contact.email} label="correo" className="ml-auto" />
                </div>
              </div>
              <h2 className="mt-3 text-lg font-bold text-ink">Redes</h2>
              <div className="mt-4 space-y-2">
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-fog px-3 py-2.5 transition-colors hover:border-brand-blue-200 hover:bg-brand-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-500"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-700">
                    <FacebookIcon className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-ink">Facebook</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Address */}
        <Reveal delay={0.1}>
          <article className="mt-6 flex flex-col gap-6 rounded-2xl border border-fog bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue-100">
                <MapsPinIcon className="h-8 w-8" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-ink">Dirección</h2>
                <address className="mt-1 not-italic leading-relaxed text-steel">
                  {contact.address.street}
                  <br />
                  {contact.address.neighborhood}, {contact.address.city}, {contact.address.state}
                </address>
              </div>
            </div>
            <a
              href={mapsHref(contact.address.full)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-500"
            >
              <Navigation className="h-4 w-4" aria-hidden focusable={false} />
              Cómo llegar
            </a>
          </article>
        </Reveal>
      </Section>
    </>
  );
}
