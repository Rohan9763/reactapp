import React from "react";

function App() {
  const car = {
    name: "Tesla Model S",
    brand: "Tesla",
    year: 2024,
    price: 79999,
    color: "Red"
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{car.name}</h1>
        <p><strong>Brand:</strong> {car.brand}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Price:</strong> ${car.price}</p>
        <p><strong>Color:</strong> {car.color}</p>
        <button style={styles.button}>Buy Now</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4"
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px"
  },
  title: {
    marginBottom: "15px"
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer"
  }
};

export default App;
