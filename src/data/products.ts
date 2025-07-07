import { Product } from '../types';

// Real product data based on images
const products: Product[] = [
  {
    id: '1',
    name: '3 Leches',
    price: 4200,
    shortDescription: 'Delicioso pastel de tres leches',
    description: 'Suave bizcocho empapado en una mezcla de tres tipos de leche (evaporada, condensada y crema) y cubierto con una ligera capa de crema batida. Un clásico postre latinoamericano con la perfecta combinación de dulzura y humedad.',
    category: 'Postres',
    image: '/Products/3 leches 4200.JPG',
    featured: true
  },
  {
    id: '2',
    name: 'Berlín',
    price: 1600,
    shortDescription: 'Clásico berlín relleno de crema pastelera',
    description: 'Suave y esponjoso donut tradicional alemán, frito y espolvoreado con azúcar, relleno de una deliciosa crema pastelera casera de vainilla. Perfecto para disfrutar en cualquier momento del día.',
    category: 'Bollería',
    image: '/Products/berlin 1600.JPG',
    featured: true
  },
  {
    id: '3',
    name: 'Cachito',
    price: 2400,
    shortDescription: 'Tradicional cachito chileno relleno de jamón y queso',
    description: 'Pan de masa brioche en forma de medialuna, horneado a la perfección y relleno con jamón y queso. Este clásico chileno es ideal para un desayuno o merienda sustanciosa con un equilibrio perfecto entre lo salado y lo suave del pan.',
    category: 'Panes',
    image: '/Products/cachito 2400.JPG'
  },
  {
    id: '4',
    name: 'Empanada de Camarón y Queso',
    price: 3200,
    shortDescription: 'Empanada rellena de camarones y queso derretido',
    description: 'Empanada artesanal con masa artesanal rellena de camarones salteados con especias y queso Gauda. Una combinación perfecta entre los sabores del mar y la cremosidad del queso, con una textura crujiente por fuera y suave por dentro.',
    category: 'Empanadas',
    image: '/Products/camaron queso 3200.JPG',
    featured: true
  },
  {
    id: '5',
    name: 'Empanada de Champiñón y Queso',
    price: 3200,
    shortDescription: 'Empanada rellena de champiñones y queso',
    description: 'Empanada artesanal con fina masa rellena de champiñones salteados y queso fundido. Una opción vegetariana llena de sabor, con los champiñones aportando un toque terroso y jugoso que complementa la cremosidad del queso.',
    category: 'Empanadas',
    image: '/Products/champiñon queso 3200.JPG'
  },
  {
    id: '6',
    name: 'Chilenito',
    price: 1200,
    shortDescription: 'Dulce tradicional chileno con manjar',
    description: 'Típico dulce chileno compuesto por dos capas de masa de galleta y relleno de manjar (dulce de leche). Cubierto con un fino glaseado de azúcar. Una pequeña delicia que representa lo mejor de la repostería tradicional chilena.',
    category: 'Dulces',
    image: '/Products/chilenito 1200.JPG',
    featured: true
  },
  {
    id: '7',
    name: 'Delicias',
    price: 1300,
    shortDescription: 'Pequeñas delicias de masa dulce',
    description: 'Pequeños bocados dulces elaborados con masa suave y esponjosa, horneados hasta alcanzar un tono dorado perfecto. Ideal para acompañar el té o café de la tarde, estas delicias ofrecen el balance perfecto entre dulzura y suavidad.',
    category: 'Dulces',
    image: '/Products/delicias 1300.JPG'
  },
  {
    id: '8',
    name: 'Kuchen de Manzana',
    price: 3400,
    shortDescription: 'Tradicional kuchen alemán de manzana',
    description: 'Tradicional tarta alemana con base de masa quebrada, relleno de manzanas en rodajas caramelizadas y cubierta de una mezcla de crema y canela. Horneado hasta conseguir una textura perfecta, es un postre equilibrado entre dulce y ácido.',
    category: 'Tartas',
    image: '/Products/kucheten de manzana  3400.JPG',
    featured: true
  },
  {
    id: '9',
    name: 'Medialuna Rellena',
    price: 1600,
    shortDescription: 'Medialuna de hojaldre rellena',
    description: 'Tradicional medialuna de hojaldre con un delicioso relleno dulce, horneada hasta conseguir un color dorado y una textura crujiente. Perfecto equilibrio entre la masa hojaldrada y su relleno, ideal para cualquier momento del día.',
    category: 'Bollería',
    image: '/Products/medialuna rellena 1600.JPG'
  },
  {
    id: '10',
    name: 'Mendozino',
    price: 1900,
    shortDescription: 'Dulce tradicional argentino',
    description: 'Delicioso dulce inspirado en la tradición mendocina argentina, elaborado con masa de hojaldre crujiente y un suave relleno. Su forma característica y sabor equilibrado lo convierten en un acompañamiento perfecto para el mate o café.',
    category: 'Dulces',
    image: '/Products/mendozino 1900.JPG'
  },
  {
    id: '11',
    name: 'Milhojas',
    price: 4500,
    shortDescription: 'Clásico pastel de milhojas con manjar',
    description: 'Tradicional postre elaborado con múltiples capas de hojaldre crujiente intercaladas con cremoso manjar (dulce de leche). Cubierto con azúcar glacé, ofrece una experiencia única donde la textura crujiente contrasta con la suavidad del manjar.',
    category: 'Postres',
    image: '/Products/milhojas 4500.JPG',
    featured: true
  },
  {
    id: '12',
    name: 'Milkshake de Frutilla',
    price: 5900,
    shortDescription: 'Refrescante batido de frutilla',
    description: 'Refrescante y cremoso batido elaborado con frutillas (fresas) frescas, helado artesanal de vainilla y leche. Coronado con crema batida y frutillas frescas, es la opción perfecta para refrescarse con un toque de dulzura natural.',
    category: 'Bebidas',
    image: '/Products/milkshake de frutilla 5900.JPG'
  },
  {
    id: '13',
    name: 'Milkshake Oreo',
    price: 5900,
    shortDescription: 'Cremoso batido con galletas Oreo',
    description: 'Indulgente batido preparado con helado de vainilla, leche y galletas Oreo trituradas. Coronado con crema batida, trozos de galleta Oreo y salsa de chocolate. Una combinación irresistible para los amantes de las galletas y el chocolate.',
    category: 'Bebidas',
    image: '/Products/milkshake oreo 5900 .JPG'
  },
  {
    id: '14',
    name: 'Minito',
    price: 1200,
    shortDescription: 'Pequeño bocado dulce tradicional',
    description: 'Pequeño dulce tradicional chileno elaborado con masa suave y un toque de dulzor. Su tamaño compacto lo hace perfecto para acompañar un café o té. A pesar de su pequeño tamaño, ofrece un sabor completo y satisfactorio.',
    category: 'Dulces',
    image: '/Products/minito 1200.JPG'
  },
  {
    id: '15',
    name: 'Empanada Napolitana',
    price: 2900,
    shortDescription: 'Empanada con sabores italianos',
    description: 'Empanada artesanal inspirada en los sabores italianos, rellena de queso Gauda, tomate, orégano y jamón. La masa crujiente contrasta con el relleno jugoso y fundido, creando una experiencia gastronómica que combina lo mejor de la comida chilena e italiana.',
    category: 'Empanadas',
    image: '/Products/napolitana 2900.JPG',
    featured: true
  },
  {
    id: '16',
    name: 'Pie de Limón',
    price: 3500,
    shortDescription: 'Clásico pie con crema de limón y merengue',
    description: 'Tradicional pie con base de masa quebrada, relleno de cremosa y ácida crema de limón, coronado con esponjoso merengue flambeado. El contraste entre la acidez del limón y la dulzura del merengue crea un postre equilibrado y refrescante.',
    category: 'Tartas',
    image: '/Products/pie de limón 3500.JPG'
  },
  {
    id: '17',
    name: 'Pie de Maracuyá',
    price: 3500,
    shortDescription: 'Exótico pie con crema de maracuyá y merengue',
    description: 'Exquisito pie con base de galleta, relleno de cremosa preparación de maracuyá (fruta de la pasión) y coronado con suave merengue flambeado. El sabor tropical y ligeramente ácido del maracuyá crea un postre refrescante y sofisticado.',
    category: 'Tartas',
    image: '/Products/pie de maracuya 3500.JPG',
    featured: true
  },
  {
    id: '18',
    name: 'Empanada de Pino Merquén',
    price: 2900,
    shortDescription: 'Tradicional empanada chilena con merquén',
    description: 'Empanada tradicional chilena rellena de pino (carne picada, cebolla, huevo y aceitunas) con un toque de merquén, un condimento típico chileno a base de ají ahumado. El merquén agrega un sabor ahumado y un ligero picante que realza todos los sabores del relleno.',
    category: 'Empanadas',
    image: '/Products/pino merquen 2900.JPG'
  },
  {
    id: '19',
    name: 'Empanada de Pino Tradicional',
    price: 2900,
    shortDescription: 'Clásica empanada chilena de pino',
    description: 'Auténtica empanada chilena con el tradicional relleno de pino: carne picada salteada con cebolla, condimentada con comino y ají, aceituna y un cuarto de huevo duro. La masa se hornea hasta conseguir un dorado perfecto, resultando en uno de los platos más emblemáticos de Chile.',
    category: 'Empanadas',
    image: '/Products/pino tradicional 2900.JPG',
    featured: true
  },
  {
    id: '20',
    name: 'Empanada de Pollo al Ajillo',
    price: 2900,
    shortDescription: 'Empanada rellena de pollo al ajillo',
    description: 'Sabrosa empanada con relleno de pollo desmenuzado, salteado con ajo fresco y especias. La masa crujiente envuelve el jugoso relleno de pollo impregnado con el aromático sabor del ajo, creando una combinación irresistible de texturas y sabores.',
    category: 'Empanadas',
    image: '/Products/pollo al ajillo 2900.JPG'
  },
  {
    id: '21',
    name: 'Empanada de Pollo Champiñón a la Crema',
    price: 3200,
    shortDescription: 'Empanada con relleno cremoso de pollo y champiñones',
    description: 'Exquisita empanada con un cremoso relleno de pollo y champiñones salteados en salsa bechamel. La combinación del suave pollo, los champiñones y la salsa cremosa, envueltos en una masa hojaldrada, crea una experiencia gastronómica sofisticada.',
    category: 'Empanadas',
    image: '/Products/pollo champiñon a la crema 3200.JPG'
  },
  {
    id: '22',
    name: 'Empanada de Queso Masa de Hoja',
    price: 2900,
    shortDescription: 'Empanada de hojaldre rellena de queso',
    description: 'Clásica empanada elaborada con fina masa de hojaldre y rellena generosamente de queso que se derrite durante el horneado. Al morder, la combinación de la masa crujiente con el queso fundido crea una experiencia irresistible para los amantes del queso.',
    category: 'Empanadas',
    image: '/Products/queso masa de hoja 2900.JPG',
    featured: true
  },
  {
    id: '23',
    name: 'Red Velvet',
    price: 4500,
    shortDescription: 'Elegante pastel rojo con frosting de queso crema',
    description: 'Sofisticado pastel de color rojo intenso con un suave sabor a chocolate, cubierto con un cremoso frosting de queso crema. Su textura húmeda y esponjosa, combinada con la cremosidad del frosting, crean un postre elegante y perfectamente equilibrado.',
    category: 'Postres',
    image: '/Products/red velvel 4500.JPG'
  },
  {
    id: '24',
    name: 'Trozo de Amor',
    price: 4500,
    shortDescription: 'Exquisito pastel de chocolate con relleno especial',
    description: 'Delicado pastel de chocolate con capas de bizcocho húmedo y un especial relleno cremoso. Su nombre refleja la dedicación y cariño con que se elabora este postre, pensado para los verdaderos amantes del chocolate y los sabores intensos.',
    category: 'Postres',
    image: '/Products/trozo de amor 4500.JPG'
  },
  {
    id: '25',
    name: 'Trufas',
    price: 1300,
    shortDescription: 'Irresistibles bombones de chocolate',
    description: 'Exquisitas trufas artesanales elaboradas con el mejor chocolate y rellenas de ganache. Cubiertas con cacao en polvo, estas pequeñas delicias ofrecen una experiencia intensa de chocolate que se deshace en la boca, perfectas para los momentos más especiales.',
    category: 'Dulces',
    image: '/Products/trufas 1300.JPG'
  },
  {
    id: '26',
    name: 'Empanada Vegetariana de Espinaca',
    price: 3200,
    shortDescription: 'Empanada vegetariana con espinacas y queso',
    description: 'Empanada vegetariana elaborada con masa artesanal y rellena de una mezcla de espinacas salteadas con cebolla y queso. Una opción saludable que no sacrifica sabor, con el perfecto equilibrio entre los vegetales y la cremosidad del queso.',
    category: 'Empanadas',
    image: '/Products/vegetariana de espinaca 3200.JPG'
  }
];

// Get all products except Tentaciones
export const getAllProducts = (): Product[] => {
  return products;
};

// Get Tentaciones products - only empanadas
export const getTentacionesProducts = (): Product[] => {
  return products.filter(product => product.category === 'Empanadas');
};

// Get featured products
export const getFeaturedProducts = (limit = 4): Product[] => {
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

// Get product by id
export const getProductById = (id: string): Product | null => {
  return products.find(product => product.id === id) || null;
};

// Get related products (same category, different id)
export const getRelatedProducts = (id: string, category: string, limit = 4): Product[] => {
  return products
    .filter(product => product.id !== id && product.category === category)
    .slice(0, limit);
};