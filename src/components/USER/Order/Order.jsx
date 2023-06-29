import { Title, Wrap, Container } from './Order.styled';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import Summary from './Summary/Summary';
import OrderDetails from './OrderDetails/OrderDetails';
import { OrderConfirmationModal } from './OrderConfirmationModal/OrderConfirmationModal';
import { useState } from 'react';

const Order = () => {
  const [showOrderConfirmModal, setShowOrderConfirmModal] = useState(false);
  return (
    <div>
      <Title>Оформлення замовлення</Title>
      <Container>
        <Wrap>
          <ContactsInfo />
          <DeliveryInfo />
          <PaymentInfo />
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
