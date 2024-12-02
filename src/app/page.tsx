import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link className="cursor-pointer" href="/documents/123">
        {" "}
        <Button> Click Here</Button>
      </Link>{" "}
    </div>
  );
};

export default Home;
