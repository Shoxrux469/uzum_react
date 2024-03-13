import axios from "axios";
import { useQuery } from "react-query";

const BagProdPrices = () => {
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/bag");
    return res.data;
  };

  const { data, isLoading, isError } = useQuery("bag", getData);

  const getPrice = (good) => {
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    const res = data.filter((prod) => +good.id === prod.prod_id);

    const Price = good.price * res[0].num;

    return Price;
  };

  const getRealPrice = (good) => {
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    const res = data.filter((prod) => +good.id === prod.prod_id);
    const realPrice =
      (good.price - Math.floor((good.price * good.salePercentage) / 100)) *
      res[0].num;

    return realPrice;
  };

  return {
    getPrice,
    getRealPrice,
  };
};
export default BagProdPrices;
