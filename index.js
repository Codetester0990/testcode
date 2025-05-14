import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data.stores);
  };

  return (
    <div>
      <h1>Target Stock Scout</h1>
      <input
        placeholder="Search item, DPCI, or UPC"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>
      {results.map((store, i) => (
        <div key={i}>
          <h3>{store.name}</h3>
          <p>{store.stock}</p>
          <p>{store.address}</p>
          <p>{store.distance} miles away</p>
        </div>
      ))}
    </div>
  );
}