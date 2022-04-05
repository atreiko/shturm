// import { ma01, ma02, ma03 } from '../assets/images/marines/index'
import { p1, p2, p3, p4, p5, p6, p7 } from '../../assets/images/photos'

export const largePosts = [
  {
    title: 'Про нас',
    img: p1,
    description: 'Бригада морської піхоти Української держави',
    class: 'item__1',
    path: '/#',
    alt: 'about'
  },
  {
    title: 'Наші військові',
    img: p2,
    description: '137-й батальйон морської піхоти',
    class: 'item__2',
    path: '/#',
    alt: 'army'
  },
  {
    title: `Вічна пам'ять`,
    img: p3,
    description: 'Старший сержант Іванов',
    class: 'item__3',
    path: '/#',
    alt: 'valor'
  }
]

export const smallPosts = [
  {
    title: 'Маріуполь',
    img: p4,
    description: 'Зенітно-ракетний дивізіон',
    class: 'item__4',
    path: '/#',
    alt: 'mariupol'
  },
  {
    title: 'Трофеї',
    img: p5,
    description: 'Батальон Штурм захопив техніку ворога',
    class: 'item__5',
    path: '/#',
    alt: 'trophy'
  },
  {
    title: 'ЗСУ',
    img: p6,
    description: 'ЗСУ звільнили два населенних пунтка на Чернігівщині',
    class: 'item__6',
    path: '/#',
    alt: 'zsu'
  },
  {
    title: 'Ірпінь',
    img: p7,
    description: 'Тривають бої в Ірпіні',
    class: 'item__7',
    path: '/#',
    alt: 'irpin'
  },
]

console.log(
  [...largePosts, ...smallPosts]
);