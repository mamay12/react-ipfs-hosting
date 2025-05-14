const pinataSDK = require('@pinata/sdk');
const path = require('path');

const pinata = pinataSDK(process.env.PINATA_JWT);

pinata
    .testAuthentication()
    .then(() => {
        return pinata.pinFromFS(path.join(__dirname, 'dist'), {
            pinataMetadata: {
                name: 'my-site',
            },
        });
    })
    .then((result) => {
        console.log('✅ Pinned successfully!');
        console.log('CID:', result.IpfsHash);
        console.log(`📦 URL: https://w3s.link/ipfs/${result.IpfsHash}/`);
    })
    .catch((err) => {
        console.error('❌ Error pinning:', err);
    });
