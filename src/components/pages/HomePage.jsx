import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Carousel />
    </div>
  );
}
