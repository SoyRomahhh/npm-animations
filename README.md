# Animaciones Web

Libreria de animaciones CSS reutilizables para fondos, loaders y detalles de interfaz. No requiere dependencias ni JavaScript para usar las clases.

## Probar la demo

Abre `index.html` directamente en el navegador; sus estilos y controles estan incluidos en el propio archivo, asi que no hace falta servidor ni npm. La demo permite buscar animaciones, repetirlas, pausarlas, ajustar colores, velocidad y bordes, y copiar ejemplos HTML completos.

`index.css` es la hoja de estilos fuente que se publica en npm. Si la editas, actualiza el CSS incluido en la demo con:

```bash
node scripts/inline-demo-css.mjs
```

La demo y la libreria usan Arial, ofrecen movimiento reducido para quien lo prefiera y tienen diseno original. Se tomaron como referencia los patrones de duracion personalizable de [Animate.css](https://animate.style/) y los ejemplos interactivos de [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations); no se copiaron sus disenos ni codigo.

## Instalacion

Cuando se publique en npm:

```bash
npm install animaciones-web-soyromahhh
```

Importa los estilos:

```css
@import "animaciones-web-soyromahhh";
```

O desde JavaScript en un proyecto con soporte para importar CSS:

```js
import "animaciones-web-soyromahhh";
```

## Uso rapido

```html
<section class="anim-bg-orbit anim-rounded">
  <h1 class="anim-slide-up">Hola, web</h1>
</section>

<div class="anim-loader-dots" role="status" aria-label="Cargando">
  <span></span><span></span><span></span>
</div>
```

## Personalizacion

Configura una paleta y duracion global, o define estas variables en un contenedor para personalizar solo esa parte:

```css
:root {
  --anim-color: #5b5de6;
  --anim-accent: #ff8866;
  --anim-surface: #e8eaf3;
  --anim-duration: 1.2s;
  --anim-bg-duration: 12s;
  --anim-orbit-duration: 14.4s;
  --anim-marquee-duration: 18s;
  --anim-radius: 18px;
}
```

| Variable | Controla | Valor inicial |
| --- | --- | --- |
| `--anim-color` | Color principal | `#5b5de6` |
| `--anim-accent` | Color de acento | `#ff8866` |
| `--anim-surface` | Superficie del loader circular | `#e8eaf3` |
| `--anim-duration` | Ritmo de loaders y movimientos | `1.2s` |
| `--anim-bg-duration` | Ritmo de fondos | `12s` |
| `--anim-orbit-duration` | Ritmo orbital y formas | `14.4s` |
| `--anim-marquee-duration` | Ritmo del texto en movimiento | `18s` |
| `--anim-radius` | Esquinas de fondos y `.anim-rounded` | `18px` |

## Catalogo

Fondos y formas: `anim-bg-gradient`, `anim-bg-grid`, `anim-bg-orbit`, `anim-morph`, `anim-gradient-text`, `anim-rounded`.

Entradas y movimiento: `anim-fade-in`, `anim-slide-up`, `anim-slide-in-left`, `anim-reveal`, `anim-flip-in`, `anim-bounce`, `anim-float`, `anim-pulse`, `anim-wiggle`, `anim-jelly`, `anim-heartbeat`, `anim-glow`, `anim-spin`, `anim-stagger`.

Interfaz y carga: `anim-loader-spinner`, `anim-loader-orbit`, `anim-loader-dots`, `anim-loader-bars`, `anim-loader-progress`, `anim-skeleton`, `anim-hover-lift`, `anim-button`, `anim-marquee`.

Los loaders necesitan un nombre accesible, por ejemplo `role="status"` y `aria-label="Cargando"`. La hoja de estilos respeta la preferencia del sistema `prefers-reduced-motion`.

## Publicar en npm

1. Comprueba que el nombre `animaciones-web-soyromahhh` este disponible.
2. Ejecuta `npm login` y `npm publish` en la carpeta del proyecto.

Si el nombre ya esta ocupado, cambia el campo `name` de `package.json`.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
