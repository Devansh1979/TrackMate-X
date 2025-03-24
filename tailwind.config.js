module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
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
        primary: {
          DEFAULT: "#3B82F6", // Bright blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1E293B", // Deep slate
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#06B6D4", // Cyan
          foreground: "#FFFFFF",
        },
        highlight: {
          DEFAULT: "#8B5CF6", // Purple
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0)" },
          "50%": { transform: "translate(10px, -10px)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        // ... keep existing code (other keyframes)
      },
      animation: {
        wave: "wave 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        ripple: "ripple 3s ease-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        // ... keep existing code (other animations)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
