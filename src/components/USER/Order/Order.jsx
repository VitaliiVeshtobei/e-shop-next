import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ContactsInfo from './ContactsInfo/ContactsInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import Summary from './Summary/Summary';
import OrderDetails from './OrderDetails/OrderDetails';
import { OrderConfirmationModal } from './OrderConfirmationModal/OrderConfirmationModal';
import Comments from './Comments/Comments';

import { Title, Wrap, Container } from './Order.styled';
import { clearOrder } from '@/redux/products/slice';

const Order = () => {
  const [showOrderConfirmModal, setShowOrderConfirmModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const clearState = () => {
      dispatch(clearOrder());
    };

    return clearState;
  }, []);
  return (
    <div>
      <Title>Оформлення замовлення</Title>
      <Container>
        <Wrap>
          <ContactsInfo />
          <DeliveryInfo />
          <PaymentInfo />
          <Comments />
        </Wrap>
        <div>
          <OrderDetails />
          <Summary setShowOrderConfirmModal={setShowOrderConfirmModal} />
        </div>
      </Container>
      {showOrderConfirmModal && <OrderConfirmationModal />}
    </div>
  );
};

export default Order;
