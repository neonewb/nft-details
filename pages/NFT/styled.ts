import styled from '@emotion/styled';
import Image from 'next/image';

export const StyledImage = styled(Image)`
	@media (max-width: 750px) {
		width: 300px;
		height: 400px;
	}
`;

export const StyledNFTPage = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
	gap: var(--space-l);
`;

export const StyledDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-m);
	width: 620px;
	max-width: 90vw;
`;
