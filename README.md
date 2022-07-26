Sobre Quien quiere ser Solidario?
Quien quiere ser Solidario es una aplicación web que te permite divertirte y entrenar tu agilidad mental a través de preguntas Quiz. ¡Podrás también disfrutar de la compañía de tus amigos e incluso competir contra ellos en un ranking mensual!

Cada mes, se elegirá un ganador (que será el que más puntos tenga), y este decidirá a qué Asociación/Organización irá destinado el premio de ese mes.

Quien quiere ser Solidario?
Imágenes de Inicio de Sesion y el Juego
Login Users Questions

Equipo:
Adrián Pelayo - Product Owner
Sergi Aparicio - Scrum Master
Abde Belkhialat - Developer
Guillermo Labrador - Developer
Juego


Tecnologías Usadas
PHP
Laravel
Laravel Blade Templates
Tailwind CSS
JavaScript (Acciones DOM)
Dependencias para tener el proyecto en local
Para poder clonar este repositorio y poder tener el proyecto en local, como requisitos debéis tener instalados:

Git
Composer
XAMPP para poder tener acceso a una base de datos y su panel de administración
NodeJS
Una vez tengas instaladas estas dependencias en tu ordenador, puedes seguir con el siguiente paso.

Set-Up en Local
Primer paso: Clonar el repositorio
Abrimos una consola en el lugar donde queremos el proyecto. Escribimos:

git clone https://github.com/quien-quiere-ser-solidario/backend.git

Una vez se nos haya clonado, se nos habrá creado una nueva carpeta frontend en la carpeta donde estemos. Para entrar en ella, desde la misma consola escribimos:

cd frontend

Segundo paso: Instalar dependencias
Con la ayuda NPM instalaremos las dependencias que necesita el proyecto para funcionar. Primero de todo, en esa misma consola, escribimos:

npm install

Y para cerciorarnos, podemos escribir una vez acabe:

npm update

Con estos 2 comandos estaremos listos en lo que son las dependencias.

Y con esto, nos vamos al paso cuatro.

Cuarto paso: Crear la base de datos y habilitar XAMPP
Con XAMPP instalado, podemos abrir su panel de control y veremos 5 opciones. Entre ellas, un servidor Apache (servidor web), un servidor MySQL (bases de datos), un servidor FileZilla (conexiónes FTP), un servidor Mercury (conexión Mail) y un servidor Tomcat (Servidor servlets para Java). En nuestro caso nos interesan las dos primeras, así que le daremos a la opción que dice:

Start

En las opciones de Apache y MySQL. Una vez nos ponga el nombre con un fondo verde, y se cambie esa opción a stop, querrá decir que podremos ir ya a:

http://localhost/phpmyadmin

La cual es la página que nos permite XAMPP para manejar nuestro MySQL. Ahí le daremos al botón de la izquierda que dice Nueva con un símbolo cilíndrico y un + verde, y ahí se nos abrirá una página para crear una nueva base de datos. Aquí, pon el nombre que has puesto en el archivo de configuración de variables de entorno en el anterior paso.

Quinto paso: Llenar la base de datos
Una vez nuestra base de datos esté creada, Laravel tenga las variables de entorno bien predefinidas y hayamos instalado las dependencias, llega el punto de nutrir a nuestra base de datos de tablas.

En una consola en el mismo proyecto podemos escribir el comando:

php artisan migrate:fresh

ó, si prefieres usar nuestro generador de datos:

php artisan migrate:fresh --seed

Con esto te creará la estructura de base de datos necesaria como para poder iniciar la aplicación. Por ende ahora podemos escribir, teniendo 2 terminales abiertas en la carpeta de nuestro proyecto:

php artisan serve npm run watch

Una vez inicializados los comandos, veréis el resultado en [http://localhost:8000]

Agradecimientos
Agradecemos a Factoría F5 por nutrirnos de conocimientos para poder llegar a lo que somos, y a nuestro cliente Pablo por el buen trato recibido y el feedback constante.
