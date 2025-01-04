import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import StoreProvider from "../components/StoreProvider";
import { getFaceFromQuery } from "@/features/fumoFaceSlice";
import FaceUrlChanger from "@/components/appcontrols/FaceUrlChanger";
import { getFaceOptions } from "@/requests/backend";

let faceOptions = null;

export default async function Home({ searchParams }) {
  if (faceOptions === null) {
    faceOptions = await getFaceOptions();
  }
  const fumoFace = getFaceFromQuery(searchParams, faceOptions);

  return (
    <StoreProvider initialState={{ fumoFace }}>
      <FaceUrlChanger />
      <div className={"content"}>
        <Header />
        <Content faceOptions={faceOptions} />
        <Footer />
      </div>
    </StoreProvider>
  );
}
