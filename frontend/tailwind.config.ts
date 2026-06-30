import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ─── Palette ─── */
      colors: {
        // Backgrounds — warm-black, not dead-black
        background: '#060608',
        surface: '#0b0b0f',
        'surface-elevated': '#121218',
        'surface-raised': '#18181f',

        // Primary — institutional crimson
        primary: '#b91c1c',
        'primary-light': '#dc2626',
        'primary-dark': '#991b1b',
        'primary-muted': '#7f1d1d',

        // Accent — deep tech blue
        accent: '#1d4ed8',
        'accent-light': '#3b82f6',
        'accent-muted': '#1e3a5f',

        // Gold — institutional prestige
        gold: '#b8860b',
        'gold-light': '#d4a017',
        'gold-muted': '#92700c',

        // Neutrals — warm grays
        'neutral-50': '#fafaf9',
        'neutral-100': '#f5f5f4',
        'neutral-200': '#e7e5e4',
        'neutral-300': '#d6d3d1',
        'neutral-400': '#a8a29e',
        'neutral-500': '#78716c',
        'neutral-600': '#57534e',
        'neutral-700': '#44403c',
        'neutral-800': '#292524',
        'neutral-900': '#1c1917',

        // Semantic
        muted: '#78716c',
        'muted-light': '#a8a29e',
        border: '#1e1e24',
        'border-light': '#2a2a32',
      },

      /* ─── Typography ─── */
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Fluid sizes: clamp(min, preferred-vw, max) — scale smoothly across all viewports,
        // no jump at breakpoints, never overflow small screens.
        'display-2xl': ['clamp(2.75rem, 5vw + 1.5rem, 7rem)', { lineHeight: '1.04', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-xl': ['clamp(2.5rem, 4.5vw + 1.25rem, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.25rem, 3.5vw + 1.25rem, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'heading-1': ['clamp(1.75rem, 2.2vw + 1.15rem, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-2': ['clamp(1.5rem, 1.6vw + 1.05rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'heading-3': ['clamp(1.25rem, 0.9vw + 1rem, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-4': ['clamp(1.125rem, 0.5vw + 1rem, 1.25rem)', { lineHeight: '1.35', letterSpacing: '-0.005em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.015em' }],
        'overline': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        'micro': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },

      /* ─── Spacing ─── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '42rem',
        'prose': '65ch',
        'wide': '84rem',
      },

      /* ─── Borders ─── */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* ─── Shadows — layered for depth ─── */
      boxShadow: {
        'glow': '0 0 60px rgba(185, 28, 28, 0.06), 0 0 120px rgba(185, 28, 28, 0.03)',
        'glow-lg': '0 0 80px rgba(185, 28, 28, 0.1), 0 0 160px rgba(185, 28, 28, 0.05)',
        'glow-accent': '0 0 60px rgba(29, 78, 216, 0.06), 0 0 120px rgba(29, 78, 216, 0.03)',
        'glow-gold': '0 0 60px rgba(184, 134, 11, 0.06), 0 0 120px rgba(184, 134, 11, 0.03)',
        'card': '0 1px 2px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2), 0 12px 48px rgba(0,0,0,0.15)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.04)',
        'elevated': '0 2px 8px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)',
      },

      /* ─── Gradients ─── */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #b91c1c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #92700c 0%, #d4a017 50%, #b8860b 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0b0b0f 0%, #060608 100%)',
        'gradient-surface': 'linear-gradient(180deg, #121218 0%, #0b0b0f 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(185, 28, 28, 0.06) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(29, 78, 216, 0.04) 0%, transparent 50%), radial-gradient(at 50% 80%, rgba(184, 134, 11, 0.03) 0%, transparent 50%)',
      },

      /* ─── Animations ─── */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'line-draw': 'lineDraw 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        lineDraw: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },

      /* ─── Transitions ─── */
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

export default config
