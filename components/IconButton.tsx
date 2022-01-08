const IconButton = ({ color, url, children }: { color: 'white'; url: string; children: React.ReactNode }) => {
  const colorClass = () => {
    if (color == 'white') {
      return 'bg-white hover:bg-blue-700 hover:text-white text-black px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
    }
  };

  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <div className={colorClass()}>
        <p className=" font-bold text-sm sm:text-base md:text-lg text-center">{children}</p>
      </div>
    </a>
  );
};
export default IconButton;