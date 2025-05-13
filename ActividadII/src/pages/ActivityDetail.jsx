// src/pages/ActivityDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Usamos el endpoint general que ya tienes
    fetch('http://127.0.0.1:3658/m1/914149-896526-default/activities')
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo obtener la lista de actividades');
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((item) => item.activity_id === parseInt(id));
        if (found) {
          setActivity(found);
        } else {
          setError('Actividad no encontrada');
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
      });
  }, [id]);

  if (error) return <p className="text-danger">Error: {error}</p>;
  if (!activity) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">
      <h1>{activity.name}</h1>
      <p><strong>Tipo:</strong> {activity.type}</p>
      <p><strong>Precio:</strong> ${activity.price}</p>
      <p>{activity.long_description}</p>
      <div className="row">
        {activity.images.map((img, idx) => (
          <div className="col-md-6" key={idx}>
            <img src={img} alt={activity.name} className="img-fluid mb-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityDetail;
