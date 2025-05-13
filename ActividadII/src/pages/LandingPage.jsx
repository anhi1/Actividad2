import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [storeData, setStoreData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await fetch(
          "https://mock.apidog.com/m1/914149-896526-default/store"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStoreData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("No se pudo cargar la información de la tienda.");
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  if (loading) return <p>Cargando datos de la tienda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{storeData.name}</h1>
      <img src={storeData.image} alt="Imagen" />

      <p><strong>Dirección:</strong>
        {storeData.address.street}
        {storeData.address.city}
      </p>
      <p><strong>Contacto:</strong>
        {storeData.contact.phone} -
        {storeData.contact.email}
      </p>
      <p><strong>Horario viernes:</strong>
        {storeData.hours.friday}
      </p>
      <p><strong>Descripción:</strong>
        {storeData.additional_info.description}
      </p>
      <button>Ir a Actividades</button>    
      </div>
  );
};

export default LandingPage;
