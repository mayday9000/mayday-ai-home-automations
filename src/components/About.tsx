import profileImage from "@/assets/profile-image.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src={profileImage}
              alt="Founder Profile"
              className="w-64 h-64 rounded-2xl object-cover shadow-card"
            />
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Mayday AI?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I started Mayday AI to help home service companies end the feast-or-famine cycle. 
                Too many owners lose jobs to missed calls and messy scheduling.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With AI-powered systems, your business never sleeps — so you can focus on 
                serving customers, not chasing them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;