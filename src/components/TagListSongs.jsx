import { FaPlay } from 'react-icons/fa'; 

const TagListSongs = ({ props }) => {
  return (
    <div>
      {props.map((p) => (
        <div
          key={p.id}
          className="  group hover:bg-gray-900 px-1 py-1 rounded-md"
        >
          <div className="flex p-2">
            <div className=" relative flex items-center justify-center h-12 w-12 group-hover:bg-black">
              {p.type==='playlist'?  
               <img
                src={p.images?.[0]?.url}
                alt={p.name}
                className="h-12 w-12 object-fill group-hover:opacity-50"
              /> :
              <img
              src={p.images?.[2].url}
              alt={p.name}
              className="h-12 w-12 rounded-full object-fill group-hover:opacity-50"
            />      
            
            }
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <FaPlay className="text-white text-xl" />
              </div>
             
            </div>
            <div className="px-2">
              <p className="font-medium text-white">{p.name}</p>
              <p className="font-thin text-white">
                {p.type === "playlist"
                  ? p.owner.display_name
                  : ""}
                
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagListSongs;
