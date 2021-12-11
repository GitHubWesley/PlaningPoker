import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Poker from './Poker';
import IParticipant from '../interfaces/IParticipant';

interface Props {
	participant: IParticipant;
}

export default function ParticipantCard(props: Props) {
	console.log(props.participant.selectedPokerKey);
	return (
		<Card elevation={3}>
			<Poker pokerKey={props.participant.selectedPokerKey} isShown={props.participant.isShown} />
			<Divider />
			<CardContent
				sx={{
					'&:last-child': {
						paddingBottom: '16px',
					},
				}}
			>
				<Typography align="center">{props.participant.name}</Typography>
			</CardContent>
		</Card>
	);
}