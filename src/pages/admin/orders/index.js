import { getOrders } from '@/axios/axiosApi';
import { OrdersAdmin } from '@/components/ADMIN/OrdersAdmin/OrdersAdmin';

export const getServerSideProps = async () => {
  const orders = await getOrders();
  return { props: { orders } };
};

const Category = ({ orders }) => {
  return <OrdersAdmin orders={orders} />;
};

export default Category;
