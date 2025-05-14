import pinataSDK from '@pinata/sdk';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = path.join(__dirname, '..', 'dist');

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

    console.log('✅ Success:', result);
} catch (err) {
    console.error('❌ Error:', err);
}
