'use client';

import {memo} from 'react';

import {Box} from '@mui/material';

import {Price} from '@/shared/Price';
import {PriceType} from '@/pages/NFT/enums';

type PriceListProps = {
	buyPrice: string;
	returnPrice: string;
}

export const PriceList = memo<PriceListProps>(({buyPrice, returnPrice}) => (
	<Box display='flex' gap='var(--space-m)'>
		<Price name={PriceType.Buy} price={buyPrice} />
		<Price name={PriceType.Return} price={returnPrice} />
	</Box>
));

PriceList.displayName = 'PriceList';
