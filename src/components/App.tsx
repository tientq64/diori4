import { AccessAlarm, Home } from '@mui/icons-material'
import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Button,
	createTheme,
	Paper,
	TextField,
	ThemeProvider
} from '@mui/material'
import { ReactNode, useEffect, useState } from 'react'

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

export function App(): ReactNode {
	const [v, vv] = useState(1)

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (event) => {
			alert(4)
		})
	})

	return (
		<ThemeProvider theme={darkTheme}>
			<Paper
				className="flex flex-col justify-between items-center gap-4 h-screen"
				elevation={0}
				square
			>
				<h1 className="text-3xl">App</h1>
				<TextField label="Mật khẩu" type="password" />
				<Button variant="contained" size="large">
					Click
				</Button>
				<BottomNavigation
					className="w-full"
					showLabels
					value={v}
					onChange={(_, value) => vv(value)}
				>
					<BottomNavigationAction label="Home" icon={<Home />} />
					<BottomNavigationAction label="Alarm" icon={<AccessAlarm />} />
				</BottomNavigation>
			</Paper>
		</ThemeProvider>
	)
}
