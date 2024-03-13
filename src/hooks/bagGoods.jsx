import axios from "axios";
import { useQuery } from "react-query";

const BagGoods = () => {
  const {
    data: bagGoods,
    isLoading: bagLoading,
    isError: bagError,
  } = useQuery("bagData", async () => {
    try {
      const response = await axios.get("http://localhost:3001/bag");
      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.log("error fetching data", e);
    }
  });
  const {
    data: Goods,
    isLoading: goodsLoading,
    isError: goodsError,
  } = useQuery("goodsData", () => {
    try {
      const response = axios.get("http://localhost:3001/goods");
      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.log("error fetching data", e);
    }
  });

  if (bagLoading || goodsLoading) return <div>Loading...</div>;
  if (bagError || goodsError) return <div>Error fetching data</div>;

  const res =
    Goods || bagGoods
      ? Goods.filter((goodsItem) =>
          bagGoods.some((bagItem) => +goodsItem.id === bagItem.prod_id)
        )
      : [];

  return res;
};

export default BagGoods;
