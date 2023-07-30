import { type Session } from "next-auth";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const mainFont = Montserrat({ subsets: ["latin"] });

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main style={mainFont.style}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
};

export default MyApp;
