export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16 drop-shadow-lg">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-around">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 w-80">
            <p className="text-gray-300 mb-4">
              "This platform has completely transformed the way I write and
              share stories!"
            </p>
            <h3 className="text-white font-bold">- Sarah J.</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 w-80">
            <p className="text-gray-300 mb-4">
              "The AI filters are a game changer for refining my stories."
            </p>
            <h3 className="text-white font-bold">- James W.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
