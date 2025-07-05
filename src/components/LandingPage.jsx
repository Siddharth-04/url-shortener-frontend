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
    <div className='min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-5'>
        <div className='flex lg:flex-row flex-col lg:py-5 pt-16 gap-10 '> 
            <div className='flex-1'>
                <h1 className='font-bold font-roboto text-slate-800 md:text-5xl text-3xl mb-leading-[55px] sm:leading-[45px] leading-20 lg:w-full md:w-[70%] w-full'>
                    URLShortener simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links.
                </h1>

                <p className='text-slate-700 text-sm my-5'>
                    UrlShortener streamlines the process of shortening URLs, making it quick and easy to create short, memorable links. With a user-friendly interface, you can generate shortened URLs in just a few clicks. Whether you're sharing links on social media, in emails, or on your website, UrlShortener ensures your links are concise and easy to share.Simplify your link management with UrlShortener, where you can create, customize, and track your shortened URLs effortlessly. Our platform provides a seamless experience for generating short links that are perfect for sharing across various platforms. With advanced tracking features, you can monitor the performance of your links in real-time, gaining valuable insights into user engagement and click-through rates. Whether you're a business looking to enhance your online presence or an individual wanting to share links more effectively, UrlShortener is your go-to solution for efficient URL shortening.
                </p>
                

                <div className='flex items-center gap-3'>
                    <button className='bg-amber-100 text-black px-6 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>Manage Links</button>
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 hover:text-gray-70 transition duration-300 cursor-pointer'>
                        Create Short Link 
                    </button>
                </div>

            </div>

            <div className='flex-1 flex justify-center w-full'>
                <img 
                    className='sm:w-[480px] w-[400px]  object-cover rounded-md bg-white'
                    src="/images/landing_image-removebg-preview.png"
                    alt='image'
                />
            </div>
        </div>

        <div className='sm:pt-12 pt-7'>
            <p className='text-slate-800 font-bold lg:w-[60%] md:w-[70%] sm:w-[80%]  mx-auto text-3xl text-center'>
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
  )
}

export default LandingPage;