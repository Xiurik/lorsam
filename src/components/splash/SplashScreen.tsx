import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { lorsamData } from '../../data/lorsam';
import { SPLASH_DURATION_MS } from '../../lib/constants';

interface ISplashScreenProps {
  /** Called when the user chooses to skip the intro. */
  onSkip: () => void;
}

const WORD = 'LORSAM';
const DURATION_S = SPLASH_DURATION_MS / 1000;

const letterVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: 0.2 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/**
 * Full-screen intro splash. Displays the LORSAM wordmark and slogan over a
 * branded gradient with an auto-completing progress bar. Skippable via button.
 * Visibility/timing is owned by {@link useSessionSplash}.
 * @param onSkip Handler to dismiss the splash early.
 */
export function SplashScreen({ onSkip }: ISplashScreenProps): React.JSX.Element {
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Pantalla de bienvenida de LORSAM"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-brand-blue-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {/* Ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-blue-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-brand-red-500/20 blur-3xl"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span aria-hidden className="mb-6 flex overflow-hidden">
          {WORD.split('').map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-6xl font-extrabold tracking-tight sm:text-8xl"
            >
              {char}
            </motion.span>
          ))}
        </span>
        {/* Accessible label for the animated wordmark */}
        <span className="sr-only">LORSAM</span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-balance text-lg font-light text-brand-blue-100 sm:text-2xl"
        >
          {lorsamData.company.slogan}
        </motion.p>

        {/* Progress bar */}
        <div className="mt-10 h-1 w-56 overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full bg-brand-red-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: DURATION_S, ease: 'linear' }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onSkip}
        className="absolute bottom-8 rounded-full border border-white/25 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Saltar intro
      </button>
    </motion.div>
  );
}
