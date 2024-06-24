import { Helmet } from "react-helmet-async";

import { MounthRevenueCard } from "./month-revenue-card";
import { MounthOrdersAmountCard } from "./mounth-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MounthCanceledOrdersAmountCard } from "./mounth-canceled-orders-amount";
import { RevenueChart } from "./revenue-chart";
import { PopularProductsChart } from "./popular-products-chart";

// import { Orders } from "../orders/orders";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      {/* <Orders /> */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MounthRevenueCard />
          <MounthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MounthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-8 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
