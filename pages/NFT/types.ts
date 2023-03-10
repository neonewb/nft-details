export type NFT = {
	description: string;
	image: string;
	name: string;
	attributes: Attribute[];
}

export type Attribute = {
	'trait_type': string;
	value: string;
}
