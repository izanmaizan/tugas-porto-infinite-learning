import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Aku adalah seorang Mahasiswa dari Universitas Putra Indonesia YPTK Padang yang sedang melakukan Studi Independen program dari Kampus Merdeka MSIB di mitra Infinite Learning sebagai Web Development & UI UX Design pada Batch ke 6.
        </p>

        <br />

        <p className="text-xl">
        Saya sangat tertarik pada Web development sebagai salah satu bidang pada ilmu komputer yang sangat revolusioner pada saat ini. <br /> <br />
        Saya sangat bersemangat untuk mempelajari hal baru mengenai Web development dan juga bidang lainnya yang berkaitan langsung dengan itu.<br /> <br />
        Dengan berlatih serta menambah wawasan dan juga relasi saya harap hendaknya saya dapat menjadi Full Stack Developer yang handal dan juga dapat memberikan hasil yang terbaik untuk kedepannya.
        </p>
      </div>
    </div>
  );
};

export default About;
