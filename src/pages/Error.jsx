import { useLocation } from 'react-router-dom';

export default function Error() {
  const location = useLocation();

  return (
    <div className="h-screen bg-[#FEDE17]">
   
      <p className="fixed bottom-[35vw] lg:bottom-[22vw] left-4 text-sm">The Route with name <code className="bg-gray-200 px-2 py-1 rounded">{location.pathname}</code> is not exist.</p> 
      <div className="fixed bottom-0 left-4">
        <h1 className="font-[Grotesk] text-[45vw] leading-[20vw] lg:text-[30vw] lg:leading-[12vw]">
          ERROR
        </h1>
      </div>
    </div>
  );
}
