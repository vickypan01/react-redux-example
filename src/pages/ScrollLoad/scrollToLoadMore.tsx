import React from "react";
import { useGetRealTimeStockMarketPricesLatestQuery } from "../../Features/Services/market_stackapi";

const ScrollToLoadMore = () => {
  const {
    data: realTimeStockMarketPricesLatestData,
    isLoading,
    isError,
  } = useGetRealTimeStockMarketPricesLatestQuery("MSFT");
  console.log(
    "realTimeStockMarketPricesLatestData",
    realTimeStockMarketPricesLatestData,
  );
  return (
    <div>
      <h1 className="display-6">Scroll to Load More</h1>
    </div>
  );
};

export default ScrollToLoadMore;
