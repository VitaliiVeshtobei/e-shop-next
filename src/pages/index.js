import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Benefits } from '@/components/Benefits/Benefits';
import { SliderFeedbacks } from '@/components/SliderFeedbacks/SliderFeedbacks';
import { Categories } from '@/components/Categories/Categories';
import { instance } from '@/axios/axiosDefault';
import { getCategories } from '@/redux/products/slice';
import { Slider } from '@/components/Slider/Slider';

// export async function getServerSideProps() {
//   const response = await instance('/groups/list');
//   const data = response.data.groups.slice(0, response.data.groups.length - 1);

//   return {
//     props: { data },
//   };
// }
export async function getServerSideProps() {
  try {
    const response = await instance('/groups/list');
    const data = response.data.groups.slice(0, response.data.groups.length - 1);

    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: [] },
    };
  }
}

export default function Home({ data }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories(data));
  }, [data, dispatch]);

  return (
    <>
      <Head>
        <title>VicTar</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      {
        <>
          <Slider />
          <Categories />
          {/* <Benefits />
          <SliderFeedbacks /> */}
        </>
      }
    </>
  );
}
