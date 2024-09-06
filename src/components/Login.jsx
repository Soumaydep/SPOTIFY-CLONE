import { googleLogin } from "../firbaseAuth/googleLogin";
import { loginUrl } from "../../src/config";


const Login = () => {

 const handleGoogleLogin= async()=>
 {
    const user= await googleLogin();
    if(user)
    {
      window.location.href=loginUrl;
    }
 }

  return (
    <div className="bg-gradient-to-b from-[#2a2a2a] via-[#232323] via-[#1d1d1d] to-[#090909]">
      <div className="flex items-center justify-center p-8">
        <div
          className=" w-7/12 mx-auto mt-8 mid-container "
          style={{ background: "#121212" }}
        >
          <div className="logo flex items-center text-center flex-col mt-5 ">
            <div className="flex justify-center">
              <svg
                fill="#ffffff"
                width="80px"
                height="80px"
                viewBox="-6.5 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>spotify</title>
                <path d="M13.2 20.84c-0.2 0-0.4-0.080-0.56-0.2-1.84-1.6-5.8-1.12-7.2-0.84-0.44 0.12-0.92-0.2-1-0.64-0.12-0.44 0.2-0.88 0.64-1 0.24-0.040 5.8-1.24 8.64 1.2 0.36 0.32 0.4 0.84 0.080 1.2-0.12 0.16-0.36 0.28-0.6 0.28zM14.2 18.44c-0.16 0-0.32-0.040-0.48-0.16-3.36-2.4-8.48-1.080-8.52-1.080-0.44 0.12-0.92-0.16-1.040-0.6s0.16-0.92 0.6-1.040c0.24-0.080 5.92-1.56 9.96 1.32 0.36 0.28 0.48 0.8 0.2 1.16-0.2 0.28-0.44 0.4-0.72 0.4zM15.24 15.72c-0.16 0-0.32-0.040-0.48-0.16-4.44-2.96-10.040-1.040-10.12-1.040-0.44 0.16-0.88-0.080-1.040-0.52s0.080-0.92 0.52-1.080c0.28-0.080 6.48-2.2 11.6 1.24 0.4 0.24 0.48 0.76 0.24 1.16-0.2 0.24-0.48 0.4-0.72 0.4zM9.6 25.6c-5.28 0-9.6-4.32-9.6-9.6s4.32-9.6 9.6-9.6 9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zM9.6 8.080c-4.36 0-7.92 3.56-7.92 7.92s3.56 7.92 7.92 7.92 7.92-3.56 7.92-7.92-3.56-7.92-7.92-7.92z"></path>
              </svg>
            </div>

            <a href={loginUrl} className="font-bold text-3xl text-white p-6">
              Log in to Spotify
            </a>
          </div>

          <div className="signin flex flex-col text-center items-center py-4">
            <button className="flex  border-2 rounded-3xl mb-2 text-white border-gray-700 w-4/12 px-4 py-2 font-medium hover:border-white"
                    onClick={handleGoogleLogin}
            >
              <span className="text-white">
                <img
                  className="px-3 mr-3"
                  src="https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg"
                ></img>
              </span>
              Continue with Google
            </button>
            <button className="signin flex p-2 border-2 rounded-3xl mb-2 w-4/12  border-gray-700 hover:border-white text-white px-4 py-2 font-medium ">
              <span>
                <img
                  className="px-3 mr-3"
                  src="https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg"
                ></img>
              </span>
              Continue with Facebook
            </button>
            <button className="signin flex p-2  border-2  rounded-3xl  mb-2  border-gray-700 hover:border-white text-white px-3 py-2 w-4/12 font-medium ">
              <span>
                <img
                  className="px-3 mr-5"
                  src="https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg"
                ></img>
              </span>
              Continue with Apple
            </button>
            <button className="signin flex px-8 py-2 w-4/12 border-2 rounded-3xl  border-gray-700 hover:border-white text-white font-medium">
              Continue with phone number
            </button>
          </div>
          <div className="mr-10 ml-10 mt-5 px-20">
            <hr className="border-1 border-gray-700"></hr>
          </div>
          <div className="space-x-6  mx-auto mt-8 mb-8 w-4/12">
            <form>
              <div>
                <label className="block  font-medium text-white">
                  Email or username
                </label>
                <input
                  type="text"
                  className="font-semibold px-5 py-2 mt-2 w-full   text-white border-2  border-gray-700 hover:border-white focus:outline-none"
                  placeholder="Email or username"
                  style={{ background: "#121212" }}
                />
              </div>

              <div>
                <label className="block  font-medium text-white mt-2">
                  Password
                </label>
                <input
                  type="password"
                  className="font-semibold px-5 py-2  border-gray-700 hover:border-white mt-2 w-full text-white border-2  focus:outline-none"
                  placeholder="Password"
                  style={{ background: "#121212" }}
                />
              </div>

              <button className="h-10 w-full mt-12 bg-green-500 hover:bg-green-600 text-black  rounded-3xl font-semibold">
                Log In
              </button>
            </form>
          </div>

          <p className="text-center ">
            <a href="#" className="underline text-white hover:text-green-600">
              Forgot your password?
            </a>
          </p>

          <div className="mr-10 ml-10 mt-7 px-20">
            <hr className="border-1 border-gray-700"></hr>
          </div>

          <p className="text-gray-400 py-20 mb-10 text-center">
            Don't have an account?{" "}
            <a
              href="#"
              className="underline text-white px-2 hover:text-green-600"
            >
              Sign up for Spotify
            </a>
          </p>
        </div>
      </div>

      <div className="text-center w-full p-8" style={{ background: "#121212" }}>
        <span>
          <p className="text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Login;
