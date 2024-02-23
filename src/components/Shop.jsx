import { useState, useEffect } from 'react';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getGoods() {}, []);

  return <main className="container content">Shop</main>;
}

export { Shop };
