function SingleProductPage() {
  return (
    <div>SingleProductPage</div>
  )
}

export default SingleProductPage

export async function generateStaticParams() {
  const products = await fetch("https://betbuzz365aglistserverlive.vercel.app/api/v1/master_agent").then((res) =>
    res.json()
  );

  return products.map((product: { id: string }) => ({
    id: product.id,
  }));
}
