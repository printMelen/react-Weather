import React, { useState, useEffect } from 'react';

const CardError = (props) => {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  useEffect(() => {
    if (props.error) {
      setMostrarComponente(true);
      const timeout = setTimeout(() => {
        setMostrarComponente(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [props.error]);

  return (
    <div>
      {mostrarComponente && (
        <div>
          <h1>Error: la ciudad o país que has introducido no existe 😑😔</h1>
        </div>
      )}
    </div>
  );
};

export default CardError;
