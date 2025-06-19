import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'morph': 'morph 3s ease-in-out infinite',
				'grain': 'grain 8s steps(10) infinite',
				'gradient-shift': 'gradient-shift 20s ease-in-out infinite',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)' 
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)' 
					}
				},
				'morph': {
					'0%, 100%': { borderRadius: '50%' },
					'50%': { borderRadius: '10%' }
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -5%)' },
					'20%': { transform: 'translate(-10%, 5%)' },
					'30%': { transform: 'translate(5%, -10%)' },
					'40%': { transform: 'translate(-5%, 15%)' },
					'50%': { transform: 'translate(-10%, 5%)' },
					'60%': { transform: 'translate(15%, 0%)' },
					'70%': { transform: 'translate(0%, 15%)' },
					'80%': { transform: 'translate(-15%, 10%)' },
					'90%': { transform: 'translate(10%, 5%)' }
				},
				'gradient-shift': {
					'0%, 100%': { 
						'background-position': '0% 50%',
						'filter': 'hue-rotate(0deg)'
					},
					'25%': { 
						'background-position': '100% 50%',
						'filter': 'hue-rotate(90deg)'
					},
					'50%': { 
						'background-position': '50% 100%',
						'filter': 'hue-rotate(180deg)'
					},
					'75%': { 
						'background-position': '50% 0%',
						'filter': 'hue-rotate(270deg)'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
