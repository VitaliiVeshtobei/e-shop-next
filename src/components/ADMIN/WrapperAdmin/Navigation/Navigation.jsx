import { MdOutlineManageAccounts, MdGroups, MdStorage, MdWifiProtectedSetup, MdAttribution } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { Wrapper, Button, IconWrapper } from './Navigation.styled';

export const Navigation = ({ activeButtonIndex, handleButtonClick }) => {
  const listBtn = [
    {
      id: 'category',
      name: 'Категорії',
      route: '/admin/category',
      icon: <BiCategory />,
    },

    {
      id: 'admin-panel',
      name: 'Адміністраторська панель',
      route: '/admin/admin-panel',
      icon: <MdStorage />,
    },
    {
      id: 'users',
      name: 'Користувачі',
      route: '/admin/users',
      icon: <MdGroups />,
    },
    { id: 'statistics', name: 'Налаштування', route: '/admin/statistics', icon: <MdOutlineManageAccounts /> },
    { id: 'event-log', name: 'Журнал подій', route: '/admin/event-log', icon: <MdWifiProtectedSetup /> },
    { id: 'support', name: 'Підтримка', route: '/admin/support', icon: <MdAttribution /> },
  ];

  return (
    <Wrapper>
      {listBtn.map(({ id, name, route, icon }) => (
        <Button
          key={id}
          id={id}
          active={activeButtonIndex}
          onClick={() => handleButtonClick(id, route)}
        >
          <IconWrapper>{icon}</IconWrapper>
          {name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Navigation;
