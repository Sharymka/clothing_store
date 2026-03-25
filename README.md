<div align="center">

# Clothing Store

**Многостраничный адаптивный сайт интернет-магазина одежды**

Статическая вёрстка без использования фреймворков — чистый HTML5, SCSS и минимальный JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## Страницы

### Главная

Hero-промо, категории товаров (Women, Men, Kids, Accessories), сетка Featured Items с hover-эффектами, секция преимуществ, отзывы, подписка на рассылку.

<p align="center">
  <img src="screenshots/01-main-01.png" width="49%" alt="Главная — hero и категории" />
  <img src="screenshots/01-main-02.png" width="49%" alt="Главная — карточки товаров" />
</p>
<p align="center">
  <img src="screenshots/01-main-03.png" width="49%" alt="Главная — преимущества" />
  <img src="screenshots/01-main-04.png" width="49%" alt="Главная — отзывы и подписка" />
</p>

### Каталог

Хлебные крошки, раскрывающиеся фильтры (категория, бренд, дизайнер), сетка товаров, пагинация.

<p align="center">
  <img src="screenshots/05-catalog-01.png" width="49%" alt="Каталог — фильтры и товары" />
  <img src="screenshots/05-catalog-02.png" width="49%" alt="Каталог — пагинация" />
</p>

### Товар

Детальная страница продукта: галерея изображений, выбор цвета/размера, кнопка добавления в корзину.

<p align="center">
  <img src="screenshots/04-product-01.png" width="49%" alt="Товар — основная информация" />
  <img src="screenshots/04-product-02.png" width="49%" alt="Товар — дополнительные секции" />
</p>

### Корзина

Список товаров с изображениями, количеством и ценой, итоговая сумма.

<p align="center">
  <img src="screenshots/03-cart-01.png" width="49%" alt="Корзина — список товаров" />
  <img src="screenshots/03-cart-02.png" width="49%" alt="Корзина — итого" />
</p>

### Регистрация

Форма регистрации и входа в аккаунт.

<p align="center">
  <img src="screenshots/02-registration.png" width="60%" alt="Регистрация" />
</p>

---

## Технологии

| Область | Технология |
|---------|-----------|
| Разметка | HTML5, семантические теги |
| Стили | SCSS → CSS (переменные, миксины, единый файл ~2450 строк) |
| Шрифты | [Google Fonts — Lato](https://fonts.google.com/specimen/Lato) (300, 400, 700, 900) |
| Иконки | [Font Awesome](https://fontawesome.com/) (CDN kit), inline SVG |
| JavaScript | Inline-скрипт на каждой странице (toggle бургер-меню) |
| Графика | SVG-иконки, PNG/JPG-изображения товаров и категорий |

## Структура проекта

```
clothing_store/
├── index.html              # Главная страница
├── catalog.html            # Каталог товаров
├── product.html            # Страница товара
├── cart.html               # Корзина
├── registration.html       # Регистрация / вход
├── style/
│   ├── style.scss          # Исходный SCSS (переменные, миксины, компоненты, media queries)
│   ├── style.css           # Скомпилированный CSS (~3785 строк)
│   └── style.css.map       # Source map для отладки
├── images/                 # Изображения и иконки
│   ├── item_1.png … item_12.png   # Карточки товаров
│   ├── for_women.jpg, for_men.jpg, for_kids.jpg, accessories.jpg
│   ├── product-img.png     # Изображение на странице товара
│   ├── *.svg               # SVG-иконки (корзина, поиск, соцсети, фильтры)
│   └── ...
├── screenshots/            # Скриншоты для README
└── README.md
```

## Адаптивность

Сайт полностью адаптивен — desktop-first подход, **11 брейкпоинтов** от 1190px до 410px:

| Ширина | Назначение |
|--------|-----------|
| 1190px | Уменьшение контейнера |
| 1170px | Адаптация фильтров каталога |
| 967px | Перестройка промо-секции |
| 870px | Перекомпоновка промо-блоков |
| **768px** | **Планшет** — перестройка каталога, навигации |
| 695px | Адаптация секции преимуществ |
| 680px | Промо в одну колонку |
| 625px | Упрощение промо-элементов |
| 605px | Сужение контейнера и сетки |
| 445px | Адаптация мелких элементов |
| **410px** | **Мобильная** версия |

## Основные компоненты UI

- **Header** — логотип, кнопка поиска, бургер-меню, иконки профиля и корзины
- **Боковое меню** — выдвижная навигация с категориями (MAN / WOMAN / KIDS) и подкатегориями
- **Карточки товаров** — изображение, название, описание, цена, кнопка «Add to Cart» с hover-overlay
- **Фильтры** — раскрывающиеся блоки (`<details>`) для категории, бренда, дизайнера
- **Секция преимуществ** — Free Delivery, Sales & Discounts, Quality Assurance
- **Footer** — копирайт, иконки соцсетей (Facebook, Instagram, Pinterest, Twitter)

## SCSS-архитектура

Стили организованы в одном файле `style/style.scss`:

- **Переменные** — цвета (`$main-color: #f16d7f`), размеры шрифтов, тайминги анимаций
- **Миксины** — типографика (`@mixin font-14-400`, `@mixin font-44-900` и др.), flexbox-утилиты
- **Компонентные блоки** — стили сгруппированы по секциям (header, promo, categories, catalog, benefits, feedback, footer)
- **Media queries** — собраны в конце файла, от большего к меньшему экрану (desktop-first)

## Запуск

Проект не требует сборки и зависимостей. Для локального просмотра:

1. Клонировать репозиторий:

```bash
git clone https://github.com/Sharymka/clothing_store.git
cd clothing_store
```

2. Открыть `index.html` в браузере или использовать Live Server:

```bash
# VS Code: установить расширение Live Server, нажать Go Live
# Или через npx:
npx serve .
```

3. Для редактирования SCSS потребуется Sass-компилятор:

```bash
npm install -g sass
sass --watch style/style.scss:style/style.css
```

## История разработки

Проект развивался поэтапно через Pull Requests:

1. **#1** — Главная страница (разметка, стили)
2. **#2** — Страница каталога
3. **#3** — Bootstrap-версия (позднее удалена)
4. **#4** — Страница товара, переход на SCSS-препроцессор
5. **#5** — Страницы корзины и регистрации
6. **#6** — Адаптивность главной и каталога
7. **#7** — Адаптивность корзины и товара
8. **#8** — Адаптивность регистрации, финальная доработка

## Ограничения

- **Только вёрстка** — кнопки «Add to Cart», формы фильтров и поиска не имеют бэкенд-логики
- **Нет сборщика** — SCSS компилируется вручную, нет `package.json` и npm-скриптов
- **Дублирование** — header, footer и бургер-меню дублируются во всех HTML-файлах
- **Единый SCSS-файл** — все стили в одном файле (~2450 строк); нет разделения на модули
- **Нет линтеров и форматтеров** — отсутствуют ESLint, Stylelint, Prettier

## Лицензия

&copy; 2021 Brand. Учебный проект.
