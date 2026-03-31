// ── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  href: string
  label: string
}

export const menuLinks: MenuLink[] = [
  { href: '#catalog',  label: 'Прокат' },
  { href: '#tracks',   label: 'Трассы' },
  { href: '#training', label: 'Обучение' },
  { href: '#events',   label: 'События' },
  { href: '#prices',   label: 'Цены' },
  { href: '#contacts', label: 'Контакты' },
]

// ── Preview tiles ────────────────────────────────────────────────────────────

export interface PreviewItem {
  id: string
  href: string
  title: string
  desc: string
}

export const previewSections: PreviewItem[] = [
  {
    id:    'catalog',
    href:  '#catalog',
    title: 'Прокат техники',
    desc:  'Эндуро и квадроциклы для любого уровня — от новичка до профи',
  },
  {
    id:    'tracks',
    href:  '#tracks',
    title: 'Трассы и маршруты',
    desc:  'Три трассы разной сложности в лесу, горах и на кросс-полигоне',
  },
  {
    id:    'training',
    href:  '#training',
    title: 'Обучение',
    desc:  'Персональные и групповые тренировки с сертифицированными инструкторами',
  },
  {
    id:    'events',
    href:  '#events',
    title: 'Соревнования',
    desc:  'Открытые кубки, фестивали и марафоны на протяжении всего сезона',
  },
  {
    id:    'gallery',
    href:  '#gallery',
    title: 'Галерея',
    desc:  'Фото и видео с наших выездов и соревнований',
  },
  {
    id:    'reviews',
    href:  '#reviews',
    title: 'Отзывы',
    desc:  'Более 1 500 довольных клиентов за семь лет работы',
  },
]

// ── Catalog ──────────────────────────────────────────────────────────────────

export interface BikeCard {
  id: string
  title: string
  category: string
  level: string
  power: string
  weight: string
  engine: string
  priceHour: string
  priceDay: string
  desc: string
  badge: string | null
}

export const bikeCards: BikeCard[] = [
  {
    id:        'pitbike',
    title:     'Питбайк',
    category:  'Питбайк',
    level:     'Начинающий',
    power:     '14 л.с.',
    weight:    '78 кг',
    engine:    '125 см³',
    priceHour: '1 500 ₽',
    priceDay:  '7 000 ₽/день',
    desc:      'Небольшой манёвренный мотоцикл для обучения базовым навыкам езды. Подходит подросткам и взрослым новичкам.',
    badge:     null,
  },
  {
    id:        'enduro-250',
    title:     'Эндуро 250',
    category:  'Эндуро',
    level:     'Новичок',
    power:     '28 л.с.',
    weight:    '108 кг',
    engine:    '250 см³',
    priceHour: '2 500 ₽',
    priceDay:  '12 000 ₽/день',
    desc:      'Лёгкий и прощающий байк для первых выездов. Быстро учит технике и даёт уверенность на любом рельефе.',
    badge:     'Хит',
  },
  {
    id:        'husqvarna-450',
    title:     'Husqvarna 450',
    category:  'Эндуро',
    level:     'Профи',
    power:     '63 л.с.',
    weight:    '110 кг',
    engine:    '450 см³',
    priceHour: '3 800 ₽',
    priceDay:  '19 000 ₽/день',
    desc:      'Легендарный шведский эндуро с гоночной ДНК. Максимум скорости и точности управления на любом рельефе.',
    badge:     'Топ',
  },
  {
    id:        'atv-adult',
    title:     'Квадроцикл взрослый',
    category:  'Квадроцикл',
    level:     'Новичок+',
    power:     '44 л.с.',
    weight:    '310 кг',
    engine:    '570 см³',
    priceHour: '4 000 ₽',
    priceDay:  '18 000 ₽/день',
    desc:      'Мощный и устойчивый квадроцикл для маршрутов любой длины. Отличная проходимость на любом покрытии.',
    badge:     'Семейный',
  },
  {
    id:        'atv-kids',
    title:     'Квадроцикл детский',
    category:  'Квадроцикл',
    level:     'Дети 6–14 лет',
    power:     '6 л.с.',
    weight:    '120 кг',
    engine:    '125 см³',
    priceHour: '1 200 ₽',
    priceDay:  '5 500 ₽/день',
    desc:      'Безопасный квадроцикл с ограничителем скорости для юных гонщиков. Первое знакомство с внедорожной техникой.',
    badge:     'Детский',
  },
]

// ── Tracks ───────────────────────────────────────────────────────────────────

export type DiffClass = 'diff-easy' | 'diff-medium' | 'diff-hard'

export interface Track {
  id: string
  title: string
  difficulty: string
  diffClass: DiffClass
  length: string
  time: string
  desc: string
}

export const tracks: Track[] = [
  {
    id:         'forest',
    title:      'Лесной трек',
    difficulty: 'Лёгкий',
    diffClass:  'diff-easy',
    length:     '12 км',
    time:       '1–2 часа',
    desc:       'Мягкие грунтовые дороги через сосновый лес. Идеален для первых выездов и спокойных прогулок.',
  },
  {
    id:         'mountain',
    title:      'Горный маршрут',
    difficulty: 'Средний',
    diffClass:  'diff-medium',
    length:     '24 км',
    time:       '2–4 часа',
    desc:       'Перепады высот, каменистые подъёмы и технические спуски. Потребует навыков и физической подготовки.',
  },
  {
    id:         'cross',
    title:      'Кросс-полигон',
    difficulty: 'Профи',
    diffClass:  'diff-hard',
    length:     '5 км',
    time:       'Открытый',
    desc:       'Прыжки, трамплины, глубокая колея. Только для опытных райдеров с подготовленной техникой.',
  },
]

// ── Events ───────────────────────────────────────────────────────────────────

export interface Event {
  id: string
  title: string
  day: string
  month: string
  isoDate: string
  category: string
  desc: string
}

export const events: Event[] = [
  {
    id:       'cup',
    title:    'Кубок RIDEPARK',
    day:      '14',
    month:    'Июн',
    isoDate:  '2026-06-14',
    category: 'Соревнования',
    desc:     'Открытые гонки по кросс-полигону. Классы: новичок, любитель, про. Призовой фонд.',
  },
  {
    id:       'fest',
    title:    'Летний Эндуро-Фест',
    day:      '29',
    month:    'Июл',
    isoDate:  '2026-07-29',
    category: 'Фестиваль',
    desc:     'Двухдневный выезд: гонки, мастер-классы, техника-шоу и вечерняя программа.',
  },
  {
    id:       'marathon',
    title:    'Осенний марафон',
    day:      '10',
    month:    'Сен',
    isoDate:  '2026-09-10',
    category: 'Марафон',
    desc:     'Марафонский маршрут 80 км через лес и горы. Командный и личный зачёт.',
  },
]

// ── Hero stats ───────────────────────────────────────────────────────────────

export interface Stat {
  num: string
  label: string
}

export const heroStats: Stat[] = [
  { num: '50+',   label: 'Единиц техники' },
  { num: '3',     label: 'Трассы' },
  { num: '7',     label: 'Лет опыта' },
  { num: '1500+', label: 'Довольных клиентов' },
]

// ── Rent rules ───────────────────────────────────────────────────────────────

export interface RentRule {
  num: string
  title: string
  desc: string
}

export const rentRules: RentRule[] = [
  {
    num:   '01',
    title: 'Возраст и права',
    desc:  'От 18 лет. Для новичков обязателен вводный брифинг с инструктором перед выездом.',
  },
  {
    num:   '02',
    title: 'Залог',
    desc:  'Размер залога зависит от класса техники. Принимаются наличные и карта.',
  },
  {
    num:   '03',
    title: 'Страховка',
    desc:  'Базовая страховка включена в стоимость проката. Расширенная — дополнительно.',
  },
  {
    num:   '04',
    title: 'Экипировка',
    desc:  'Шлем, перчатки, защита колен и локтей выдаются бесплатно при каждом прокате.',
  },
]

export const rentIncluded: string[] = [
  'Шлем и полная защита',
  'Вводный инструктаж',
  'Базовая страховка',
  'Технический осмотр техники',
  'Помощь инструктора на трассе',
  'Аптечка и эвакуация при поломке',
]

// ── Booking ──────────────────────────────────────────────────────────────────

export const bookingUsps: string[] = [
  'Ответим в течение 30 минут',
  'Бесплатная отмена за 24 часа',
  'Техника готова к выезду',
  'Инструктор поможет с выбором',
]

// ── Training ─────────────────────────────────────────────────────────────────

export type TrainingIconId = 'personal' | 'group' | 'comp'

export interface TrainingProgram {
  id: string
  iconId: TrainingIconId
  title: string
  desc: string
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id:     'personal',
    iconId: 'personal',
    title:  'Индивидуальные тренировки',
    desc:   'Персональный инструктор, программа под ваш уровень. Быстрый прогресс и разбор ошибок.',
  },
  {
    id:     'group',
    iconId: 'group',
    title:  'Групповые сборы',
    desc:   'Тренировочные выезды с группой до 10 человек. Обучение и практика на всех трассах.',
  },
  {
    id:     'comp',
    iconId: 'comp',
    title:  'Подготовка к соревнованиям',
    desc:   'Программа для тех, кто хочет выступать. Работа с техникой езды и тактикой гонки.',
  },
]

// ── Gallery ──────────────────────────────────────────────────────────────────

export interface GalleryItem {
  id: string
  cls: string
  label: string
  src: string
}

export const galleryItems: GalleryItem[] = [
  { id: 'main',  cls: 'hero-img', label: 'Главное фото', src: '/images/gallery/track-1.jpg' },
  { id: 'sq1',   cls: 'sq',       label: 'Фото',         src: '/images/gallery/track-2.jpg' },
  { id: 'sq2',   cls: 'sq',       label: 'Фото',         src: '/images/gallery/track-3.jpg' },
  { id: 'wide1', cls: 'wide',     label: 'Фото',         src: '/images/gallery/track-4.jpg' },
  { id: 'wide2', cls: 'wide',     label: 'Фото',         src: '/images/gallery/track-5.jpg' },
  { id: 'sq3',   cls: 'sq',       label: 'Фото',         src: '/images/gallery/track-6.jpg' },
  { id: 'tall1', cls: 'tall',     label: 'Фото',         src: '/images/gallery/track-7.jpg' },
  { id: 'sq4',   cls: 'sq',       label: 'Фото',         src: '/images/gallery/track-8.jpg' },
]

// ── Reviews ──────────────────────────────────────────────────────────────────

export interface Review {
  id: string
  text: string
  name: string
  role: string
  avatar: string
  stars: number
}

export const reviews: Review[] = [
  {
    id:     'alex',
    text:   'Всё объяснили с нуля, подобрали технику по уровню, маршрут был идеальным. Инструктор всегда рядом. Вернусь точно!',
    name:   'Алексей М.',
    role:   'Новичок',
    avatar: 'А',
    stars:  5,
  },
  {
    id:     'irina',
    text:   'Отличная подготовка техники, крутые трассы и профессиональные тренеры. Ездила на горный маршрут — незабываемо.',
    name:   'Ирина В.',
    role:   'Опытный райдер',
    avatar: 'И',
    stars:  5,
  },
  {
    id:     'sergei',
    text:   'Брали квадрик с женой — всё прошло отлично. Персонал приветливый, техника мощная, маршрут комфортный.',
    name:   'Сергей К.',
    role:   'Семейный выезд',
    avatar: 'С',
    stars:  5,
  },
]

// ── Prices ───────────────────────────────────────────────────────────────────

export interface PriceTier {
  id: string
  title: string
  amount: string
  period: string
  desc: string
  featured: boolean
  badge?: string
  items: string[]
}

export const priceTiers: PriceTier[] = [
  {
    id:       'rental',
    title:    'Прокат',
    amount:   '2 500',
    period:   '/час',
    desc:     'Самостоятельный выезд на технике клуба',
    featured: false,
    items: [
      'Выбор техники из парка',
      'Экипировка включена',
      'Базовая страховка',
      'Карта трассы',
    ],
  },
  {
    id:       'instructor',
    title:    'Прокат + Инструктор',
    amount:   '6 500',
    period:   '/час',
    desc:     'Техника + личный сопровождающий на трассе',
    featured: true,
    badge:    'Популярный',
    items: [
      'Всё из тарифа «Прокат»',
      'Персональный инструктор',
      'Разбор техники езды',
      'Помощь на сложных участках',
    ],
  },
  {
    id:       'camp',
    title:    'Сборы',
    amount:   '25 000',
    period:   '/уикенд',
    desc:     'Полное погружение на 2 дня с проживанием',
    featured: false,
    items: [
      'Техника на весь уикенд',
      'Два дня с инструктором',
      'Проживание на базе',
      'Питание включено',
    ],
  },
]

// ── About stats ──────────────────────────────────────────────────────────────

export const aboutStats: Stat[] = [
  { num: '7',     label: 'Лет на рынке' },
  { num: '50+',   label: 'Единиц техники' },
  { num: '3',     label: 'Фирменные трассы' },
  { num: '5',     label: 'Инструкторов' },
  { num: '1500+', label: 'Клиентов' },
  { num: '100%',  label: 'Исправная техника' },
]
