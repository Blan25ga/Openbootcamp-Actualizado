import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('Ciclo de vida del componente');
        }, 1000); // cada segundo se ejecuta el ciclo de vida



        return () => {
            console.log('Compononte va a desaparecer')
            clearInterval(intervalID); // cuando el componente desaparezca, se detiene el ciclo de vida


        }
    }, [])


    return (
        <div>

        </div>
    );
}

export default AllCycles;
