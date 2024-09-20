const UploadLoading = ({
  uploadProgress,
}: {
  uploadProgress: number | string[];
}) => {
  const progress = typeof uploadProgress === "number" ? uploadProgress : 0;

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center w-full min-h-64 bg-[#FFFFFF] mb-[15%]">
      <div className="flex flex-col items-center text-center">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_663_4069)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.93189 0.599609C5.05047 0.599609 4.33594 1.31414 4.33594 2.19556V43.8037C4.33594 44.6851 5.05047 45.3996 5.93189 45.3996H40.0733C40.9547 45.3996 41.6693 44.6851 41.6693 43.8037V8.06493L34.204 0.599609H5.93189Z"
              fill="#E4E7EC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41.6684 8.06492V8.06628H34.2031V0.599609L41.6684 8.06492Z"
              fill="#98A2B3"
            />
            <rect
              x="2.46484"
              y="19.2666"
              width="41.0667"
              height="18.6667"
              rx="1.59595"
              fill="#014676"
            />
            <path
              d="M11.2891 33.2426V23.957H14.7711C15.4845 23.957 16.083 24.09 16.5666 24.356C17.0532 24.622 17.4205 24.9878 17.6683 25.4532C17.9192 25.9157 18.0447 26.4416 18.0447 27.0311C18.0447 27.6265 17.9192 28.1555 17.6683 28.6179C17.4175 29.0804 17.0472 29.4446 16.5575 29.7106C16.0679 29.9736 15.4648 30.1051 14.7485 30.1051H12.4407V28.7222H14.5218C14.9389 28.7222 15.2805 28.6497 15.5464 28.5046C15.8124 28.3595 16.0089 28.16 16.1359 27.9061C16.2658 27.6522 16.3308 27.3605 16.3308 27.0311C16.3308 26.7016 16.2658 26.4114 16.1359 26.1605C16.0089 25.9097 15.8109 25.7147 15.5419 25.5757C15.2759 25.4336 14.9329 25.3626 14.5127 25.3626H12.9712V33.2426H11.2891Z"
              fill="white"
            />
            <path
              d="M22.6523 33.2426H19.5057V23.957H22.7158C23.6377 23.957 24.4296 24.1429 25.0916 24.5147C25.7565 24.8835 26.2674 25.4139 26.624 26.1061C26.9807 26.7983 27.1591 27.6265 27.1591 28.5907C27.1591 29.558 26.9792 30.3892 26.6195 31.0844C26.2628 31.7796 25.7475 32.3131 25.0734 32.6849C24.4024 33.0567 23.5954 33.2426 22.6523 33.2426ZM21.1878 31.7872H22.5707C23.2175 31.7872 23.7571 31.6693 24.1893 31.4335C24.6215 31.1947 24.9465 30.8396 25.1641 30.368C25.3817 29.8935 25.4906 29.3011 25.4906 28.5907C25.4906 27.8804 25.3817 27.291 25.1641 26.8225C24.9465 26.351 24.6246 25.9988 24.1984 25.7661C23.7752 25.5303 23.2493 25.4124 22.6206 25.4124H21.1878V31.7872Z"
              fill="white"
            />
            <path
              d="M28.7573 33.2426V23.957H34.7058V25.3671H30.4394V27.888H34.2978V29.298H30.4394V33.2426H28.7573Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_663_4069">
              <rect
                width="44.8"
                height="44.8"
                fill="white"
                transform="translate(0.601562 0.599609)"
              />
            </clipPath>
          </defs>
        </svg>

        <p className="text-gray-600 mb-2">Uploading file...</p>
        <div className="w-full flex items-center justify-center">
          <span className="text-[16px] leading-[19.2px]  font-[700] text-gray-700 my-2">
            {progress}%
          </span>
        </div>
      </div>
      <div className="lg:w-[30%] md:w-[50%] w-full mx-auto">
        <div className="h-2 bg-gray-200 rounded-[30px] overflow-hidden">
          <div
            className="h-full bg-[#016AB3] transition-all duration-200 delay-100 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadLoading;
