import diwali_cleaning from "../assets/videos/Diwali_cleaning.mp4";
import "../style/homeserv.css";
const HomeService = () => {
  const services = [
    { icon: "", title: "home cleaning", link: "", offer: "Upto 60% off*" },
    { icon: "", title: "packers & movers", link: "", offer: "lowest quote*" },
    { icon: "", title: "city tempo", link: "", offer: "Starts @ ₹210" },
    { icon: "", title: "painting", link: "", offer: "flat 25% off" },
    { icon: "", title: "plumbing", link: "", offer: "" },
    { icon: "", title: "electrician", link: "", offer: "" },
    { icon: "", title: "carpentry", link: "", offer: "" },
    { icon: "", title: "weekly cleaning", link: "", offer: "₹ 180/service" },
    { icon: "", title: "bathroom cleaning", link: "", offer: "Starts @ ₹359" },
    { icon: "", title: "home interiors", link: "", offer: "" },
    { icon: "", title: "home renivation", link: "", offer: "" },
    { icon: "", title: "one wall painting", link: "", offer: "Flat 25% Off" },
    {
      icon: "",
      title: "ac service & repair",
      link: "",
      offer: "upto 30% off*",
    },
    { icon: "", title: "legal services", link: "", offer: "Flat 30% Off" },
    { icon: "", title: "sofa cleaning", link: "", offer: "upto 30% off*" },
    { icon: "", title: "vehicle shifting", link: "", offer: "" },
  ];
  return (
    <div className="w-full min-h-screen flex relative flex-col">
      <div className="bg-zinc-900 w-full sticky top-16 text-center py-2 h-10 z-30">
        <a
          className="text-yellow-500 no-underline text-sm font-semibold"
          href=""
        >
          Get upto 15% discount with VIP{" >"}
        </a>
      </div>

      <div className="bg-slate-300 w-full flex flex-col items-center md:py-10 py-4 gap-5">
        <div className="bg-white md:w-6/12 w-11/12 flex p-3 rounded-3xl gap-3">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="search"
            className="w-full outline-none"
            placeholder="Search"
          />
          <button>
            <i className="fa-solid fa-microphone"></i>
          </button>
        </div>
        <div className="w-9/12 flex gap-5">
          <div className="grid grid-cols-4 w-full gap-4">
            {services.map((serv, index) => {
              const { icon, title, link, offer } = serv;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 h-24 w-24"
                >
                  <div className="w-12 h-12 bg-white rounded-full relative flex items-center justify-center">
                    <span className="absolute text-xs -top-3 bg-yellow-200 w-24 px-2 rounded-full">
                      {offer}
                    </span>
                    <img
                      src={icon}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-xs capitalize text-center">{title}</h4>
                </div>
              );
            })}
          </div>
          <div
            id="video"
            className="w-full flex items-center justify-center relative"
          >
            <div className="h-full w-full relative bg-red-500">
              <video
                autoPlay
                loop
                playsInline
                src={diwali_cleaning}
                muted
                controls
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 flex items-center px-4 py-2">
                <p className="text-white">hello</p>
                <button className="bg-green px-2 text-white">book</button>
              </div>
            </div>

            <button className="absolute bg-black bg-opacity-50 py-2 px-3 left-0">
              <i className="fa-solid fa-angle-left text-white"></i>
            </button>
            <button className="absolute bg-black bg-opacity-50 py-2 px-3 right-0">
              <i className="fa-solid fa-angle-right text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
