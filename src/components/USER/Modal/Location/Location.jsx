import { Iframe, Text } from './Location.styled';

export const Location = () => {
  return (
    <>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.4804560916327!2d30.452067699999997!3d50.5066266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd805cce0479%3A0x10633a7c523a44f6!2z0LLRg9C70LjRhtGPINCS0LjRiNCz0L7RgNC-0LTRgdGM0LrQsCwgMzAsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1680119000739!5m2!1suk!2sua"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe>
      <Text>
        Адрес:<span> Київ, вул. Вишгородська 30, Київ, Україна</span>
      </Text>
    </>
  );
};
