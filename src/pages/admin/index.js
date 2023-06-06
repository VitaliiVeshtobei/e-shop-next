import { wrapper } from '@/redux/store';

const Admin = () => {
  return null; // Порожній компонент, оскільки ми виконаємо редірект на сервері
};

export const getServerSideProps = wrapper.getServerSideProps((store) => ({ req, res, ...etc }) => {
  const role = store.getState().user.role;

  return {
    redirect: {
      destination: `${role !== 'ADMIN' ? '/' : '/admin/admin-panel'}`,
      permanent: false, // Зробити редірект тимчасовим (302)
    },
  };
});

export default Admin;
