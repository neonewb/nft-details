'use client';

import {PropsWithChildren, useCallback, useState} from 'react';

import {Typography} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type CollapsibleTitleProps = {
	title: string;
	icon: React.ReactNode;
}

export const CollapsibleTitle = ({children, title, icon}: PropsWithChildren<CollapsibleTitleProps>) => {
	const [isOpen, setOpen] = useState(false);

	const toggle = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	return (
		<>
		    <ListItemButton onClick={toggle}>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
				<ListItemText>
					<Typography variant='h6'>
						{title}
					</Typography>
				</ListItemText>
				{isOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={isOpen} timeout='auto' unmountOnExit>
				{children}
			</Collapse>
		</>
	);
};
