import { CiMobile3 } from "react-icons/ci";
import { RxDownload } from "react-icons/rx";

const templates = [
  {
    id: 1,
    img: "https://i.ibb.co/1nh89jg/Foodly-Restaurent-App-Template.jpg",
    title: "Foodly Restaurent App Template",
  },
  {
    id: 2,
    img: "https://i.ibb.co/B2cbDmf/Flutter-Animation-Template.jpg",
    title: "Flutter Animation Template",
  },
  {
    id: 3,
    img: "https://i.ibb.co/CBSn1n1/Flutter-Animation-Template-2.jpg",
    title: "Flutter Animation Template",
  },
  {
    id: 4,
    img: "https://i.ibb.co/Lr0JKLC/Flutter-Animation-Template-3.jpg",
    title: "Flutter Animation Template",
  },
  {
    id: 5,
    img: "https://i.ibb.co/XX4S945/Flutter-Animation-Template-4.jpg",
    title: "Flutter Animation Template",
  },
  {
    id: 6,
    img: "https://i.ibb.co/vw4kbBk/Flutter-Animation-Template-5.jpg",
    title: "Flutter Animation Template",
  },
];

const Templates = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl">Templates</h1>
        <button className="text-[#989898] text-sm">See all</button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {templates?.map((template) => (
          <div key={template.id}>
            <img src={template.img} className="rounded-lg" alt="" />

            <div className="flex items-center justify-between my-2">
              <h1 className="font-bold">{template.title}</h1>

              <div className="flex items-center gap-2 text-sm">
                <p className="flex items-center gap-1">
                  <span>
                    <CiMobile3 />
                  </span>
                  <span>28</span>
                </p>
                <p className="flex items-center gap-1">
                  <span>
                    <RxDownload />
                  </span>
                  <span>546</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
