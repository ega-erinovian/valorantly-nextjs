import Link from "next/link";

const DownloadBtn = () => {
  return (
    <>
      {/* DOWNLOAD GAME BUTTON */}
      <Link href="https://playvalorant.com/id-id/download/" target="_blank">
        <button className="w-screen h-14 bg-color-lightSecondary hover:bg-color-lighterSecondary text-color-white text-center">
          Download Now
        </button>
      </Link>
    </>
  );
};

export default DownloadBtn;
