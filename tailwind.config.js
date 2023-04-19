module.exports = {
    mode: "jit",
    content: ["./templates/**/*.html", "./templates/**/*.twig"],
    safelist: [],
    theme: {
        fontFamily: {
            sans: ["Titillium Web, sans-serif"]
        },
        extend: {
            colors: {
                'custom-blue': '#1e3358',
                'custom-orange': '#f15a29',
            },
            spacing: {
              '700': '700px',
              '128': '128px',
            }
        },
    },
    variants: {
        extend: {},
    },
};
