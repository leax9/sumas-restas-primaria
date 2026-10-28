# Mates de Primaria (1.º de Primaria)

Aplicación web progresiva (PWA) interactiva y 100% gratuita, diseñada para que niños y niñas de 1.º de Primaria (6-7 años) practiquen sumas y restas diarias de forma visual, lúdica y autónoma.

Desarrollada con arquitectura Local-First, sin dependencias externas, sin anuncios y con soporte nativo para funcionar sin conexión a internet (Modo Offline) en cualquier dispositivo (móviles, tablets y ordenadores), incorporando un sistema inteligente de avisos de actualización automática.

## Demo en vivo

[Abrir Mates de Primaria](https://leax9.github.io/sumas-restas-primaria/)

*(Puedes usarla directamente desde el navegador o instalarla como aplicación a pantalla completa).*

## Características principales

### Sistema Multiusuario y Perfiles Aislados
* Avatares infantiles: Cada niño o niña puede elegir su propio avatar (león, dinosaurio, unicornio, cohete, panda, estrella) y personalizar su nombre.
* Privacidad total por perfil: Los historiales, las estrellas y las estadísticas se almacenan de forma totalmente aislada en el dispositivo (localStorage). Si varios hermanos o amigos usan la misma tablet, cada uno ve exclusivamente su propio progreso.
* Soporte multilenguaje completo: Interfaz totalmente traducida e intercambiable al vuelo entre Castellano, Català y English.

### Adaptada al método escolar de 1.º de Primaria
* Formato de libreta vertical: Las operaciones se muestran apiladas en columna sobre una cuadrícula escolar para reforzar la colocación espacial.
* Código de colores oficial por valor posicional:
  * Unidades en azul.
  * Decenas en rojo.
  * Centenas en verde.
* Escritura natural de derecha a izquierda: El cursor comienza automáticamente en la columna de las Unidades y avanza hacia las Decenas y Centenas.
* Asistente visual para llevadas: Círculos interactivos opcionales para anotar el 1 que se lleva.

### Historial, Estadísticas e Informes en PDF
* Panel de progreso temporal: Filtra las estadísticas de forma instantánea por Semana, Mes o Histórico Anual (tandas realizadas, porcentaje de acierto y total de estrellas acumuladas).
* Motor preventivo de rendimiento: El sistema gestiona automáticamente el almacenamiento guardando el detalle de los últimos 90 días y comprimiendo los registros antiguos en resúmenes mensuales para garantizar una velocidad instantánea de por vida.
* Exportación a PDF: Botón integrado para generar un informe escolar limpio y ordenado, listo para guardar como PDF o imprimir para los padres.

### Configuración flexible por partida
1. Operación: Sumas (+), Restas (-) o Mezcla.
2. Cifras: 1, 2 o 3 dígitos.
3. Llevadas: Sin llevadas (por defecto) o con llevadas.
4. Cantidad: Tandas de 10, 15 o 20 operaciones.
5. Corrección: En tiempo real (Al momento) o en modo examen (Al final).

## Cómo instalarla en el móvil o tablet (y usarla sin internet)

La aplicación cuenta con un Service Worker inteligente y un sistema de aviso de actualización en tiempo real: si subes mejoras al repositorio, la app avisa al usuario mediante un discreto mensaje flotante con un botón de Actualizar, refrescando el código al instante sin borrar jamás los perfiles ni las estrellas.

### En iPhone / iPad (iOS)
1. Abre el enlace en Safari.
2. Toca el botón Compartir (el cuadrado con la flecha hacia arriba).
3. Selecciona "Añadir a pantalla de inicio" y pulsa Añadir.

### En Android (Móvil o Tablet)
1. Abre el enlace en Google Chrome.
2. Toca los tres puntos (arriba a la derecha) y selecciona "Añadir a pantalla de inicio" o "Instalar aplicación".

### En Windows / Mac
1. Abre el enlace en Chrome o Edge.
2. Haz clic en el icono de Instalar situado en la barra de direcciones. 
3. Compatible también con teclado físico (0-9, Backspace, flechas de dirección y Enter).

## Arquitectura técnica

index.html      # Aplicación completa (Interfaz, multiusuario, lógica, i18n y estilos)
manifest.json   # Metadatos PWA para instalación a pantalla completa
sw.js           # Service Worker para funcionamiento 100% Offline y control de versiones
README.md       # Documentación del proyecto

## Privacidad absoluta y sin cookies

La aplicación no utiliza cookies de terceros, bases de datos en la nube ni sistemas de seguimiento o telemetría. Todo el progreso de los perfiles y estadísticas se procesa y almacena localmente de forma privada en el propio dispositivo del usuario (localStorage).

## Licencia

Proyecto de código abierto creado con fines exclusivamente educativos y familiares, sin ánimo de lucro. Libre para usar, compartir y adaptar en entornos escolares o domésticos.
