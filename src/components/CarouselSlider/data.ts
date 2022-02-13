import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

interface Item {
  imageSrc: string;
  description: string;
}

export const items: Item[] = [
  {
    imageSrc: img1.src,
    description:
      'Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Metus vulputate eu scelerisque felis im',
  },
  {
    imageSrc: img2.src,
    description:
      'Adipiscing commodo elit aterdiet dui accumsd euismod nisi porta. Mi bibendum neque egestas congue quisque egestas diam in. Aliqpiscing commodo elit at imperdiet dui accumsan. In egestas erat imperdiet sed euismod nispiscing commodo elit at imperdiet dui accumsan. In egestas erat imperdiet sed euismod nisuam eleifend mi in nulla. Tortor pretium viverra suspendisse',
  },
  {
    imageSrc: img3.src,
    description:
      'Cursus sit amet dictum sit amet. Proin sagittis nisl rhoncus mattis. In vitae turpis massa ',
  },
  {
    imageSrc: img4.src,
    description:
      'Tempor incididunt ut labore t ut labore et dolopiscing commodo elit at imperdiet dui accumset dolopiscing commodo elit at imperdiet dui accumsan. In egesna etiam tempor.',
  },
];
