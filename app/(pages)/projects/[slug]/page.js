export default function Page({ params }) {
  return (
    <div>
      <h1>
        Name:
        {params.slug}
      </h1>
      <h1 className="text-orange-500">page currently in development</h1>
    </div>
  );
}
