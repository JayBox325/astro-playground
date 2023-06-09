/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

            // Calculate REM sizes to match design: https://nekocalc.com/px-to-rem-converter
            fontSize: {
                xxs: '0.625rem',    // 10px
                xs: '0.75rem',      // 12px
                sm: '0.875rem',     // 14px
                base: '1rem',       // 16px
                lg: '1.125rem',     // 18px
                xl: '1.25rem',      // 20px
                '2xl': '1.5rem',    // 24px
                '3xl': '1.875rem',  // 30px
                '4xl': '2.25rem',   // 36px
                '5xl': '3rem',      // 48px
                '6xl': '3.375rem',  // 54px
                '7xl': '4.5rem',    // 72px
                '8xl': '6rem',      // 96px
                '9xl': '8rem',      // 128px
                '10xl': '9rem',     // 144px
                '11xl': '10rem',    // 160px
            },

            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '1/2': '50%',
                '1/3': '33.33333%',
                '2/3': '66.66667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.66667%',
                '2/6': '33.33333%',
                '3/6': '50%',
                '4/6': '66.66667%',
                '5/6': '83.33333%',
                '1/12': '8.33333%',
                '2/12': '16.66667%',
                '3/12': '25%',
                '4/12': '33.33333%',
                '5/12': '41.66667%',
                '6/12': '50%',
                '7/12': '58.33333%',
                '8/12': '66.66667%',
                '9/12': '75%',
                '10/12': '83.33333%',
                '11/12': '91.66667%',
                '13/12': '108.33333%',
                '14/12': '116.66667%',

                '1/24': '4.166666666666667%',
                '2/24': '8.3333333333%',
                '3/24': '12.5%',
                '4/24': '16.6666666667%',
                '5/24': '20.8333333333%',
                '6/24': '25%',
                '7/24': '29.1666666667%',
                '8/24': '33.3333333333%',
                '9/24': '37.5%',
                '10/24': '41.6666666667%',
                '11/24': '45.8333333333%',
                '12/24': '50%',
                '13/24': '54.1666666667%',
                '14/24': '58.3333333333%',
                '15/24': '62.5%',
                '16/24': '66.6666666667%',
                '17/24': '70.8333333333%',
                '18/24': '75%',
                '19/24': '79.1666666667%',
                '20/24': '83.3333333333%',
                '21/24': '87.5%',
                '22/24': '91.6666666667%',
                '23/24': '95.8333333333%',
                '24/24': '100%',
                
                'full': '100%',
            },

            screens: {
                'sm': '420px',
                'md': '600px',
                'lg': '900px',
                'xl': '1200px',
                '2xl': '1728px',
            },
		},
	},
	plugins: [],
}
