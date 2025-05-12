import React, { useEffect, useState } from 'react';

const LandingPage = () =>{
const [storeData, setStoreData] = useState(null);
useEffect(()=>{
    fetch('https://mock.apidog.com/m1/914149-896526-default/store')
    .then((response) => response.json())
    .then((data) => setStoreData(data.store))
    .catch((error) => console.error('Error fetching data:', error));
},[]);
if(!storeData){
    return <div>Cargando datos</div>
}
return(
    <div>
        <h1>Bienvenido a la tienda</h1>
        <h2>Productos</h2>
    </div>
);
};
export default LandingPage;