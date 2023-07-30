const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i = 0; i < 5; i++) {

  // Creates a JSON object for each NFT
  const json = {
    name: `${i}`,
    description: "Cristiano Ronaldo is the best player on the planet",
    image: `https://gateway.pinata.cloud/ipfs/QmP5eShETPcxEvBqTUu5kVodS9xpVJGEYjqFEnrAUCkG9X/${i}.jpeg`,
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'nftcollection', String(i)),
    JSON.stringify(json)
  );
}

// run node metadata/generateNftData.js