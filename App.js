import React, { useState } from 'react';
import './App.css';
import Chart from 'chart.js/auto';

function App() {
  const [salary, setSalary] = useState('');
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const totalBudget = categories.reduce((acc, c) => acc + Number(c.amount), 0);
  const remaining = salary - totalBudget;

  const addCategory = () => {
    if (name && amount) {
      setCategories([...categories, { name, amount }]);
      setName('');
      setAmount('');
    }
  };

  return (
    <div className="App">
      <h1>Budget App</h1>
      <input
        type="number"
        placeholder="Maandelijks salaris"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Categorie"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Bedrag"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addCategory}>Toevoegen</button>
      </div>
      <h2>Overzicht</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat.name}: €{cat.amount}</li>
        ))}
      </ul>
      <p><strong>Resterend:</strong> €{remaining}</p>
    </div>
  );
}

export default App;