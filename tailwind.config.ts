import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          "dark-section": "hsl(var(--dark-section))",
          "blue-heading": "hsl(var(--blue-heading))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'card': 'var(--shadow-card)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-right": {
          "0%": { 
            transform: "translateX(100%)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "pendulum-left": {
          "0%, 100%": { 
            transform: "translateX(0) rotate(0deg)" 
          },
          "25%": { 
            transform: "translateX(8px) rotate(2deg)" 
          },
          "75%": { 
            transform: "translateX(-8px) rotate(-2deg)" 
          }
        },
        "pendulum-center": {
          "0%, 100%": { 
            transform: "translateX(0) rotate(0deg)" 
          },
          "25%": { 
            transform: "translateX(-12px) rotate(-3deg)" 
          },
          "75%": { 
            transform: "translateX(12px) rotate(3deg)" 
          }
        },
        "pendulum-right": {
          "0%, 100%": { 
            transform: "translateX(0) rotate(0deg)" 
          },
          "25%": { 
            transform: "translateX(-8px) rotate(-2deg)" 
          },
          "75%": { 
            transform: "translateX(8px) rotate(2deg)" 
          }
        },
        "spin-5x": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(3600deg)" }
        },
        "color-shift": {
          "0%": { 
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))"
          },
          "25%": { 
            backgroundColor: "hsl(262 83% 58% / 0.1)",
            borderColor: "hsl(262 83% 58% / 0.3)"
          },
          "50%": { 
            backgroundColor: "hsl(221 83% 53% / 0.1)",
            borderColor: "hsl(221 83% 53% / 0.3)"
          },
          "75%": { 
            backgroundColor: "hsl(142 76% 36% / 0.1)",
            borderColor: "hsl(142 76% 36% / 0.3)"
          },
          "100%": { 
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 2.6s ease-out forwards",
        "pendulum-left": "pendulum-left 2s ease-in-out infinite",
        "pendulum-center": "pendulum-center 2s ease-in-out infinite 0.2s",
        "pendulum-right": "pendulum-right 2s ease-in-out infinite 0.4s",
        "spin-5x": "spin-5x 1s ease-in-out",
        "color-shift": "color-shift 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
