// // src/pages/ActivityDetail.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ActivityDetail = () => {
//   const { id } = useParams(); // Obtiene el ID de la actividad desde la URL
//   const [activity, setActivity] = useState(null);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:3658/m1/914149-896526-default/activities/${id}`)
//       .then((res) => res.json())
//       .then((data) => setActivity(data))
//       .catch((err) => console.error('Error fetching activity details:', err));
//   }, [id]);

//   if (!activity) {
//     return <p>Cargando detalles de la actividad...</p>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1>{activity.name}</h1>
//       <img
//         src={activity.images[0]}
//         alt={activity.name}
//         className="img-fluid mb-4"
//         style={{ maxHeight: '400px', objectFit: 'cover' }}
//       />
//       <p><strong>Tipo:</strong> {activity.type}</p>
//       <p><strong>Precio:</strong> ${activity.price}</p>
//       <p><strong>Descripción:</strong> {activity.long_description}</p>
//     </div>
//   );
// };

// export default ActivityDetail;