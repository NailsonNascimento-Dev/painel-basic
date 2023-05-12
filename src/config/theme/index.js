import color from 'color';

const fontColor = '#000';
const themeColor = '#4397D7';

//cor do tema
export default {
  global: {
    fontColor,
    brand: themeColor,
    background: {
      '0%': '#fff',
      '100%': '#fff',
      x1: '0',
      y1: '0',
      x2: '100%',
      y2: '0',
    },
    text: {
      color: '#000',

      // dark: color(fontColor).alpha(0.5).rgbString(),
      // light: color(fontColor).alpha(0.5).rgbString(),
    },
  },

  //barra superior com detalhes produto "nome e etc"
  topbar: {
    color: '#000',
    background: 'transparent',
  },
  slider: {
    // minimumTrackTintColor: fontColor,
    minimumTrackTintColor: "#00f", //cor da barra minimo
    maximumTrackTintColor: "#c00", //cor da barra minimo
    thumbTintColor: "#0f0", // cor do ponto do slider
  },

  fontColor: color(fontColor).alpha(0.5).rgbString(),
  iconBackColor: color(fontColor).alpha(0.15).rgbString(),
  activeFontColor: "#00f", //cor do botão ativo
  iconBgColor: color(fontColor).alpha(0.15).rgbString(),
  tabBgColor: color(fontColor).alpha(0.04).rgbString(),
  sceneBgColor: color(fontColor).alpha(0.1).rgbString(),
  // btnBgColor: color(fontColor).alpha(0.72).rgbString(),

 
  
};
