import { motion } from 'motion/react';

const images = [
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.75761-15/483254796_17903967744102164_8830733089861620951_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=KFDpfluFeiEQ7kNvwHmXj_Z&_nc_oc=Adre7vNop8Dit_QMFAmMbaHF7Q-9IslR-CS3ldG_m19rLhMUO15LvHzSInaHcpEjahs&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-2.fna&_nc_gid=rHGpdgWmAVAxPicJQJ5Ldw&_nc_ss=7a3a8&oh=00_Afz1wafG7Hxjr1f01OfgJ27gwc0MGkrpGKfEUIorM5L1XQ&oe=69CCAA73",
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.75761-15/484476042_17905295484102164_6627973850160920638_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=0bA7V0w07WQQ7kNvwEQ7JKB&_nc_oc=Adp5_g-0glTDpL5rMKZ3fPnCiOzJx6nStYFZDPP_p5FwcslMNzJ7Vt7uCmvRITd1rIc&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=ZJQZChZZrck3DJhoz2vI0Q&_nc_ss=7a32e&oh=00_Afz2fYCws-aM0hi_15IvCVXvj583IXybkicy2XjajmJfMA&oe=69CC8DDF",
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/519530619_17919839883102164_1772157573868422618_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=be1LugVTArgQ7kNvwHnrj8e&_nc_oc=Adobhhex7JuJywUVldLjTxGdILQ6g-iWJXJdNeEj3A9-sz5m9Jm_HbvHNU266yoicac&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=O2P0b9QG4sSrCR87jZT7MQ&_nc_ss=7a32e&oh=00_AfyyEOFHEm-Ul3Fe7d4peYzifBisaHA96o0RukUebe2udA&oe=69CCB74D",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/522921119_17920671741102164_3057752327330779660_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=y0_vrSeanHcQ7kNvwE5i6gD&_nc_oc=AdpDZVfG7qrsOkQenbx1KORNyfdeQMDKUeVFN5r8sIUy4eM76m8DUMFq5o5n7zaphzo&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-2.fna&_nc_gid=pjYp79e6Fhwe-9YyPLJrPw&_nc_ss=7a32e&oh=00_Afz7a84SX-EiZdDkyBhwHyu346XJYGzXCM1k6mQIJ3ahYA&oe=69CCAC29",
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t51.82787-15/521563008_17920671723102164_6680519023821894391_n.jpg?stp=dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=LkSh8MIWeoAQ7kNvwGnC-Sb&_nc_oc=Adr3pJyDRDx_Q-9f80Qz4EnQAaNKfPoY6szHYW0e7DW2oPglKhhA1SC_mjJwNDSkfEI&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-1.fna&_nc_gid=DKjG-06obXoUohRHtCIcvg&_nc_ss=7a32e&oh=00_AfzcDWg64wV7BEE3NW8JeLJ0Q5D5iO3OXeCHOmKp9mT2tg&oe=69CCAC3F",
  "https://scontent.fbom12-2.fna.fbcdn.net/v/t51.82787-15/528705491_17922589095102164_693248640854551937_n.jpg?stp=dst-jpegr_tt6&_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=fWG8AHSiRXYQ7kNvwHklFRE&_nc_oc=AdrmNzyLrCAC9mrZgTQdCjijbJFmsgAeH9cvTc5qZuBeYyud0xzLJ9FJn8AW2yM0xQU&_nc_zt=23&se=-1&_nc_ht=scontent.fbom12-2.fna&_nc_gid=_iMprTHfBDJ1BjK-4Zxzrw&_nc_ss=7a32e&oh=00_AfzLIcaLqM2HVvFEhNfM0JhDIuRoGVL8gyWhKTbGZS3w8g&oe=69CCA25C",
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t39.30808-6/568610276_122151309950773501_6408028210574586620_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=05f8XiTZpRYQ7kNvwHhZBv6&_nc_oc=AdpM0wN85CqL8mG1eIewAb9Etopw0pJWhKrSyUXKc7QICBMjqyltBqXlfv_veKM0OBM&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=fHZawnhPnD4NLWdskq0-oA&_nc_ss=7a32e&oh=00_AfypTk-k0X64wXVhX-VZQ8wEFC95zO4Crj7lvlga4fJe3A&oe=69CC8B7E"
];

export function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Work</h1>
        <p className="text-text-light max-w-2xl mx-auto">A glimpse into the Estheva Beauty experience.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
