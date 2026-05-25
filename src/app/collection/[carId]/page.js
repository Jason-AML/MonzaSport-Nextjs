import Detail from "./Detail";

const page = async ({ params }) => {
  const { carId } = await params;

  return <Detail carId={carId} />;
};

export default page;
