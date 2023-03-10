'use client';

import {memo} from 'react';

import {Paper, Typography} from '@mui/material';

type PriceProps = {
	name: string;
	price: string;
	symbol?: string;
}

export const Price = memo<PriceProps>(({name, price, symbol = 'ETH'}) => (
	<Paper sx={{
		padding: 'var(--space-s)',
		flex: '1 1 0'
	}}>
		<Typography variant='h6'>
			{name}
		</Typography>
		<Typography variant='h5'>
			{price} {symbol}
		</Typography>
	</Paper>
));

Price.displayName = 'Price';
