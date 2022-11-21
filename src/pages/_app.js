import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";
import { AuthProvider } from "util/auth";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Chat />
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Component {...pageProps} />

          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
