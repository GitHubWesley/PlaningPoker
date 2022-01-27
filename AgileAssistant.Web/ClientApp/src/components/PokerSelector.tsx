import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import PokerCard from './PokerCard';
import IPokerCard from '../interfaces/IPokerCard';

interface Props {
	pokerDeck: any;
	onPokerSelected(pokerKey: string): void;
}

interface IPokerSelectorCandidate extends IPokerCard {
	isSelected: boolean;
}

const pokerSize = 10;
const selectedPokerSize = 12;

const paddingVertical = 10;

function PokerSelector(props: Props) {
	const [selectedPokerKey, setSelectedPoker] = useState<string | null>(null);

	const defaultPokerCandidates = props.pokerDeck.pokers.map((poker: any): IPokerSelectorCandidate => {
		return { value: poker.value, isShown: false, isSelected: false, pokerDeck: props.pokerDeck };
	});

	const [pokerCandidates, setPokerCandidates] = useState<Array<IPokerSelectorCandidate>>(defaultPokerCandidates);

	return (
		<Grid
			sx={{
				overflowX: 'scroll',
				maxWidth: '100%',
			}}
		>
			<Stack
				direction="row"
				spacing={3}
				sx={{
					minWidth: 'fit-content',
					padding: `${paddingVertical}px ${paddingVertical * 2}px`,
					alignItems: 'center',
					minHeight: `${selectedPokerSize * 16 + paddingVertical * 2}px`,
				}}
			>
				{pokerCandidates.map((candidate: IPokerSelectorCandidate) => {
					return (
						<Box
							key={candidate.value}
							sx={{
								boxShadow: () => (candidate.value === selectedPokerKey ? 24 : 'none'),
							}}
							onClick={(event: any) => {
								setSelectedPoker(candidate.value);

								const newPokerOptions = [...pokerCandidates];

								const selectedIndex = newPokerOptions.findIndex((o) => o.isSelected);
								const selectedPokerOption = { ...newPokerOptions[selectedIndex] };
								selectedPokerOption.isSelected = false;
								newPokerOptions[selectedIndex] = selectedPokerOption;

								const index = newPokerOptions.findIndex((o) => o.value === candidate.value);
								const newPokerOption = { ...newPokerOptions[index] };
								newPokerOption.isSelected = true;
								newPokerOptions[index] = newPokerOption;

								setPokerCandidates(newPokerOptions);

								props.onPokerSelected(candidate.value);
							}}
						>
							<PokerCard value={candidate.value} isShown={candidate.isShown} pokerDeck={props.pokerDeck} size={candidate.isSelected ? selectedPokerSize : pokerSize} />
						</Box>
					);
				})}
			</Stack>
		</Grid>
	);
}

export default PokerSelector;
