# Animaciones Web

Coleccion de animaciones CSS reutilizables para fondos, loaders y detalles de interfaz. No requiere dependencias ni JavaScript para usar la libreria.

La demo interactiva esta en [`index.html`](index.html): cambia los colores, el ritmo y las esquinas; prueba los efectos y copia sus clases. Usa Arial y respeta la preferencia del sistema para reducir el movimiento.

## Instalacion

Cuando se publique en npm:

```bash
npm install animaciones-web-soyromahhh
```

Importa la hoja de estilos:

```css
@import "animaciones-web-soyromahhh";
```

O en un proyecto con soporte para importar CSS:

```js
import "animaciones-web-soyromahhh";
```

## Uso rapido

```html
<div class="anim-bg-gradient anim-rounded">
  <h1 class="anim-fade-in">Hola, web</h1>
</div>

<div class="anim-loader-orbit" role="status" aria-label="Cargando"></div>
```

## Personalizacion

Define las variables una vez en `:root` o en un contenedor para personalizar solo esa parte:

```css
:root {
  --anim-color: #5b5de6;
  --anim-accent: #ff8866;
  --anim-surface: #e8eaf3;
  --anim-duration: 1.2s;
  --anim-bg-duration: 12s;
  --anim-orbit-duration: 14.4s;
  --anim-radius: 18px;
}
```

Variables disponibles:

| Variable | Controla | Valor inicial |
| --- | --- | --- |
| `--anim-color` | Color principal | `#5b5de6` |
| `--anim-accent` | Color secundario | `#ff8866` |
| `--anim-surface` | Borde del loader circular | `#e8eaf3` |
| `--anim-duration` | Ritmo de loaders y movimientos | `1.2s` |
| `--anim-bg-duration` | Ritmo del fondo degradado | `12s` |
| `--anim-orbit-duration` | Ritmo de fondos orbitales y formas | `14.4s` |
| `--anim-radius` | Esquinas de fondos y de `.anim-rounded` | `18px` |

## Clases disponibles

| Clase | Efecto |
| --- | --- |
| `anim-bg-gradient` | Fondo degradado animado |
| `anim-bg-orbit` | Fondo con formas en movimiento |
| `anim-rounded` | Esquinas personalizables |
| `anim-fade-in` | Aparicion gradual |
| `anim-slide-up` | Entrada desde abajo |
| `anim-slide-in-left` | Entrada desde la izquierda |
| `anim-reveal` | Entrada con escala y desenfoque |
| `anim-bounce` | Rebote |
| `anim-float` | Flotacion suave |
| `anim-pulse` | Pulso de opacidad y escala |
| `anim-wiggle` | Balanceo |
| `anim-glow` | Brillo pulsante |
| `anim-morph` | Forma organica cambiante |
| `anim-spin` | Giro continuo |
| `anim-loader-spinner` | Loader circular |
| `anim-loader-orbit` | Loader orbital |
| `anim-loader-dots` | Tres puntos (requiere tres `span`) |
| `anim-loader-bars` | Barras (requiere cuatro `span`) |
| `anim-skeleton` | Placeholder de carga |
| `anim-hover-lift` | Elevacion al pasar el puntero o enfocar |
| `anim-button` | Destello para botones |
| `anim-stagger` | Entrada escalonada de hijos |
| `anim-marquee` | Desplazamiento horizontal (duplica el contenido) |

Los loaders deben tener un nombre accesible, por ejemplo `role="status"` y `aria-label="Cargando"`. Todas las animaciones respetan `prefers-reduced-motion`.

## Publicar en npm

1. Comprueba que el nombre `animaciones-web-soyromahhh` este disponible en npm.
2. Ejecuta `npm login` y `npm publish` desde la carpeta del proyecto.

Si el nombre ya esta ocupado, cambia el campo `name` de `package.json` antes de publicar.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
