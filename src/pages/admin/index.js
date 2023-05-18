import { useRouter } from 'next/router';

const Admin = () => {
  const router = useRouter();

  return null; // Порожній компонент, оскільки ми виконаємо редірект на сервері
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/admin/admin-panel',
      permanent: false, // Зробити редірект тимчасовим (302)
    },
  };
}

export default Admin;
