# PawHome 🐾

Landing Page desarrollada con React y Vite para promover la adopción responsable de mascotas.

## Descripción

PawHome es una página web informativa que permite presentar información sobre adopción de mascotas, historias de éxito y estadísticas relacionadas con refugios y adopciones.

## Tecnologías utilizadas

- React
- Vite
- CSS3
- Docker
- Google Cloud Run

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd nombre-del-proyecto
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Construcción para producción

Generar la carpeta de distribución:

```bash
npm run build
```

Previsualizar el proyecto:

```bash
npm run preview
```

## Docker

Construir la imagen:

```bash
docker build -t landing-react .
```

Ejecutar el contenedor:

```bash
docker run -p 8080:8080 landing-react
```

La aplicación estará disponible en:

```text
http://localhost:8080
```

## Despliegue

La aplicación está preparada para ser desplegada en Google Cloud Run mediante Docker.

## Estructura del proyecto

```Landing Page
├── public/
├── src/
├── Dockerfile
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```
