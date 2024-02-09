import Image from "next/image";
import App from "./App";
import { BiodataProvider } from "./BiodataContext";




export default function Home() {
  return (
    <BiodataProvider>
      <App />
    </BiodataProvider>
  );
}
