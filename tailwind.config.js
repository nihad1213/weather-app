module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "weather-primary": "#00668A",
                "weather-secondary": "#004E71",
            }
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        screens: {
            'sm': '640px',
            'md': '768px',
    },   
    plugins: [],
    }
}
