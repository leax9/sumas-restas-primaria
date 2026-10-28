# 🧮 Mates de Primaria (PWA)

Aplicación Web Progresiva (PWA) diseñada específicamente para que los niños de primaria practiquen operaciones matemáticas de forma ágil, segura, visual y completamente libre de publicidad o interrupciones.

🔗 **[Probar aplicación en directo](https://alejandrosales.github.io/mates-primaria/)** *(o sustituye esta URL por la dirección exacta de tu despliegue en GitHub Pages)*

![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?style=flat-square)
![Offline First](https://img.shields.io/badge/Offline-100%25-green?style=flat-square)
![Trilingual](https://img.shields.io/badge/Idiomas-Castellano%20|%20Català%20|%20English-orange?style=flat-square)
![License](https://img.shields.io/badge/Licencia-Educativa%20sin%20ánimo%20de%20lucro-lightgrey?style=flat-square)

---

## ✨ Características Principales

### 🌐 Conectividad e Instalación
* **100% Offline & Instalable:** Funciona sin conexión a internet tras su primera carga y se puede instalar como aplicación nativa en cualquier dispositivo.
* **Sistema Trilingüe Completo:** Interfaz e internacionalización adaptadas al **Castellano**, **Català** y **English** en todos sus menús, textos y avisos.

### 👥 Gestión y Privacidad de Perfiles
* **Multiusuario Local:** Gestión de perfiles independientes mediante `localStorage`. Al iniciar por primera vez, la pantalla de perfiles se presenta completamente limpia.
* **Edición Rápida:** Botón de ajustes (`⚙️`) en cada tarjeta para modificar fácilmente el nombre o el avatar del perfil.
* **Seguridad Avanzada Anti-Niños ("Zona de Peligro"):** Para evitar borrados accidentales por parte de los peques, la eliminación permanente de un perfil requiere una doble barrera de seguridad:
  1. Escribir manualmente la palabra clave obligatoria según el idioma activo (`ELIMINAR`, `ESBORRAR` o `DELETE`).
  2. Mantener presionado un botón de confirmación durante **2 segundos** con una barra de progreso visual interactiva (compatible con pantallas táctiles y ratón).

### 📊 Informes y Estadísticas Avanzadas
* **Exportación a PDF:** Generación de informes detallados del rendimiento del alumno, permitiendo exportar las estadísticas de juego y aciertos desglosadas por periodos **semanales, mensuales y anuales** para cada perfil.

### 🚀 Actualizaciones y Fiabilidad
* **Sistema de Actualización Inteligente:** 
  * Indicador visual permanente en la pantalla de perfiles que muestra si la app está en su **"Última versión"** (badge verde).
  * Aviso no intrusivo en segundo plano que despliega un botón de actualización estable cuando se despliegan nuevas mejoras en el repositorio.

---

## 📱 Cómo instalar la aplicación (PWA)

Al ser una aplicación web progresiva, puedes instalarla directamente en cualquier dispositivo sin pasar por las tiendas de aplicaciones oficiales:

### 🤖 En dispositivos Android (Chrome / Edge)
1. Abre la dirección web de la aplicación en tu navegador.
2. Pulsa sobre el menú de opciones (los tres puntos verticales arriba a la derecha).
3. Selecciona **"Instalar aplicación"** o **"Añadir a la pantalla principal"**.
4. Confirma la acción y tendrás el acceso directo en tu escritorio como una app nativa.

### 🍏 En dispositivos iOS / iPadOS (Safari)
> *Nota: En dispositivos Apple, la instalación debe realizarse obligatoriamente desde el navegador Safari.*
1. Abre la aplicación en **Safari**.
2. Pulsa el botón de **Compartir** 
3. Desplázate por las opciones del menú y selecciona **"Añadir a pantalla de inicio"** (Add to Home Screen).
4. Pulsa **Añadir**. El icono aparecerá en tu pantalla de inicio listo para usarse a pantalla completa.

---

## 🛠️ Estructura Técnica del Proyecto

```text
├── index.html      # Núcleo de la app (UI, perfiles, lógica matemática, i18n, informes PDF y seguridad)
├── manifest.json   # Metadatos de la PWA para modo pantalla completa e iconos
├── sw.js           # Service Worker optimizado (Control de caché v9 y ciclo de vida offline)
└── README.md       # Documentación oficial del proyecto
```

## 🔒 Privacidad y Almacenamiento
La aplicación no utiliza cookies de rastreo, analíticas de terceros ni bases de datos en servidores externos. Todo el progreso de las partidas, puntuaciones y perfiles se almacena de forma local y privada en el propio dispositivo del usuario mediante localStorage.

## 📄 Licencia
Proyecto de código abierto desarrollado con fines exclusivamente educativos y familiares, sin ánimo de lucro. Libre para su uso y adaptación en hogares o centros educativos.
