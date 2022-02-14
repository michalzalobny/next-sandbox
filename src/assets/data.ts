import img1 from 'assets/images/1.jpg';
import img2 from 'assets/images/2.jpg';
import img3 from 'assets/images/3.jpg';
import img4 from 'assets/images/4.jpg';
import img5 from 'assets/images/5.jpg';
import img6 from 'assets/images/6.jpg';
import img7 from 'assets/images/7.jpg';
import img8 from 'assets/images/8.jpg';

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
      'Cmodo elit aterdiet dui accumsd euismod nisi porta. Mi bibendum neque egestas congue quisque egestas diam in. Aliqpiscing commodo elit at imperdiet dui accumsan. In egestas erat imperdiet sed euismod nispiscing commodo elit at imperdiet dui accumsan. In egestas erat imperdiet sed euismod nisuam eleifend mi in nulla. Tortor pretium viverra suspendisse',
  },
  {
    imageSrc: img3.src,
    description:
      'Cursus sit amet dictum sit amet. Proin sagittis nisl rhoncus mattis. In vitae turpis massa ',
  },
  // {
  //   imageSrc: img4.src,
  //   description:
  //     'Tempor incididunt ut labore t ut labore et dolopiscing commodo elit at imperdiet dui accumset dolopiscing commodo elit at imperdiet dui accumsan. In egesna etiam tempor.',
  // },
  // {
  //   imageSrc: img5.src,
  //   description:
  //     'Adipiscing commodo elit aterdiet dui acccing commodo elit aterdiet dui accumsd euismod umsd euismod nisi porta. Mi bibencing commodo elit aterdiet dui accumsd euismod dum neque egestas congue quisque egestas diam in. Aliqpiscing commodo elit at imperdiet dui accumsan. In egestas erat imperdiet sed euismod nispiscing commodo elit at imperdiet dui accumsan. In egestas erat imperdiet sed euismod nisuam eleifend mi in nulla. Tortor pretium viverra suspendisse',
  // },
  // {
  //   imageSrc: img6.src,
  //   description:
  //     'Cursus sit amet dictum sit amet. Proin sagittis nisl rhoncus mattdictum sit amet. Proin sagittis niis. In vitae turpis massa ',
  // },
  // {
  //   imageSrc: img7.src,
  //   description:
  //     'Oncididunt ut labore t ut labore et dolopiscing commodo elit at imperdiet dui accumset dolre t ut labore et dolopiscing commodo elit at re t ut labore et dolopiscing commodo elit at opiscing commodo elit at imperdiet dui accumsan. In egesna etiam tempor.',
  // },
  // {
  //   imageSrc: img8.src,
  //   description:
  //     'Fictum sit amet. Proin sagittis nisl rhoncus maempor incididunt ut labore t ut labore et dolopiscing commodo elit at imperdiet dui accumset dolre t ut labore et dolopiscing commodo elit at re t ut labore et dolopiscing commodo elit at opiscing commodo elit at imperdiet dui accumsan. In egesna etiam tempor.',
  // },
];
