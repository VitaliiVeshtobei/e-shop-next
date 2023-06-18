import { Title, Wrap, Container } from './Order.styled';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import Summary from './Summary/Summary';
import OrderDetails from './OrderDetails/OrderDetails';

const Order = () => {
  return (
    <div>
      <Title>Оформлення замовлення</Title>
      <Container>
        <Wrap>
          <OrderDetails />
          <ContactsInfo />
          <DeliveryInfo />
          <PaymentInfo />
        </Wrap>
        <Summary />
      </Container>
    </div>
  );
};

export default Order;
