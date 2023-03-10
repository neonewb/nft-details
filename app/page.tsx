import {NFTPage} from '@/pages/NFT';

import type {NFT} from '@/pages/NFT/types';

async function fetchNFT(): Promise<NFT> {
	const res = await fetch('https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json');

	if (!res.ok) {
		throw new Error('Failed to fetch NFT data');
	}

	return res.json();
}

export default async function Home() {
	const nft = await fetchNFT();

	return <NFTPage {...nft} />;
}
