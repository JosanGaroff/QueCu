# QueCu

## Pasos para hacer buen uso de Git

Primero, hay que tener el repositorio en local, con el comando:

```bash
git clone https://github.com/JosanGaroff/QueCu
```
> Nota: Comprobar que estamos en la rama correcta: debe ser "javaee"

Una vez tenemos el repositorio clonado en local, hacemos los cambios en cualquier archivo, pero para no interferir en el trabajo de los demás y que todo se sincronice bien, siempre que terminemos de editar y queramos subirlo al repositorio debemos seguir los siguientes pasos:

> Nota: Es importante hacer todos los pasos, sin que pase mucho tiempo, pues alguien podría actualizar el repositorio mientras lo hacemos. Si se tarda más de la cuenta, antes de subir, repetir los pasos desde el ```git pull``` para comprobar que está todo correcto.

1. Comprobar los cambios.

```bash
git status
```

Si lo que aparecen líneas en color rojo, significa que se han modificado esos ficheros (los cuales deberían de corresponderse con los ficheros que hemos actualizado nosotros), sin que se hayan registrado los cambios para el siguiente commit.

2. Actualizamos nuestro repositorio local, por si alguien ha realizado algún commit nuevo.

```bash
git pull
```

Si alguien ha realizado cambios, es posible que se produzcan colisiones, las cuales habrá que corregir en los archivos antes de continuar.

3. Añadimos los archivos para el commit.

```bash
git add -u      #Si solo hemos modificado archivos existentes.
git add --all   #Si hemos añadido archivos nuevos. Hay que tener cuidado con esto.
```

4. Comprobar que se han registrado los cambios.

```bash
git status
```

El resultado debería ser el mismo que la primera vez que ejecutamos este comando pero con las líneas en color verde.

5. Hacemos commit.

```bash
git commit -m "nombre_del_comit"
```

6. Lo subimos a GitHub.

```bash
git push
```
