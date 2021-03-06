import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile/MiniProfile";
import Posts from "./Posts/Posts";
import Stroies from "./Stroies/Stroies";
import Suggestions from "./Suggestions/Suggestions";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-4xl xl:grid-cols-3 ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        <Stroies />
        <Posts />
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
