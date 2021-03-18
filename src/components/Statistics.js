import React from 'react';
import PropTypes from 'prop-types';
import StatisticalData from './StatisticalData';

const Statistics = ({ title, stats }) => (
      <section class="statistics">
       {title && <h2 class="title">{ title}</h2>}
    <ul  class="stat-list">
        {stats.map((stats) => (
            <li class="item" key={stats.id}>
                <StatisticalData
                    label={stats.label}
                    percentage={stats.percentage}
                />
            </li>
        ))}
    </ul>
    </section>
);


Statistics.defaultProps = {
    title: ''
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics; 