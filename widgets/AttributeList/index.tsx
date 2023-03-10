'use client';

import {memo} from 'react';

import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {CollapsibleTitle} from '@/shared/CollapsibleTitle';

import type {Attribute} from '@/pages/NFT/types';

type AttributeListProps = {
	attributes: Attribute[];
}

export const AttributeList = memo<AttributeListProps>(({attributes}) => (
	<CollapsibleTitle
		title={'Details'}
		icon={<FormatListBulletedRoundedIcon />}
	>
		<TableContainer component={Paper}>
			<Table size='small'>
				{attributes.map(({trait_type, value}) => (
					<TableRow key={trait_type}>
						<TableCell width='35%'>
							<Typography>
								{trait_type}
							</Typography>
						</TableCell>
						<TableCell width='65%'>
							<Typography>
								{value}
							</Typography>
						</TableCell>
					</TableRow>
				))}
			</Table>
		</TableContainer>
	</CollapsibleTitle> 
));

AttributeList.displayName = 'AttributeList';
