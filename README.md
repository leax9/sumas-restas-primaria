# ✏️ Mates de Primaria (1.º de Primaria)

![Versión](https://img.shields.io/badge/versi%C3%B3n-2.0.0-blue)
![PWA](https://img.shields.io/badge/PWA-100%25%20Offline-success)
![Plataformas](https://img.shields.io/badge/plataformas-iOS%20%7C%20Android%20%7C%20Windows-informational)
![Multiusuario](https://img.shields.io/badge/perfiles-multiusuario-orange)
![Sin Publicidad](https://img.shields.io/badge/anuncios-0%25%20%28Kid%20Safe%29-brightgreen)

Aplicación web progresiva (**PWA**) interactiva y **100% gratuita**, diseñada para que niños y niñas de **1.º de Primaria (6-7 años)** practiquen sumas y restas diarias de forma visual, lúdica y autónoma.

Desarrollada con arquitectura *Local-First*, sin dependencias externas, sin anuncios y con soporte nativo para funcionar **sin conexión a internet (Modo Offline)** en cualquier dispositivo (móviles, tablets y ordenadores).

---

## 🚀 Demo en vivo

👉 **[Abrir Mates de Primaria](https://leax9.github.io/sumas-restas-primaria/)**

*(Puedes usarla directamente desde el navegador o instalarla como aplicación en pantalla completa).*

---

## ✨ Características principales

### 👥 Sistema Multiusuario y Perfiles Aislados
* **Avatares infantiles:** Cada niño o niña puede elegir su propio avatar (león, dinosaurio, unicornio, cohete, etc.) y personalizar su nombre.
* **Privacidad total por perfil:** Los historiales, las estrellas y las estadísticas se almacenan de forma totalmente aislada en el dispositivo (`localStorage`). Si varios niños o hermanos usan la misma tablet, cada uno ve exclusivamente su propio progreso.

### 📚 Adaptada al método escolar de 1.º de Primaria
* **Formato de libreta vertical:** Las operaciones se muestran apiladas en columna sobre una cuadrícula escolar para reforzar la colocación espacial.
* **Código de colores oficial por valor posicional:**
  * 🔵 **U**nidades en azul.
  * 🔴 **D**ecenas en rojo.
  * 🟢 **C**entenas en verde.
* **Escritura natural de derecha a izquierda:** El cursor comienza automáticamente en la columna de las **Unidades** y avanza hacia las Decenas y Centenas.
* **Asistente visual para llevadas:** Círculos interactivos opcionales para anotar el `1` que se lleva.

### 📊 Historial, Estadísticas e Informes en PDF
* **Panel de progreso temporal:** Filtra las estadísticas de forma instantánea por **Semana, Mes o Histórico Anual** (tandas realizadas, porcentaje de acierto y total de estrellas acumuladas).
* **Motor preventivo de rendimiento:** El sistema gestiona automáticamente el almacenamiento guardando el detalle de los últimos 90 días y comprimiendo los registros antiguos en resúmenes mensuales para garantizar una velocidad instantánea de por vida.
* **Exportación a PDF:** Botón integrado para generar un informe escolar limpio y ordenado, listo para guardar como PDF o imprimir para los padres.

### ⚙️ Configuración flexible por partida
1. **Operación:** Sumas (`+`), Restas (`-`) o Mezcla.
2. **Cifras:** 1, 2 o 3 dígitos.
3. **Llevadas:** Sin llevadas (por defecto) o con llevadas.
4. **Cantidad:** Tandas de 10, 15 o 20 operaciones.
5. **Corrección:** En tiempo real (*⚡ Al momento*) o en modo examen (*📋 Al final*).

---

## 📲 Cómo instalarla en el móvil o tablet (y usarla sin internet)

La aplicación cuenta con un **Service Worker** integrado. Basta con abrir el enlace una primera vez con conexión para que quede guardada en la memoria caché del dispositivo y funcione incluso en **Modo Avión**.

### 🍎 En iPhone / iPad (iOS)
1. Abre el enlace en **Safari**.
2. Toca el botón **Compartir** (el cuadrado con la flecha hacia arriba).
3. Selecciona **"Añadir a pantalla de inicio"** y pulsa **Añadir**.

### 🤖 En Android (Móvil o Tablet)
1. Abre el enlace en **Google Chrome**.
2. Toca los **tres puntos** (arriba a la derecha) y selecciona **"Añadir a pantalla de inicio"** o **"Instalar aplicación"**.

### 💻 En Windows / Mac
1. Abre el enlace en **Chrome** o **Edge**.
2. Haz clic en el icono de **Instalar** situado en la barra de direcciones. 
3. Compatible también con **teclado físico** (`0-9`, `Backspace`, flechas de dirección y `Enter`).

---

## 🛠️ Arquitectura técnica

```text
├── index.html      # Aplicación completa (Interfaz, multiusuario, lógica y estilos)
├── manifest.json   # Metadatos PWA para instalación a pantalla completa
├── sw.js           # Service Worker para funcionamiento 100% Offline
└── README.md       # Documentación del proyecto
