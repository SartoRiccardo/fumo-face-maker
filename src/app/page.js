import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import StoreProvider from "../components/StoreProvider";
import { getFaceFromQuery } from "@/features/fumoFaceSlice";

async function getFaceOptions() {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + "/face/list");
  return await response.json();
}
let faceOptions = null;

export default async function Home({ searchParams }) {
  if (faceOptions === null) {
    faceOptions = await getFaceOptions();
    console.log(faceOptions);
  }
  const fumoFace = getFaceFromQuery(searchParams, faceOptions);

  return (
    <StoreProvider initialState={{ fumoFace }}>
      <div className={"content"}>
        <Header />
        <Content faceOptions={faceOptions} />
        <Footer />
      </div>
    </StoreProvider>
  );
}
