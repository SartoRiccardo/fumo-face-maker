import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

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
