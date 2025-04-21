const AboutPage = () => {
    return (
      <main className="min-h-screen bg-zinc-900 text-white px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center">About <span className="text-orange-300"> 📢 Aawaz.amu.</span></h1>
  
          <p className="text-zinc-300 leading-relaxed">
            <span className="text-white font-semibold"><span className="text-orange-300"> 📢 Aawaz.amu.</span></span> is an anonymous platform built for the students of <span className="italic text-white/90">Aligarh Muslim University</span> to express themselves freely — without fear, pressure, or judgment.
          </p>
  
          <p className="text-zinc-300 leading-relaxed">
            Whether you have a suggestion, a complaint, a confession, or just a rant that’s been eating you up — this is your safe space to be heard.
          </p>
  
          <p className="text-zinc-300 leading-relaxed">
            <span className="font-semibold text-white">No likes. No followers. No identities.</span> Just voices that matter.
          </p>
  
          <div className="border-t border-zinc-700 pt-6">
            <p className="text-zinc-500 text-sm text-center font-bold">
              Built with ❤️ by AMU students for AMU students.
            </p>
          </div>
        </div>
      </main>
    );
  };
  
  export default AboutPage;
  