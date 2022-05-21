npm: Sistema de gestion de paquetes para Node.js

Node: Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google

ver las versiones:
node -v
npm -v

instalar la ultma version:
npm install -g npm@lastest

instalar aproduccion(--save) y local -dev:
npm install moment --save-dev

En vez de copiar install se puede copiar i:
npm i date-fns -D
npm i moment -S

Instalacion de forma global:
sudo npm install -g nodemon //Nodemon es la dependencia

Ver los que estan instaldos de forma global:
npm list -g --depth 0

simular la instalacion de algo:
npm install react -dry-run

Forzar la instalcion de algo:
npm install webpack -f

instalar una version especifica:
npm install json-server@0.15.0

ver todos los paquetes del proyecto:
npm list

ver paquetes desactualizados:
npm outdate

ver todo el output de data como va a los servidores y mira todo:
npm outdate --dd

Para actualizar los paquetes
npm update

update de un paquete en particular:
npm install json-server@latest

Desisntalar paquetes:
npm uninstall json-server

desnisntalar un paquete pero sin eliminarlo del package jason:
npm uninstall webpack --no-save

para bajar un repositorio en git y entrar en ella
git clone +url+ && dc +nombre del repositorio 

versionado ej:
3.9.2 (3 es la etrcera version el cambio mayor, 9 es el cambio menor sin ser una version nueva ^, 2 parche bug-fixes ~)

seccion scrips en json:
los scrips son comandos para ejecutard esde la consola

se puede cerar una porpio ej:
"hola:" "node",
"deploy": "npm run format && npm run build" //Dos comandos  
para ejecutarlos se usa: npm run hola

Solucion de Errores:

npm run build -dd //mirar que esta pasandaaaa en build
En caso de que haya un error en el script build npm run build va a salir npm ERR!
si se ejecuta con el -dd tambien saldara el error al final

Eliminar el cache
npm cache clear --force

verificar que si este limpio
npm cache verify

Elimianr una carpeta:
rm -rf node_modules/

Si se instalo con rimraf, se puede eliminar la carpeta con
sudo npm install -g rimfar