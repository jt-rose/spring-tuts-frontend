import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <style>
          {`
        body {
          padding: 0;
          margin: 0;
          background: #f9fbf8;
        }

        * {
          box-sizing: border-box;
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          color: #222;
        }
      `}
        </style>
      </LocalizationProvider>
    </>
  );
}

export default MyApp;
