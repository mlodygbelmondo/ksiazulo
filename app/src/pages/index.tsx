import Head from "next/head";
import Map from "~/components/Map/Map";
import Layout from "./layout";
import { type ReactElement } from "react";
import NavbarLayout from "./shared/NavbarLayout";
import List from "~/components/List/List";
import { restaurants } from "~/utils/consts/restaurants";
export default function Home() {
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

// export const getServerSideProps: GetServerSideProps<
//   RestaurantProps
// > = async () => {
//   const restaurantsFile = await fs.readFile(
//     env.NEXT_PUBLIC_RESTAURANTS_JSON_PATH,
//     "utf-8"
//   );

//   const restaurants = JSON.parse(restaurantsFile) as Restaurant[];

//   return { props: { restaurants } };
// };

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavbarLayout>
      <Layout>{page}</Layout>
    </NavbarLayout>
  );
};
