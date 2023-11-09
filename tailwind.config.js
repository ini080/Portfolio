module.exports = {
    purge: {content: ['./public/**/*.html', './src/**/*.vue']},
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                '2xs': ['0.65rem', '0.8rem'],
            },
        },
        screens: {
            'sm': {'min': '320px', 'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px'},
          },
    },
    variants: {
        extend: {
            scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
            backgroundColor: ['active'],
            backgroundOpacity: ['active'],
        },
    },
    plugins: [],
}

