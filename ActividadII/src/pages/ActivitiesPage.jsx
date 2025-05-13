// src/pages/ActivitiesPage.jsx
import React, { useEffect, useState } from 'react';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3658/m1/914149-896526-default/activities')
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div>
      <h1>Actividades</h1>
      {activities.map((activity) => (
        <div key={activity.activity_id}>
          <h2>{activity.name}</h2>
          <p><strong>Tipo:</strong> {activity.type}</p>
          <p><strong>Precio:</strong> ${activity.price}</p>
          <p>{activity.short_description}</p>
          <img src={activity.images[0]} alt={activity.name} style={{ width: '300px' }} />
        </div>
      ))}
    </div>
  );
};

export default ActivitiesPage;
