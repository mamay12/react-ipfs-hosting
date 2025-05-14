import pinataSDK from '@pinata/sdk';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootPath = path.join(__dirname, '..');
const distPath = path.join(rootPath, 'dist');

const pinataJWT = process.env.PINATA_JWT;

if (!pinataJWT) {
    throw new Error('PINATA_JWT not set in environment');
}

const pinata = new pinataSDK({pinataJWTKey: pinataJWT});

try {
    const result = await pinata.pinFromFS(distPath, {
        pinataMetadata: {
            name: 'My DApp',
        },
        pinataOptions: {
            cidVersion: 1
        }
    });

    const cid = result.IpfsHash;

    console.log(cid);
    fs.writeFileSync(path.join(rootPath, 'link.txt'), `https://${cid}.ipfs.dweb.link/`);

} catch (err) {
    console.error('❌ Error:', err);
}
