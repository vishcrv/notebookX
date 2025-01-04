

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-bacground h-[90vh] ">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="w-auto px-6 py-3 rounded-full bg-secondary">
            <span className="text-sm font-medium">the perfect notemaking 
              tool</span>

          </span>
          <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl " style={{ color: 'hsl(var(--c1))' }}>Create Notes at ease</h1>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground"> It features a 
            user-friendly interface that allows you to quickly jot down your thoughts, organize your notes,
             and access them whenever you need.</p>
        </div>
      </div>
    </section>
  );
}


//style={{ color: 'hsl(var(--c1))' }} for seperate color change 