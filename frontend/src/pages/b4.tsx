import CountriesTable from "../components/countriesTable";
const B4 = () => {
  return (
    <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
      <h1 className="text-5xl font-bold mt-0 mb-6">OTOT TASK B4</h1>
      <h4 className="text-5xl font-bold mt-0 mb-6">
        List of Countries pulled via serverless function on AWS Lambda
      </h4>
      <CountriesTable />
    </div>
  );
};

export default B4;
