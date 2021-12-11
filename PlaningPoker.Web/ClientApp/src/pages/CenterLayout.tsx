import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

interface Props {
	height: string | undefined;
}

export default function CenterLayout(props: any) {
	return (
		<Container>
			<Stack sx={{ height: props.height ?? '90vh', width: '100%' }} justifyContent="center" alignItems="stretch">
				<Paper elevation={20}>{props.children}</Paper>
			</Stack>
		</Container>
	);
}
