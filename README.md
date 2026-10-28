# 🧮 Mates de Primaria (PWA)

Aplicación Web Progresiva (PWA) diseñada específicamente para que los niños de primaria practiquen operaciones matemáticas (sumas, restas, etc.) de forma ágil, segura, visual y completamente libre de publicidad o interrupciones.

![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?style=flat-square)
![Offline First](https://img.shields.io/badge/Offline-100%25-green?style=flat-square)
![Trilingual](https://img.shields.io/badge/Idiomas-Castellano%20|%20Català%20|%20English-orange?style=flat-square)
![License](https://img.shields.io/badge/Licencia-Educativa%20sin%20ánimo%20de%20lucro-lightgrey?style=flat-square)

---

## ✨ Características Principales

* **100% Offline & Instalable:** Funciona perfectamente sin conexión a internet tras su primera carga gracias a su *Service Worker*.
* **Soporte Trilingüe Completo:** Interfaz totalmente adaptada a **Castellano**, **Català** y **English** en todos sus menús, avisos y sistemas de seguridad.
* **Multiusuario y Privada:** Permite gestionar múltiples perfiles locales mediante `localStorage`. Al iniciar por primera vez, la pantalla de perfiles se presenta limpia y lista para crear nuevos perfiles.
* **Gestión y Edición de Perfiles:** Botón de ajustes (`⚙️`) en cada tarjeta para modificar fácilmente el nombre o el avatar del perfil.
* **Seguridad Avanzada Anti-Niños ("Zona de Peligro"):** Para evitar borrados accidentales de perfiles por parte de los peques, la eliminación permanente requiere una doble barrera:
  1. Escribir manualmente la palabra clave obligatoria según el idioma activo (`ELIMINAR`, `ESBORRAR` o `DELETE`).
  2. Mantener pulsado el botón de confirmación durante **2 segundos** con una barra de progreso visual interactiva (compatible con táctil y ratón).
* **Sistema de Actualización Inteligente:** 
  * Indicador visual permanente en la pantalla de perfiles que muestra si la app está en su **"Última versión"** (badge verde).
  * Aviso no intrusivo en segundo plano que despliega un botón de actualización estable cuando el desarrollador publica mejoras.

---

## 📱 Cómo instalar la aplicación (PWA)

Al ser una aplicación web progresiva, puedes instalarla directamente en cualquier dispositivo (móvil, tablet o PC) sin pasar por las tiendas de aplicaciones oficiales:

### En dispositivos Android (Chrome / Edge)
1. Abre la dirección web de la aplicación en tu navegador.
2. Pulsa sobre el menú de opciones del navegador (los tres puntos verticales arriba a la derecha).
3. Selecciona **"Instalar aplicación"** o **"Añadir a la pantalla principal"**.
4. Confirma la instalación y tendrás el acceso directo en tu escritorio como una app nativa.

### En dispositivos iOS / iPadOS (Safari)
> *Nota: En iOS, la instalación debe realizarse obligatoriamente desde el navegador Safari.*
1. Abre la aplicación en **Safari**.
2. Pulsa el botón de **Compartir** 
3. Desplázate por las opciones del menú y selecciona **"Añadir a pantalla de inicio"** (Add to Home Screen).
4. Pulsa **Añadir** arriba a la derecha. El icono de la app aparecerá en tu pantalla de inicio listo para usarse a pantalla completa.

---

## 🛠️ Estructura Técnica del Proyecto

```text
├── index.html      # Núcleo de la aplicación (UI, perfiles, lógica matemática, i18n y seguridad)
├── manifest.json   # Metadatos de la PWA para modo pantalla completa e iconos
├── sw.js           # Service Worker optimizado (Control de caché v9 y ciclo de vida offline)
└── README.md       # Documentación oficial del proyecto
```

## 🔒 Privacidad y Almacenamiento
La aplicación no utiliza cookies de rastreo, analíticas de terceros ni bases de datos en la nube. Todo el progreso de las partidas, puntuaciones y perfiles se almacena de forma local y privada en el dispositivo del usuario mediante localStorage.

## 📄 Licencia
Proyecto de código abierto desarrollado con fines exclusivamente educativos y familiares, sin ánimo de lucro. Libre para su uso y adaptación en hogares o centros educativos.
