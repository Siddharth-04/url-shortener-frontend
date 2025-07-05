import Card from './Card';
import {useStoreContext } from '../contextApi/ContextApi';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
    let description = "UrlShortener simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. UrlShortener simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. UrlShortener simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links.";
    const navigate = useNavigate();
    const {token} = useStoreContext();
    console.log("Token from LandingPage: ", token);

    const dashBoardNavigateHandler = () =>{

    }
  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-5">
      <div className="flex lg:flex-row flex-col pt-16 gap-10 ">
        <div className="flex-1">
          <h1 className="font-heading text-slate-800 md:text-5xl text-3xl mb-leading-[55px] sm:leading-[45px] leading-20 lg:w-full md:w-[70%] w-full">
            <span className='text-blue'>URLShortener</span> simplifies URL shortening for efficient sharing. Easily
            generate, manage, and track your shortened links.
          </h1>

          <p className="font-text text-gray text-justify my-5">
            UrlShortener: Long links? Not anymore! Turn those monster URLs into
            tiny, shareable links in seconds! Whether you're posting on social,
            sending emails, or just want cleaner links, we've got you covered.
            Plus, track your clicks and see how your links perform – because who
            doesn't love good stats?
          </p>
          <p className='font-text text-gray'>Short links, big results. That's the
            UrlShortener way!</p>

          <div className="flex items-center py-8 gap-8">
            <button className="text-white px-6 py-2 cursor-pointer">
              Manage Links
            </button>
            <button className="text-white px-6 py-2 cursor-pointer">
              Create Short Link
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="280"
            height="280"
            viewBox="0 0 24 24"
          >
            <path
              fill="#f1f1f1"
              d="M16 10h1v7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H5v-1H4v-1H3v-1H2v-1H1v-5h1v-1h1v-1h1v-1h1v4H4v3h1v1h1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-3h-1v-1h-1v-1h1V9h1V8h1v1h1z"
            />
            <path
              fill="#f1f1f1"
              d="M23 5v5h-1v1h-1v1h-1v1h-1V9h1V6h-1V5h-1V4h-3v1h-1v1h-1v1h-1v1h-1v1h-1v3h1v1h1v1h-1v1h-1v1H9v-1H8v-1H7V7h1V6h1V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1z"
            />
          </svg>
        </div>
      </div>

      <div className="pt-20">
        <p className="text-slate-800 font-heading lg:w-[60%] md:w-[70%] sm:w-[80%]  mx-auto text-4xl text-center">
          Trusted by individuals all over the world !
        </p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;