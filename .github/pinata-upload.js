import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pinataSDK from '@pinata/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pinata = new pinataSDK(process.env.PINATA_JWT);

const distPath = join(__dirname, 'dist');

try {
    await pinata.testAuthentication();

    const result = await pinata.pinFromFS(distPath, {
        pinataMetadata: {
            name: 'my-site',
        },
    });

    console.log('✅ Успешно загружено в Pinata!');
    console.log('CID:', result.IpfsHash);
    console.log(`📦 Доступно по ссылке: https://w3s.link/ipfs/${result.IpfsHash}/`);
} catch (err) {
    console.error('❌ Ошибка при загрузке:', err);
}
