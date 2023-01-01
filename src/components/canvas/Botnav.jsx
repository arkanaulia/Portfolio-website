export default function Botnav() {
  return (
    <div className="fixed bottom-0 left-0 h-max w-full z-10 flex flex-row items-center justify-between py-10 px-10 text-white">
      <p className=" text-xl relative w-max one">
        <span>experience.</span>
        <span className="absolute -bottom-1 right-0 w-0 transition-all h-1 bg-white"></span>
      </p>
      <p className=" text-xl relative w-max one">
        <span>work.</span>
        <span className="absolute -bottom-1 right-0 w-0 transition-all h-1 bg-white"></span>
      </p>
    </div>
  );
}
