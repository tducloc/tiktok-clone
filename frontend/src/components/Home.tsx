import { useGetUserByIdQuery } from "redux/services/example";

const Home = () => {
  const { data, isLoading } = useGetUserByIdQuery(1);

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen bg-red-300 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">Welcome to the home page</h1>
      <p>User: {data.name}</p>
      <p className="text-blue-950">Email: {data.email}</p>
    </div>
  );
};

export default Home;
