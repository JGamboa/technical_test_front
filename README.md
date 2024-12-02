
# Ionic Angular Client Management App

Este proyecto es una aplicación desarrollada con **Ionic** y **Angular** que permite la gestión de clientes. Incluye funcionalidades para listar clientes, agregar nuevos clientes y visualizar un mapa para cada cliente utilizando Google Maps.

## Requisitos previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 16 o superior recomendada): [Descargar Node.js](https://nodejs.org/)
- **Ionic CLI**: Puedes instalarlo globalmente con el siguiente comando:

  ```bash
  npm install -g @ionic/cli
  ```

- **Angular CLI**: Puedes instalarlo globalmente con:

  ```bash
  npm install -g @angular/cli
  ```

- **Google Maps API Key**: Necesitarás una API key válida para utilizar los mapas de Google.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Asegúrate de configurar las variables de entorno en el archivo `environment.ts` dentro de la carpeta `src/environments`. (API url y api key viene preconfigurada)

## Ejecución en modo desarrollo

Para iniciar el servidor de desarrollo y probar la aplicación:

```bash
ionic serve // o en su defecto npm run start
```

Esto abrirá la aplicación en tu navegador predeterminado en `http://localhost:8100` o `http://localhost:4200` si usas npm run start

## Funcionalidades principales

### Lista de clientes
- Muestra una lista de todos los clientes registrados.
- Cada cliente incluye un mapa de Google Maps con su ubicación.

### Registro de clientes
- Permite agregar un nuevo cliente proporcionando un nombre y una dirección.
- La latitud y longitud de la dirección se calculan automáticamente utilizando un servicio backend.

### Menú
- Incluye un menú lateral con navegación a las páginas principales:
    - **Inicio**
    - **Lista de clientes**
    - **Registro de clientes**

## Uso de la aplicación

### Registro de clientes

1. Navega a la página de **Registro de clientes** desde el menú.
2. Ingresa el **nombre** y la **dirección** del cliente.
3. Haz clic en el botón **Registrar**.
4. El cliente será añadido a la lista y su ubicación se mostrará en el mapa.

### Lista de clientes

1. Desde el menú, selecciona **Clientes**.
2. Se mostrará una lista de clientes, cada uno con su mapa correspondiente.

## Generación de producción

Para generar un build de producción, ejecuta:

```bash
ionic build --prod
```

Los archivos se generarán en la carpeta `www`.

## Despliegue

Sigue los pasos de Ionic para desplegar la aplicación en un servidor o dispositivo móvil. Por ejemplo, para desplegar en un dispositivo Android:

```bash
ionic capacitor run android
```

## Dependencias principales

- **Ionic**: Framework para construir aplicaciones híbridas.
- **Angular**: Framework de desarrollo frontend.
- **Google Maps API**: Librería oficial para mapas.
- **RxJS**: Biblioteca para manejo de programación reactiva.
