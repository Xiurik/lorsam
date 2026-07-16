import { lorsamData } from '../../data/lorsam';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { FeatureCard } from '../ui/FeatureCard';

/**
 * "Nuestros Valores" — icon cards derived from the values dataset.
 */
export function ValoresCards(): React.JSX.Element {
  const { values } = lorsamData;

  return (
    <Section id="valores" tone="white" ariaLabel="Nuestros valores">
      <SectionHeading
        eyebrow="Nuestros Valores"
        title="Principios Que Sostienen Cada Proyecto"
        lead="La cultura técnica y ética que garantiza certidumbre a nuestros clientes."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {values.map((value, i) => (
          <Reveal key={value.title} delay={i * 0.05} className="h-full">
            <FeatureCard
              icon={value.icon}
              title={value.title}
              description={value.description}
              accent={i % 2 === 0 ? 'blue' : 'red'}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
