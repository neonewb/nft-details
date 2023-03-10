'use client';

import {useMemo} from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import {PriceList} from '@/widgets/PriceList';
import {AttributeList} from '@/widgets/AttributeList';
import {Description} from '@/widgets/Description';

import {StyledDetails, StyledImage, StyledNFTPage} from './styled';
import {PriceType} from './enums';

import type {NFT} from './types';

export const NFTPage = ({name, description, image, attributes}: NFT) => {
	const buyPrice = useMemo(() => {
		return attributes.find(attribute => attribute.trait_type === PriceType.Buy)?.value ?? 'Unknown';
	}, [attributes]);

	const returnPrice = useMemo(() => {
		return attributes.find(attribute => attribute.trait_type === PriceType.Return)?.value ?? 'Unknown';
	}, [attributes]);

	return (
		<StyledNFTPage>
			<Paper sx={{padding: 'var(--space-s)'}}>
				<StyledImage
					src={image}
					alt='NFT image'
					width={600}
					height={800}
				/>
			</Paper>

			<StyledDetails>
				<Typography variant='h2' component='h1'>{name}</Typography>

				<PriceList buyPrice={buyPrice} returnPrice={returnPrice} />

				<AttributeList attributes={attributes} />

				<Description description={description} />
			</StyledDetails>
		</StyledNFTPage>
	);
};
