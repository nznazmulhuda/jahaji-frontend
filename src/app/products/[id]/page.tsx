function SingleProductPage() {
  return (
    <div>SingleProductPage</div>
  )
}

export default SingleProductPage

export async function generateStaticParams() {
  const products = await fetch("http://localhost:5000").then((res) =>
    res.json()
  );

  return products.map((product: { id: string }) => ({
    id: product.id,
  }));
}
