import { Categories, HomeLayout, StoreHeader } from "@/components";
import HomeContainer from "@/containers/HomeContainer";

export default function Home() {
  return (
    <HomeLayout>
      <Categories />
      <StoreHeader />
      <HomeContainer />
    </HomeLayout>
   );
}
