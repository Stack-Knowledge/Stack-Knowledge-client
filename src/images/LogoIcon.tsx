const LogoIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.6255 0L24.8035 4.25673H24.9486V4.30745L25 4.32539H24.9486V7.68958H24.6523L12.4743 11.9463L0.296273 7.68958H0.151172V7.63886L0.0998535 7.62093H0.151172V4.25673H0.447476L12.6255 0Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.9154 9.92542L24.9487 10.0011V13.6093L12.4441 18.1399L12.4253 18.0971L12.3787 18.2032L0 13.7189V10.0231L12.3238 14.4875L24.9154 9.92542Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.9154 16.006L24.9487 16.0818V19.69L12.4441 24.2205L12.4253 24.1777L12.3787 24.2839L0 19.7996V16.1037L12.3238 20.5681L24.9154 16.006Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;
