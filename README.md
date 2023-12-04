# Proyecto Tolerante a fallas

Proyecto final de la clase de Computación tolerante a fallas 

Universidad de Guadalajara 

Departamento:  Departamento de ciencias computacionales

Nombre del maestro: López Franco Michel Emanuel

Carrera: Ingeniería en computación 

Sección: D06

Ciclo: 23B

Fecha: 4/12/2023

Ingregantes:

-Loredo Padilla Orlando Javier  217560328  

-Portillo Correa Luis Jaime   217546155

-Salcido Aviña Carlos Uriel     217560751



--Calculadora con el uso de istio y soporte para caos-- 

Nuestro programa toma como base una calculadora con sus operaciones basicas con un sistema de conversiones de diferentes sistemas, el objetivo es hacer correr una calculadora mediante la simulación de un contedor usando docker, donde que cada una de sus funciones se aloje como un micoroservicio e implementando kubernetes para ampliar la capacidad de estos. Esto contaría como lo basico ya que implementará istio para manejar la carga de trabajo del programa y caos para comprobar su tolerancia a fallas.


Nuestra calculadora contiene distintos archivos para funcionar, como se mencionó se dividieron por microservicios entonces por funcionamiento dispondremos de distintos archivos los cuales contendrán una función en específico, para esto decidimos trabajar usando JavaScript. Un ejemplo sería el siguiente archivo de JS el cual contiene la función de la conversión de temperaturas, como esta parte la estaremos trabajando desde un mismo usaremos un switch para alternar entre opción que de igual manera se reflejará en la arquitectura del programa.
![image](https://github.com/Orlando-Javier-Loredo-Padilla/Proyecto-Tolerante-a-fallas/assets/123122353/170aa849-a22f-4bfc-9f8c-3db35abbad0d)



