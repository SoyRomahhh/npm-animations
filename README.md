# Animaciones Web

Coleccion ligera de animaciones CSS reutilizables para paginas y aplicaciones web. Incluye fondos, entradas, efectos para botones, loaders y placeholders. Sin dependencias ni JavaScript.

La documentacion y los ejemplos usan **Arial** y texto de tamano comodo. Las clases no cambian la tipografia global de tu sitio.

## Instalacion

Cuando se publique en npm:

```bash
npm install animaciones-web-soyromahhh
```

Importa la hoja de estilos desde tu punto de entrada:

```css
@import "animaciones-web-soyromahhh";
```

O desde JavaScript en un proyecto con soporte para CSS:

```js
import "animaciones-web-soyromahhh";
```

## Ejemplos

```html
<div class="anim-bg-gradient anim-padding">
  <h1 class="anim-fade-in">Hola, web</h1>
  <button class="anim-hover-lift">Ver mas</button>
</div>

<div class="anim-loader-spinner" role="status" aria-label="Cargando"></div>

<div class="anim-loader-dots" role="status" aria-label="Cargando">
  <span></span><span></span><span></span>
</div>

<div class="anim-skeleton" aria-hidden="true"></div>
```

## Clases disponibles

| Clase | Uso |
| --- | --- |
| `anim-bg-gradient` | Fondo degradado animado |
| `anim-bg-orbit` | Fondo con formas suaves en movimiento |
| `anim-fade-in` | Aparicion gradual |
| `anim-slide-up` | Entrada desde abajo |
| `anim-slide-in-left` | Entrada desde la izquierda |
| `anim-bounce` | Rebote suave y continuo |
| `anim-pulse` | Pulso de opacidad |
| `anim-spin` | Giro continuo |
| `anim-loader-spinner` | Indicador circular de carga |
| `anim-loader-dots` | Indicador de tres puntos (requiere tres `span`) |
| `anim-loader-bars` | Indicador de barras (requiere cuatro `span`) |
| `anim-skeleton` | Placeholder de carga |
| `anim-hover-lift` | Elevacion al pasar el puntero o enfocar |
| `anim-marquee` | Desplazamiento horizontal (requiere contenido ancho) |

## Opciones

Las animaciones respetan la preferencia del sistema `prefers-reduced-motion`. Puedes ajustar el ritmo con variables CSS en el elemento:

```css
.mi-loader {
  --anim-duration: 1.2s;
  --anim-color: #3157c8;
}
```

La duracion predeterminada es `1s` y el color predeterminado es azul. Usa las clases en elementos HTML normales; para loaders, agrega un nombre accesible como `role="status"` y `aria-label="Cargando"`.

## Publicar en npm

1. Comprueba que el nombre `animaciones-web-soyromahhh` este disponible en npm.
2. Ejecuta `npm login` y luego `npm publish` desde la carpeta del proyecto.

Si el nombre ya esta ocupado, cambia el campo `name` de `package.json` antes de publicar.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
