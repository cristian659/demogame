import IMAGEN1 from '../../assets/imagenesL/Perro.png';
import IMAGEN2 from '../../assets/imagenesL/Gato.png';
import IMAGEN3 from '../../assets/imagenesL/Pájaro.png';
import IMAGEN4 from '../../assets/imagenesL/Pez.png';

export default [
  {
    img: IMAGEN1,
    name: 'Perro',
  },
  {
    img: IMAGEN2,
    name: 'gato',
  },
  {
    img: IMAGEN3,
    name: 'pajaro',
  },
  {
    img: IMAGEN4,
    name: 'pez',
  },
].sort(() => 0.5 - Math.random() * 40);
