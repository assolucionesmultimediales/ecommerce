import Image from 'next/image';

function Footer() {
  return (
    <div className="flex justify-between items-center h-10 px-12 py-10 bg-pink-700 border-t-4 border-yellow-400 text-white">
    <h3>KIRA´S MANGA STORE</h3>
    <div className="flex justify-center items-center gap-3">
      <div>
      <Image
        src="/imgs/insta.png"  
        alt="instagram"
        width={20}   
        height={20}  
      />
      </div>
      <div>
      <Image
        src="/imgs/face.png"  
        alt="facebook"
        width={20}   
        height={20}  
      />
      </div>
      <div>
      <Image
        src="/imgs/tiktok.png"  
        alt="tiktok"
        width={20}   
        height={20}  
      />
      </div>
    </div>
  </div>
  )
}

export default Footer