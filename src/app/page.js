import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";

async function getFaceOptions() {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + "/face/list");
  return await response.json();
}

export default async function Home() {
  const faceOptions = await getFaceOptions();

  return (
    <div className={"content"}>
      <Header />
      <Content faceOptions={faceOptions} />
      <Footer />
    </div>
  );
}
