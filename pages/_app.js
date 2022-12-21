import '../styles/globals.css'

function MyApp({Component, papeProps}) {
  return (
    <div>
      <Component {...papeProps} />{" "}
      <footer>
        <p>@ 2021 AIDEN TRAN</p>
      </footer>
    </div>
  );
}

export default MyApp;

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
