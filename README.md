# Aleph-Hackathon-ZKQuizzer

**zk-Quizzer** es una aplicación de quizzes basada en Zero Knowledge (ZK) que utiliza React para el frontend y Avalanche para el backend. La aplicación permite a los usuarios participar en quizzes interactivos y almacenar la información de manera segura en la blockchain utilizando la tecnología de pruebas de conocimiento cero.

## Características

- **Interfaz de usuario**: Una interfaz amigable y responsiva construida con React y TypeScript.
- **Conexión con MetaMask**: Permite a los usuarios conectarse a su billetera MetaMask para interactuar con la blockchain.
- **Backend en Avalanche**: Utiliza la red Avalanche Fuji para desplegar y gestionar contratos inteligentes.
- **Seguridad y Privacidad**: Implementa tecnología Zero Knowledge para asegurar la privacidad de los usuarios y la integridad de las respuestas.

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, CSS
- **Backend**: Avalanche Fuji
- **Blockchain**: Zero Knowledge Proofs (ZKPs)
- **Wallet**: MetaMask

## Instalación

Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio**:

    ```bash
    https://github.com/jimenezz22/Aleph-Hackathon-ZKQuizzer.git
    cd zk-Quizzer
    ```

2. **Instala las dependencias**:

    ```bash
    npm install
    ```

3. **Ejecuta el proyecto**:

    ```bash
    npm start
    ```

    Esto iniciará el servidor de desarrollo y podrás ver la aplicación en [http://localhost:3000](http://localhost:3000).

## Despliegue

El proyecto está desplegado en Vercel. Puedes acceder a la aplicación en el siguiente enlace:

[zk-Quizzer en Vercel](https://zk-quizzer-m6ghw43s7-jimenezz22s-projects.vercel.app/)

## Uso

1. **Conecta tu billetera MetaMask**: Haz clic en el botón de conexión en la parte superior derecha para conectar tu billetera MetaMask.
2. **Participa en un quiz**: Navega a la sección de quizzes y responde a las preguntas.

## Contratos Inteligentes

El proyecto utiliza contratos inteligentes desplegados en la red Avalanche Fuji. Los contratos están diseñados para gestionar la lógica de los quizzes y asegurar la privacidad de las respuestas. Los contratos están ubicados en el directorio `contracts/` y se despliegan usando Hardhat.

## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, por favor sigue estos pasos:

1. **Haz un fork del repositorio**.
2. **Crea una rama para tu característica**: `git checkout -b mi-nueva-caracteristica`
3. **Realiza tus cambios y haz commit**: `git commit -am 'Añadir nueva característica'`
4. **Envía un pull request**.

Gracias por visitar el repositorio de zk-Quizzer. ¡Esperamos que disfrutes usando nuestra aplicación de quizzes basada en Zero Knowledge para aprender Zero Knowledge