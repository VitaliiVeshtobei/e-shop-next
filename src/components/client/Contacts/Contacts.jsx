import { Link, Info, Name, Container, Title, Text, Map } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <Name>Контакти</Name>
      <Container>
        <div>
          <Info>
            <Title>Україна, м. Київ, вул. Вишгородська 30 </Title>
          </Info>
          <Info>
            <Title>Графік роботи кол-центру:</Title>
            <Text>Пн-Нд: 08:00 – 20:00</Text>
          </Info>
          <Info>
            <Title>Графік роботи пункту самовивізу:</Title>
            <Text>Пн-Нд: 9:00 – 18:00</Text>
            <Text>Попередити за годину до приїзду</Text>
          </Info>
          <Info>
            <Link href="tel:+380666125324">+380 (66) 612-53-24</Link>

            <Link href="mailto:victar@gmail.com">victar@gmail.com</Link>
          </Info>
          <Title>Замовлення приймаються цілодобово. </Title>
          <Title>Все буде Україна!</Title>
        </div>
        <div>
          <Map>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5074.960869193216!2d30.452067999999997!3d50.506627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd805cce0479%3A0x10633a7c523a44f6!2z0LLRg9C70LjRhtGPINCS0LjRiNCz0L7RgNC-0LTRgdGM0LrQsCwgMzAsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1683316207429!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
        </div>
      </Container>
    </>
  );
};

export default Contacts;
