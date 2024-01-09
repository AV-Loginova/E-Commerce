import LikesElement from "./LikesElement";

export default function Likes() {
  let likes = JSON.parse(localStorage.getItem("likes"));
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Your likes</h1>
      {likes?.map((like, index) => {
        return (
          <LikesElement
            key={index}
            props={JSON.parse(localStorage.getItem(like))}
          />
        );
      })}
    </div>
  );
}
