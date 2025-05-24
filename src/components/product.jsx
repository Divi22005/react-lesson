export default function Product(props) {
  if (!props.value) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{props.value.name}</h2>
      <h3>{props.value.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}
