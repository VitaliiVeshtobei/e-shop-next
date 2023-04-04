import list from '../../../assets/bd/graphics.json';
import { Table, Td, Th, Text } from './Graphics.styled';

export const Graphics = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>День </Th>
            <Th>Година роботи</Th>
            <Th>Перерва</Th>
          </tr>
        </thead>

        <tbody style={{ border: 'solid 1px red' }}>
          {list.map((item) => (
            <tr key={item.day}>
              <Td>{item.day}</Td>
              <Td>{item.time}</Td>
              <Td>{''}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Text>* Час вказано для регіону: Україна, Київ</Text>
    </>
  );
};
