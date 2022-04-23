module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors:
      {
        'gtg':'#FBE6C1',
        'ht':'#100402',
        'wg':'#ED6AD6',
        'navbar':'#FBACBE',
        'bggreen':'#B9D2B1',
        'lbrown':'#F1D6B8',
        'tlbrown':'#F1D6B8e1',
        'dbrown':'#A18276',
        'tdbrown':'#A18276e1',
        'mbrown':'#D2B39D',
        
      },
      fontFamily:
      {
        'bungee' : ['Big Shoulders Inline Text','cursive'],
        'bungee-shade' :['Bungee Shade', 'cursive'],
        'bungee-outline' :['Bungee Outline', 'cursive'],
        'bungee-inline' :['Bungee Inline', 'cursive'],

      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-responsive-embed"),

  ],
}

