export default function Page({ params }) {
  return (
    <div>
      <h1>Project data</h1>

      <h1>
        Name:
        {params.slug}
      </h1>
    </div>
  );
}
