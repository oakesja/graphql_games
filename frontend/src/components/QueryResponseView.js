export default function QueryResponseView({ data, loading, error, children }) {
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  return children(data);
}
