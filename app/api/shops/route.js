export async function POST(req) {
  const { lat, lon } = await req.json();

  const query = `
  [out:json];
  node(around:2000, ${lat}, ${lon});
  out;
  `;

  const servers = [
    "https://overpass-api.de/api/interpreter",
    "https://lz4.overpass-api.de/api/interpreter",
  ];

  for (let url of servers) {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: query,
      });

      const text = await res.text();

      try {
        const data = JSON.parse(text);

        // ✅ FIX: empty array skip karo
        if (data.elements && data.elements.length > 0) {
          console.log("Working server:", url);
          return Response.json(data);
        } else {
          console.log("No data from:", url);
        }

      } catch {
        console.log("Bad response from:", url);
      }

    } catch (err) {
      console.log("Server failed:", url);
    }
  }

  // ❌ sab fail ho gaya
  return Response.json({ elements: [] });
}