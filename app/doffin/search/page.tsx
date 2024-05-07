import React from "react";

const Page: React.FC = async () => {
  const data = await getData();
  return (
    <div>
      <label>
        {" "}
        Doffin Search:
        <input
          type="text"
          name="doffin"
          id="dof"
          placeholder="insert text here ...."
        />
      </label>
      Response:
      {data.numHitsTotal},
      {data.hits.map((row: any, rowId: number) => (
        <p key={rowId}> {row.id} </p>
      ))}
    </div>
  );
};

export default Page;

async function getData() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://api.doffin.no/public/v2/search?numHitsPerPage=20&sortBy=DEADLINE&type=PLANNING&status=ACTIVE",
    {
      method: "GET",
      // Request headers
      headers: {
        "Cache-Control": "no-cache",
        "Ocp-Apim-Subscription-Key": "8efd29e4bbd643ef93c1951313249544",
      },
    }
  );

  const data = res.json();

  console.log('doffin called')

  return data;
}
