import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import StoreProvider from "../components/StoreProvider";
import { getFaceFromQuery } from "@/features/fumoFaceSlice";
import FaceUrlChanger from "@/components/appcontrols/FaceUrlChanger";
import { getFaceOptions } from "@/requests/backend";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {
  const facePartInfo = await getFaceOptions();
  const fumoFace = getFaceFromQuery(searchParams, facePartInfo.count);

  return (
    <StoreProvider initialState={{ fumoFace }}>
      <FaceUrlChanger />
      <div className="content">
        <Header />
        <Content facePartInfo={facePartInfo} />
        <Footer />
      </div>
    </StoreProvider>
  );
}
