import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import qs from 'qs';
import PropTypes from "prop-types";

import { getPathOption } from '../../common';
import classNames from 'classnames';

import './options.scss';

const Options = ({ getFlightsList }) => {
	const { pathType } = useParams();
	const flights = getPathOption(pathType);
	const { search } = useLocation();

	useEffect(() => {
		const { search: searchValue } = qs.parse(search.slice(1));
		getFlightsList(flights, searchValue);
	}, [pathType, search]);

	return (
		<div className="options">
			<Link
				className={classNames('options__option options__option_left', {
					options__option_blue: flights === 'arrival',
				})}
				to={`/departures${search}`}
			>
				Виліт
			</Link>
			<Link
				className={classNames('options__option options__option_right', {
					options__option_blue: flights === 'departure',
				})}
				to={`/arrivals${search}`}
			>
				Приліт
			</Link>
		</div>
	);
};

Options.propTypes = {
  getFlightsList: PropTypes.func.isRequired,
};

export default Options;
