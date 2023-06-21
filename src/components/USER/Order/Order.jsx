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
          <ContactsInfo />
          <DeliveryInfo />
          <PaymentInfo />
        </Wrap>
        <div>
          <OrderDetails />
          <Summary />
        </div>
      </Container>
    </div>
  );
};

export default Order;
