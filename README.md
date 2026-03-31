# RIDEPARK

Лендинг клуба аренды мотоциклов и квадроциклов. Next.js 15 + React 19 + TypeScript, чистый CSS.

## Запуск

```bash
npm run dev      # localhost:3000
npm run build    # сборка
npm run lint     # линтер
```

## Деплой

Сайт деплоится на GitHub Pages через `.github/workflows/deploy.yml`.

> **TODO: убрать перед переездом на нормальный хостинг**
>
> Текущая конфигурация заточена под GitHub Pages (статический экспорт):
> - `next.config.ts` — `output: 'export'`, `basePath: '/ridepark'`, `assetPrefix: '/ridepark/'`, `env.NEXT_PUBLIC_BASE_PATH`
> - Все пути к медиа-файлам (картинки, видео) вручную префиксируются через `process.env.NEXT_PUBLIC_BASE_PATH`
> - CSS-переменная `--bg-image` на секциях передаётся через `style` prop вместо хардкода в CSS
>
> При переезде на хостинг с сервером (Vercel, VPS и т.д.):
> 1. Удалить `basePath`, `assetPrefix`, `output: 'export'`, `env.NEXT_PUBLIC_BASE_PATH` из `next.config.ts`
> 2. Вернуть `next/image` вместо `<img>` там где нужна оптимизация
> 3. Убрать `${BASE}` префиксы из компонентов и `--bg-image` из `style` пропов
