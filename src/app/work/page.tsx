import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

async function getPortfolio() {
  const res = await axios.get(
    "https://vinod-soba.co.uk/wp-json/wp/v2/portfolio?_embed",
    { httpsAgent }
  );
  return res.data;
}

export default async function WorkPage() {
  const data = await getPortfolio();

  return (
    <main className="bg-black text-white">

      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Selected Work
        </h1>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {data.map((item: any) => (
            <div key={item.id}>
              {item.acf?.card_image && (
                <img
                  src={item.acf.card_image}
                  className="w-full rounded-xl"
                  alt=""
                />
              )}

              <h3
                className="mt-4 text-xl"
                dangerouslySetInnerHTML={{
                  __html: item.title.rendered,
                }}
              />
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}