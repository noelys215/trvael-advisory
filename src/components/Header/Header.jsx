import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';

import useStyles from './styles';

const Header = ({ setCoordinates }) => {
	const classes = useStyles();
	const [autocomplete, setAutocomplete] = useState(null);

	const onLoad = (autoC) => setAutocomplete(autoC);

	const onPlaceChange = () => {
		const lat = autocomplete.getPlace().geometry.location.lat();
		const lng = autocomplete.getPlace().geometry.location.lng();

		setCoordinates({ lat, lng });
	};

	return (
		<AppBar position="static" style={{ backgroundColor: '#7dcdcd', color: '#f2f3f4' }}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5" className="classes.title">
					Travel Advisor
				</Typography>
				<Box display="flex">
					<Typography variant="h6" className="classes.title">
						Explore new places
					</Typography>
					<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search..."
								classes={{ root: classes.inputRoot, input: classes.inputInput }}
							/>
						</div>
					</Autocomplete>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
