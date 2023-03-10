'use client';

import {memo} from 'react';

import Paper from '@mui/material/Paper';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Typography from '@mui/material/Typography';

import {CollapsibleTitle} from '@/shared/CollapsibleTitle';


type DescriptionProps = {
	description?: string;
}

export const Description = memo<DescriptionProps>(({description}) => (
	<CollapsibleTitle
		title={'Description'}
		icon={<ListAltRoundedIcon />}
	>
		<Paper sx={{padding: 'var(--space-m)'}}>
			<Typography>
				{description || 'Without description'}
			</Typography>
		</Paper>
	</CollapsibleTitle> 
));

Description.displayName = 'Description';
