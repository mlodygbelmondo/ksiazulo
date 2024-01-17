import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { promises as fs } from "fs";
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
        <title>Muala</title>
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
  const restaurantsFile = await fs.readFile(
    "app/src/data/restaurants.json",
    "utf-8"
  );

  const restaurants = JSON.parse(restaurantsFile) as Restaurant[];

  return { props: { restaurants } };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavbarLayout>
      <Layout>{page}</Layout>
    </NavbarLayout>
  );
};
