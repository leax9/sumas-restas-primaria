# ✏️ Mates de Primaria (1.º de Primaria)

![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0.0-blue)
![PWA](https://img.shields.io/badge/PWA-100%25%20Offline-success)
![Plataformas](https://img.shields.io/badge/plataformas-iOS%20%7C%20Android%20%7C%20Windows-informational)
![Sin Publicidad](https://img.shields.io/badge/anuncios-0%25%20%28Kid%20Safe%29-brightgreen)

Aplicación web progresiva (**PWA**) interactiva y **100% gratuita**, diseñada para que niños y niñas de **1.º de Primaria (6-7 años)** practiquen sumas y restas diarias de forma visual, progresiva y autónoma.

Desarrollada sin dependencias externas (*Zero-Dependencies*), sin anuncios, sin rastreadores y con soporte nativo para funcionar **sin conexión a internet (Modo Offline)** en cualquier dispositivo.

---

## 🚀 Demo en vivo

👉 **[Abrir Mates de Primaria](https://leax9.github.io/sumas-restas-primaria/)**

*(Puedes usarla directamente desde el navegador o instalarla como aplicación en tu móvil, tablet u ordenador).*

---

## ✨ Características principales

### 📚 Adaptada al método escolar de 1.º de Primaria
* **Formato de libreta vertical:** Las operaciones se muestran apiladas en columna sobre una cuadrícula escolar para reforzar la colocación espacial.
* **Código de colores oficial por valor posicional:**
  * 🔵 **U**nidades en azul.
  * 🔴 **D**ecenas en rojo.
  * 🟢 **C**entenas en verde.
* **Escritura natural de derecha a izquierda:** Al resolver operaciones de 2 o 3 dígitos, el cursor comienza automáticamente en la columna de las **Unidades** y avanza hacia las Decenas y Centenas, exactamente igual que se resuelve en papel.
* **Asistente visual para llevadas:** Cuando se activa el modo *"Con llevadas"*, aparecen círculos interactivos sobre las columnas para que el niño pueda tocar y anotar el `1` que se lleva si lo necesita.

### ⚙️ Configuración flexible por partida
1. **Tipo de operación:** Sumas (`+`), Restas (`-`) o Mezcla aleatoria.
2. **Dificultad por cifras:** 1 dígito, 2 dígitos o 3 dígitos.
3. **Gestión de llevadas:**
   * **Sin llevadas (Por defecto):** El motor matemático garantiza que ninguna columna sume 10 o más, y que en las restas el dígito superior sea siempre mayor o igual al inferior.
   * **Con llevadas:** Genera operaciones que requieren llevar en las columnas correspondientes, evitando siempre resultados negativos en las restas.
4. **Longitud de la sesión:** Tandas de 10, 15 o 20 operaciones.
5. **Modo de corrección:**
   * **⚡ Al momento:** Valida cada operación nada más pulsar *"Listo"* con respuesta visual y sonora inmediata.
   * **📋 Al final:** Funciona como un pequeño examen donde el niño responde toda la tanda y revisa los fallos al terminar.

### 🌟 Sistema de recompensas y motivación
* **Puntuación de 1 a 4 estrellas** al finalizar cada tanda en función del porcentaje de aciertos (4 estrellas para el pleno del 100%).
* **Contador diario persistente:** Las estrellas ganadas en el día se guardan automáticamente en la memoria del dispositivo (`localStorage`).
* **Hoja de revisión final:** Muestra el listado completo de las operaciones realizadas, destacando los aciertos en verde y mostrando la respuesta correcta junto a la introducida en caso de fallo.
* **Efectos de sonido sintetizados:** Sonidos de acierto, error y fanfarria final generados en tiempo real mediante *Web Audio API* (sin necesidad de descargar archivos de audio).

---

## 📲 Cómo instalarla en el móvil o tablet (y usarla sin internet)

La aplicación cuenta con un **Service Worker** integrado. Basta con abrir el enlace una primera vez con conexión para que quede guardada en la memoria del dispositivo y funcione incluso en **Modo Avión**.

### 🍎 En iPhone / iPad (iOS)
1. Abre el enlace de la aplicación en **Safari**.
2. Toca el botón **Compartir** (el cuadrado con la flecha hacia arriba en la barra inferior o superior).
3. Desliza hacia abajo y selecciona **"Añadir a pantalla de inicio"**.
4. Pulsa **Añadir**. Aparecerá el icono **`1+2`** en tu pantalla y se abrirá a pantalla completa sin barras de navegador.

### 🤖 En Android (Móvil o Tablet)
1. Abre el enlace de la aplicación en **Google Chrome**.
2. Toca el icono de los **tres puntos** (arriba a la derecha).
3. Selecciona **"Añadir a pantalla de inicio"** o **"Instalar aplicación"**.
4. Confirma y tendrás el acceso directo como cualquier otra app nativa.

### 💻 En Windows / Mac
1. Abre el enlace en **Chrome** o **Edge**.
2. Haz clic en el icono de **Instalar** (un monitor con una flecha hacia abajo) situado a la derecha de la barra de direcciones.
3. También puedes usar el **teclado físico** del ordenador (`0-9` para escribir, `Borrar / Backspace` para corregir, `Flechas` para cambiar de columna y `Enter` para validar).

---

## 🛠️ Arquitectura y estructura técnica

El proyecto está construido con tecnologías web estándar (**Vanilla HTML5, CSS3 y JavaScript ES6+**) buscando la máxima velocidad de carga, cero mantenimiento y durabilidad a largo plazo:

```text
├── index.html      # Interfaz, estilos CSS nativos, lógica matemática y Web Audio API
├── manifest.json   # Metadatos PWA para instalación en pantalla completa e iconos SVG
├── sw.js           # Service Worker para almacenamiento en caché y funcionamiento 100% Offline
└── README.md       # Documentación del proyecto
```

* **Privacidad total:** No utiliza cookies de terceros, bases de datos externas ni telemetría. Todo el progreso se ejecuta y almacena localmente en el dispositivo del usuario.
* **Portabilidad:** Al no depender de CDNs externos, el archivo `index.html` también puede descargarse y ejecutarse directamente haciendo doble clic en cualquier ordenador sin conexión.

---

## 📄 Licencia

Proyecto de código abierto creado con fines educativos y familiares. Libre para usar, compartir y adaptar.
