import { Web5 } from '@tbd54566975/web5';

// Instantiate Web5
const { web5, did: aliceDid } = await Web5.connect();

console.log(`did:`, aliceDid);
console.log(`did api:`, web5.did);
console.log(`dwn api:`, web5.dwn);

const { record } = await web5.dwn.records.create({
    data: "Hello Web5",
    message: {
      dataFormat: 'text/plain',
    },
  });

console.log('write result', record);
// read
const readResult = await record.data.text();

console.log('read result', readResult);
// updaete
const updateResult = await record.update({data: "Hello, I'm updated!"});

console.log('update result', updateResult);

// read
const readResult2 = await record.data.text();

console.log('read result2', readResult2);
// delete
const deleteResult = await record.delete();

console.log('deleteResult', deleteResult);