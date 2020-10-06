

export default function Footer(){
    return(
        <footer class="bg-black block">
        <div class="container mx-auto px-6 py-20">
          <div class="flex flex-wrap pl-32">
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white uppercase">Company</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">About The Brand</a>
                </li>
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">Brand Corporate Social Responsibility</a>
                </li>
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">A Sustainable Journey</a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white uppercase">Customer Care</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">Contact Us</a>
                </li>
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">Shipping</a>
                </li>
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">Returns, Exchanges & Order Cancellations</a>
                </li>
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">Alterations & Customization</a>
                </li>
                <li class="mt-2">
                  <a href="#" class="hover:underline text-white ">Find Our Store</a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white uppercase">Membership</h5>
              <div>
                <img src="/images/card.png" />
                <button className="mt-6 bg-transparent hover:bg-white text-white uppercase hover:text-black py-2 px-5 border border-white">Learn More</button>
              </div>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold text-white uppercase">follow us</h5>
              <div className="flex lg:h-20">
                <div className="flex-initial">
                  <a href="/">
                  <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9848 0H9.76454C6.12881 0 3.77424 2.42382 3.77424 6.12881V8.96814H0.519391C0.242382 8.96814 0 9.21053 0 9.48753V13.608C0 13.885 
                        0.242382 14.1274 0.519391 14.1274H3.77424V24.4806C3.77424 24.7576 4.01662 25 4.29363 25H8.55263C8.82964 25 9.07202 24.7576 9.07202 
                        24.4806V14.0928H12.8809C13.1579 14.0928 13.4003 13.8504 13.4003 13.5734V9.45291C13.4003 9.3144 13.331 9.1759 13.2618 9.10665C13.1579 
                        9.00277 13.054 8.96814 12.9155 8.96814H9.10665V6.57895C9.10665 5.43629 9.38366 4.84765 10.8726 4.84765H13.054C13.331 4.84765 13.5734 
                        4.60526 13.5734 4.32826V0.519391C13.5042 0.242382 13.2618 0 12.9848 0Z" fill="white"/>
                  </svg>
                  </a>
                </div>
                <div className="flex-initial  ml-8">
                  <a href="/">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1875 0H7.8125C3.49609 0 0 3.49609 0 7.8125V17.1875C0 21.5039 3.49609 25 7.8125 25H17.1875C21.5039 25 25 21.5039 25 17.1875V7.8125C25 3.49609 21.5039 0 17.1875 0ZM22.6562 17.1875C22.6562 20.2051 20.2051 22.6562 17.1875 22.6562H7.8125C4.79492 22.6562 2.34375 20.2051 2.34375 17.1875V7.8125C2.34375 4.79492 4.79492 2.34375 7.8125 2.34375H17.1875C20.2051 2.34375 22.6562 4.79492 22.6562 7.8125V17.1875Z" fill="white"/>
                      <path d="M12.5 6.25C9.04785 6.25 6.25 9.04785 6.25 12.5C6.25 15.9521 9.04785 18.75 12.5 18.75C15.9521 18.75 18.75 15.9521 18.75 12.5C18.75 9.04785 15.9521 6.25 12.5 6.25ZM12.5 16.4062C10.3467 16.4062 8.59375 14.6533 8.59375 12.5C8.59375 10.3467 10.3467 8.59375 12.5 8.59375C14.6533 8.59375 16.4062 10.3467 16.4062 12.5C16.4062 14.6533 14.6533 16.4062 12.5 16.4062Z" fill="white"/>
                      <path d="M19.2188 6.61621C19.6799 6.61621 20.0537 6.24239 20.0537 5.78125C20.0537 5.32011 19.6799 4.94629 19.2188 4.94629C18.7576 4.94629 18.3838 5.32011 18.3838 5.78125C18.3838 6.24239 18.7576 6.61621 19.2188 6.61621Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h5 class="uppercase mb-6 font-bold text-white uppercase">Download The App</h5>
              <div className="flex lg:h-20">
                <div className="flex-initial">
                  <button>
                    <img src="images/playstore.png" />
                  </button>
                </div>
                <div className="flex-initial  ml-8">
                  <button>
                    <img src="images/appstore.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}