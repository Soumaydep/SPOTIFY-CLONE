const LeftSection = () => {
    return (
      <>
        <div className="three-btn flex mt-6 bg-transparent sticky top-5 z-10 ">
          <div className="mr-2">
            <span>
              <button
                className="rounded-full text-white py-2 px-4 text-center"
                style={{ background: "#646664" }}
              >
                All
              </button>
            </span>
          </div>
          <div className="mr-2">
            <span>
              <button
                className="rounded-full text-white py-2 px-4 text-center"
                style={{ background: "#646664" }}
              >
                Music
              </button>
            </span>
          </div>
  
          <div>
            <span>
              <button
                className="rounded-full text-white py-2 px-4 text-center"
                style={{ background: "#646664" }}
              >
                Podcasts
              </button>
            </span>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-4">
          <div
            className="flex rounded-md text-center"
            style={{ background: "#646664" }}
          >
            <span className="h-12 w-12 rounded-l-md bg-slate-400"></span>
  
            <p className="text-white px-2 py-2">Melody by underated gems</p>
          </div>
          <div
            className="flex rounded-md   text-center"
            style={{ background: "#646664" }}
          >
            <span className="h-12 w-12 rounded-l-md bg-slate-400"></span>
  
            <p className="text-white px-2 py-2">Melody by underated gems</p>
          </div>
          <div
            className="flex rounded-md   text-center"
            style={{ background: "#646664" }}
          >
            <span className="h-12 w-12 rounded-l-md bg-slate-400"></span>
  
            <p className="text-white px-2 py-2">Melody by underated gems</p>
          </div>
          <div
            className="flex rounded-md  text-center"
            style={{ background: "#646664" }}
          >
            <span className="h-12 w-12 rounded-l-md bg-slate-400"></span>
  
            <p className="text-white px-2 py-2">Melody by underated gems</p>
          </div>
          <div
            className="flex rounded-md   text-center"
            style={{ background: "#646664" }}
          >
            <span className="h-12 w-12 rounded-l-md bg-slate-400"></span>
  
            <p className="text-white px-2 py-2">Melody by underated gems</p>
          </div>
          <div
            className="flex rounded-md   text-center"
            style={{ background: "#646664" }}
          >
            <span className="h-12 w-12 rounded-l-md bg-slate-400"></span>
  
            <p className="text-white px-2 py-2">Melody by underated gems</p>
          </div>
        </div>
      </>
    );
  };
  
  export default LeftSection;
  