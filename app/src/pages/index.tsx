import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import Map from "~/components/Map/Map";
import Layout from "./layout";
import { type ReactElement } from "react";
import NavbarLayout from "./shared/NavbarLayout";
import List from "~/components/List/List";

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

  const restaurants: Restaurant[] = restaurantsData.content.map(
    (restaurant) => {
      const position = positionsData.find(
        (position) => position.id === restaurant.positionId
      ) as Position;

      return {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        latitude: position.latitude,
        longitude: position.longitude,
        ytUrl: restaurant.ytUrl,
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
