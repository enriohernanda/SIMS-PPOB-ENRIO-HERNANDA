const BannerPromo = ({ banners }) => (
  <div className="mt-14 mb-10">
    <h4 className="font-bold text-gray-800 mb-5">Temukan promo menarik</h4>
    <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 cursor-grab">
      {banners.map((banner, index) => (
        <img key={index} src={banner} alt={`Promo ${index + 1}`} className="h-auto w-[280px] md:w-[300px] flex-shrink-0 rounded-xl shadow-sm hover:shadow-md transition-shadow" />
      ))}
    </div>
  </div>
);

export default BannerPromo;
