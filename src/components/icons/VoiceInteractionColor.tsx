interface VoiceInteractionColorProps {
  width?: number;
  height?: number;
}

const VoiceInteractionColor: React.FC<VoiceInteractionColorProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_623_20333)">
      <rect width="68" height="68" rx="34" fill="white" fillOpacity="0.56" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.3502 24.1837C32.7878 23.7462 33.3812 23.5003 34.0001 23.5003C34.6189 23.5003 35.2124 23.7462 35.65 24.1837C36.0876 24.6213 36.3334 25.2148 36.3334 25.8337V31.667C36.3334 32.2858 36.0876 32.8793 35.65 33.3169C35.2124 33.7545 34.6189 34.0003 34.0001 34.0003C33.3812 34.0003 32.7878 33.7545 32.3502 33.3169C31.9126 32.8793 31.6667 32.2858 31.6667 31.667V25.8337C31.6667 25.2148 31.9126 24.6213 32.3502 24.1837ZM34.0001 21.167C32.7624 21.167 31.5754 21.6587 30.7002 22.5338C29.8251 23.409 29.3334 24.596 29.3334 25.8337V31.667C29.3334 32.9047 29.8251 34.0917 30.7002 34.9668C31.5754 35.842 32.7624 36.3337 34.0001 36.3337C35.2378 36.3337 36.4247 35.842 37.2999 34.9668C38.1751 34.0917 38.6667 32.9047 38.6667 31.667V25.8337C38.6667 24.596 38.1751 23.409 37.2999 22.5338C36.4247 21.6587 35.2378 21.167 34.0001 21.167ZM27.0001 31.667C27.0001 31.0227 26.4777 30.5003 25.8334 30.5003C25.1891 30.5003 24.6667 31.0227 24.6667 31.667C24.6667 34.1423 25.6501 36.5163 27.4004 38.2667C28.8735 39.7397 30.7882 40.6695 32.8334 40.9272V43.3337H29.3334C28.6891 43.3337 28.1667 43.856 28.1667 44.5003C28.1667 45.1447 28.6891 45.667 29.3334 45.667H34.0001H38.6667C39.3111 45.667 39.8334 45.1447 39.8334 44.5003C39.8334 43.856 39.3111 43.3337 38.6667 43.3337H35.1667V40.9272C37.2119 40.6695 39.1267 39.7397 40.5997 38.2667C42.3501 36.5163 43.3334 34.1423 43.3334 31.667C43.3334 31.0227 42.8111 30.5003 42.1667 30.5003C41.5224 30.5003 41.0001 31.0227 41.0001 31.667C41.0001 33.5235 40.2626 35.304 38.9498 36.6167C37.6371 37.9295 35.8566 38.667 34.0001 38.667C32.1436 38.667 30.3631 37.9295 29.0503 36.6167C27.7376 35.304 27.0001 33.5235 27.0001 31.667Z"
        fill="url(#paint0_linear_623_20333)"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_623_20333"
        x="-26"
        y="-26"
        width="120"
        height="120"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="13" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_623_20333" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_623_20333" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear_623_20333"
        x1="46.3201"
        y1="70.5345"
        x2="12.842"
        y2="39.5467"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9524" />
        <stop offset="1" stopColor="#5B4DFF" />
      </linearGradient>
    </defs>
  </svg>
);

export default VoiceInteractionColor;
