import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Map from "~/components/Map/Map";
import Layout from "./layout";
import { type ReactElement } from "react";
import NavbarLayout from "./shared/NavbarLayout";
import List from "~/components/List/List";
import { HARDCODED_CATEGORY, HARDCODED_CITY } from "~/utils/consts";

export default function Home({
  restaurants,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Ksiazulo App</title>
        <meta name="description" content="Ksiazulo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full w-full justify-between">
        <List restaurants={restaurants} />
        <Map restaurants={restaurants} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  RestaurantProps
> = async () => {
  const restaurantsResponse = await fetch(
    "http://localhost:8080/api/v1/restaurants"
  );
  const restaurantsData = (await restaurantsResponse.json()) as RestaurantsData;

  const positionsResponse = await fetch("http:localhost:8080/api/v1/positions");
  const positionsData = (await positionsResponse.json()) as Position[];

  // TODO: Make it fetch this data from the backend
  // const categoriesResponse = await fetch("http:localhost:8080/api/v1/categories");
  // const categoriesData = (await positionsResponse.json()) as Category[];

  // const citiesResponse = await fetch("http:localhost:8080/api/v1/cities");
  // const citiesData = (await positionsResponse.json()) as City[];

  const restaurants: Restaurant[] = restaurantsData.content.map(
    (restaurant) => {
      const position = positionsData.find(
        (position) => position.id === restaurant.positionId
      ) as Position;

      // const category = categoriesData.find(
      //   (category) => category.id === restaurant.categoryId
      // ) as Category;

      // const city = citiesData.find(
      //   (city) => city.id === restaurant.cityId
      // ) as City;

      //  TODO: Make it use fetched data
      return {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        latitude: position.latitude,
        longitude: position.longitude,
        ytUrl: restaurant.ytUrl,
        category: HARDCODED_CATEGORY,
        city: HARDCODED_CITY,
      };
    }
  );

  return { props: { restaurants } };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavbarLayout>
      <Layout>{page}</Layout>
    </NavbarLayout>
  );
};

// const [bounds, setBounds] = useState<{ ne: number; sw: number } | null>(null);
