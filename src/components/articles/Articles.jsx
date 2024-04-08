import { RxDotFilled } from "react-icons/rx";

const articles = [
  {
    id: 1,
    img: "https://i.ibb.co/6D1gBJL/Learn-Flutter-animation.jpg",
    title: "Learn Flutter animation",
    date: "Mar 24, 2024",
    category: "Animation",
  },
  {
    id: 2,
    img: "https://i.ibb.co/JRD0tNc/Onboarding-Screen-with-Carousel-Animated-Dots.jpg",
    title: "Onboarding Screen with Carousel & Animated Dots",
    date: "Mar 24, 2024",
    category: "Animation",
  },
  {
    id: 3,
    img: "https://i.ibb.co/92tfmxY/Parallax-Scroll-Effect-with-Page-View-in-Flutter.jpg",
    title: "Parallax Scroll Effect with PageView in Flutter",
    date: "Mar 24, 2024",
    category: "Animation",
  },
];

const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl">Articles</h1>
        <button className="text-[#989898] text-sm">See all</button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles?.map((article) => (
          <div key={article.id}>
            <img src={article.img} className="rounded-lg" alt="" />

            <div>
              <div className="flex items-center gap-1 text-sm text-[#989898] my-1">
                <p>{article.date}</p>
                <RxDotFilled className="text-[#F0F0F0] text-lg" />
                <p>{article.category}</p>
              </div>
              <h1 className="font-bold">{article.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
