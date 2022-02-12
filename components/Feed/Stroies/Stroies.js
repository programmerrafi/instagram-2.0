import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story/Story";
import { profileImg } from "./profileImg/profileImg";
import { useSession } from "next-auth/react";

function Stroies() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = profileImg.map((img) => ({
      ...faker.helpers.contextualCard(),
      id: img.id,
      img: img.imgUrl,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions?.map((profile) => (
        <Story
          key={profile?.id}
          img={profile?.img}
          username={profile?.username}
        />
      ))}
    </div>
  );
}

export default Stroies;
