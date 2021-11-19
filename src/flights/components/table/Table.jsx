import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
import { compareTime, getTime } from '../../common';
import './table.scss';

const getStatusText = (pathType, shedule, status) => {
	if (!pathType || pathType === 'departures') {
		return `Вилетів о ${status}`;
	}

	return compareTime(shedule, getTime(new Date())) < 0 ? `Прибув ${status}` : 'В польоті';
};

const Table = ({ flightsList }) => {
	const { pathType } = useParams();

	return (
		<table className="scoreboard__options table">
			<thead>
				<tr>
					<th>Термінал</th>
					<th>Розклад</th>
					<th>Призначення</th>
					<th>Статус</th>
					<th>Авіакомпанія</th>
					<th>Рейс</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{flightsList.map(
					({ term, shedule, city, status, logo, airportName, flightCode }, index) => {
						return (
							<tr key={index}>
								<td
									className={classNames('table__terminal-field', {
										'table__terminal-field_blue': term === 'D',
									})}
								>
									<span>{term}</span>
								</td>
								<td className="table__time-field">{shedule}</td>
								<td className="table__way-field">{city}</td>
								<td className="table__status-field">{getStatusText(pathType, shedule, status)}</td>
								<td className="table__company-field">
									<img src={logo} alt="Company Logo" />
									<span>{airportName}</span>
								</td>
								<td className="table__flight-field">{flightCode}</td>
								<td className="table__details-field">
									<a className="table__details-link" href="#">
										Деталі рейсу
									</a>
								</td>
							</tr>
						);
					},
				)}
			</tbody>
		</table>
	);
};

Table.propTypes = {
  flightsList: PropTypes.array.isRequired,
};

export default Table;
