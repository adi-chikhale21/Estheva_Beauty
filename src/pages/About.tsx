import { motion } from 'motion/react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://scontent.fbom12-1.fna.fbcdn.net/v/t39.30808-6/571202453_122151309914773501_2036666673692509611_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TFS0vMrr0BsQ7kNvwF25q47&_nc_oc=Adp1T1INHPeqhmi4zCTUOov8JMTntPkgvGyo5NSC475Y3mwyg8AbqfUG7TzRCmfDkcw&_nc_zt=23&_nc_ht=scontent.fbom12-1.fna&_nc_gid=xdCDXGjm7eseuHtBcVKKVg&_nc_ss=7a32e&oh=00_AfyP2awRQMN7lsKIqZYTPMI4ao59rRliakam_CHkVJWEqQ&oe=69CC9B9D" 
            alt="Samantha - Owner of Estheva Beauty" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">About Samantha</h1>
          <div className="space-y-6 text-text-light leading-relaxed">
            <p className="text-lg text-text">
              Hey! My name is Samantha and I am the owner of Estheva Beauty! ☺️
            </p>
            <p>
              With a passion for enhancing natural beauty and creating a relaxing, luxurious experience, I founded Estheva Beauty to provide top-tier esthetic services.
            </p>
            <p>
              We specialize in Waxing, Facials, Lashes, Brows, and more. Every treatment is customized to meet your unique needs and leave you feeling confident and radiant.
            </p>
            <p>
              I believe that self-care is a necessity, not a luxury. My goal is to make every client feel comfortable, pampered, and beautiful from the inside out.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
