


# Prueba Bimestral - Consumo de apis de perros, robots y libros con ionic angular y firebase📱

## Equipo de desarrollo

- [@Luis Guaygua](https://github.com/Kr-luis)

**De click [@aqui](https://github.com/Kr-luis/Bimestral_DAM/blob/master/app-debug.apk) para descargar la aplicación**


## Capturas de Pantalla 📸

### Lista de perros, robots y libros

![perros](https://github.com/Kr-luis/Bimestral_DAM/blob/master/src/assets/Capturas/perros.jpeg?raw=true)

### Cloud Storage

![storage](https://github.com/Kr-luis/Bimestral_DAM/blob/master/src/assets/Capturas/firebase.jpeg?raw=true)


## Pasos para configurar el Proyecto en Ionic 

1. Crear el proyecto en IONIC:
   ```bash
   ionic start nombre_aplicacion blank --type=angular
2. Entrar en el proyecto
    ```bash
    cd nombre_aplicacion
3. Dentro de de la carpeta del proyecto
   ```bash
   npm install @angular/common @angular/http, puede que deba usar --force
3. Instalar servvidores 
   ```bash
   onic generate service services/data
4. Añadir Firebase al proyecto 
   ```bash
   ng add @angular/fire o npm install @angular/fire
## Construir APK
1. Construir apkConstruir apk
   ```bash
   ionic build
2. Añadir capacitor de android
   ```bash
   ionic cap add android
