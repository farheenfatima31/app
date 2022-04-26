import { useEffect, useState, useContext } from 'react';
import styles from '../../styles/analytics_tabs.module.css';
import Api from '../api/api';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import { EnvValue } from '../../pages/analytics/index';

import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    circle
} from "react-simple-maps";
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(PointElement, LineElement, Filler);

export default function Overview() {
    const valueEnv = useContext(EnvValue)
    const [usagestatistics, set_usagestatistics] = useState([]);
    const [viewsStatistics, set_viewsStatistics] = useState([]);
    const [deviceviews, setdeviceviews] = useState([]);
    const [countryviews, setcountryviews] = useState([]);
    const [encoded_line, set_encoded_line] = useState([]);
    const [realtime, set_realtime] = useState([]);
    const [content, setContent] = useState("");


    useEffect(() => {
        Usage_statistics_data();
        Views_statistics_data();
        Realtime_views();
    }, [valueEnv]);

    const Usage_statistics_data = () => {
        if (valueEnv) {
            Api.Usage_statistics(valueEnv, new Date().setDate(new Date().getDate() - 7))
                .then(res => {
                    set_usagestatistics(res.data.data.totalUsageRecords)
                    set_encoded_line(res.data.data.periodicUsageGroupings)
                })
        }
    };
    const Views_statistics_data = () => {
        if (valueEnv) {
            Api.Views_statistics(valueEnv, new Date().setDate(new Date().getDate() - 7))
                .then(res => {
                    set_viewsStatistics(res.data.data)
                    setdeviceviews(res.data.data.deviceViews)
                    setcountryviews(res.data.data.countryViews)
                })
        }
    };
    const markers = countryviews
    const Realtime_views = () => {
        if (valueEnv) {
            Api.Realtime_views(valueEnv, new Date(new Date().getTime() - 1800000).getTime(), "1m")
                .then(res =>set_realtime(res.data.data.views))
                .catch(error => console.log(error))
        }
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: 'start',
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    };
    const realtime_options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                // ticks: {
                //     autoSkip: false,
                //     maxRotation: 0,
                //     minRotation: 0
                // }
            },
            y: {
                display: true,
                grid: {
                    display: true,
                }
            }
        }
    };
    const Lineoptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    };
    const encoded_linedata = {
        labels: encoded_line.map((line, key) => new Date(line?.timestamp)),
        datasets: [
            {
                data: encoded_line.map(u => u.usageRecords.filter(r => r.usage == "RecordEncodingUsage").map(r => r.amountInSecs).reduce((s, a) => s+a, 0)),
                fill: true,
                backgroundColor: "rgba(0,128,0,0.2)",
                borderColor: "rgba(0,128,0,0.5)"
            },
        ]
    };
    const stored_linedata = {
        labels: encoded_line.map((line, key) => new Date(line?.timestamp)),
        datasets: [
            {
                data: encoded_line.map(u => u.usageRecords.filter(r => r.usage == "RecordStorageUsage").map(r => r.amountInSecs).reduce((s, a) => s+a, 0)),
                fill: true,
                backgroundColor: "rgb(255,174,66,0.2)",
                borderColor: "rgb(255,174,66,1)"
            },
        ]
    };
    const streamed_line = {
        labels: encoded_line.map((line, key) => new Date(line?.timestamp)),
        datasets: [
            {
                data: encoded_line.map(u => u.usageRecords.filter(r => r.usage == "RecordStreamingUsage").map(r => r.amountInSecs).reduce((s, a) => s+a, 0)),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    }
    const realtime_views = {
        labels: realtime.map((realTime, key) => {
            var dt = new Date(realTime?.timestamp)
            return dt.getHours() + ':' + dt.getMinutes();
        }),
        datasets: [
            {
                data: realtime.map((realTime, key) => realTime.count),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    }
    const data = deviceviews.map((device, key) => device?.count);
    const doughnutdata = {
        labels:deviceviews.map((device, key) => device?.key),
       
        datasets: [
            {
                label: '',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                barThickness: 5,
            },
        ],
    };

    return (
        <div className={styles.container}>
            <div className={styles.video_type_container}>
                {usagestatistics.filter(record => record.usage == 'RecordEncodingUsage').map((item, key) =>
                    <div key={key} className={styles.encoded_video}>
                        <h5 className={styles.video_type_heading}>Encoded</h5>
                        <div className={styles.video_type_content}>
                            <h5>{parseInt(item.amountInSecs/3600)} hrs {parseInt(parseInt(item.amountInSecs%3600)/60)} mins {parseInt(item.amountInSecs%60)} secs</h5>
                            <div className={styles.timeperiod}>
                                <span >Total minutes of videos encoded in last 7 days.</span>
                            </div>
                        </div>
                        <div className={styles.line_chart}>
                            <Line options={Lineoptions} data={encoded_linedata} />
                        </div>
                    </div>)}
                {usagestatistics.filter(record => record.usage == 'RecordStorageUsage').map((item, key) =>
                    <div key={key} className={styles.encoded_video}>
                        <h5 className={styles.video_type_heading}>Stored</h5>
                        <div className={styles.video_type_content}>
                            <h5>{parseInt(item.amountInSecs/3600)} hrs {parseInt(parseInt(item.amountInSecs%3600)/60)} mins {parseInt(item.amountInSecs%60)} secs</h5>
                            <div className={styles.timeperiod}>
                                <span >Total minutes of videos stored in last 7 days.</span>
                            </div>
                        </div>
                        <div className={styles.line_chart}>
                            <Line options={Lineoptions} data={stored_linedata} />
                        </div>
                    </div>)}
                {usagestatistics.filter(record => record.usage == 'RecordStreamingUsage').map((item, key) =>
                    <div key={key} className={styles.encoded_video}>
                        <h5 className={styles.video_type_heading}>Streamed</h5>
                        <div className={styles.video_type_content}>
                            <h5>{parseInt(item.amountInSecs/3600)} hrs {parseInt(parseInt(item.amountInSecs%3600)/60)} mins {parseInt(item.amountInSecs%60)} secs</h5>
                            <div className={styles.timeperiod}>
                                <span >Total minutes of videos streamed in last 7 days.</span>
                            </div>

                        </div>
                        <div className={styles.line_chart}>
                            <Line options={Lineoptions} data={streamed_line} />
                        </div>

                    </div>)}
            </div>
            {[viewsStatistics].map((items, keys) => <>
                <div className={styles.real_time_views_container}>
                    <h4 className={styles.heading}>Real-Time Views</h4>
                    <div className={styles.viewers_details}>
                        <h5 className={styles.totalViews}>{items.totalViews}</h5>
                        <span className={styles.watching_viewers}>users are watching content right now.</span>
                    </div>
                    <div className={styles.realtime_chart}>
                        <Line options={realtime_options} data={realtime_views} />
                    </div>
                </div>
                <div className={styles.countries_devices_container}>
                    <div className={styles.countries_container}>
                        <div className={styles.countries_heading}>
                            <h4 className={styles.heading}>Countries</h4>
                            <span>Viewership in the last 7 days.</span>
                        </div>
                        <div className={styles.countries_map} >
                            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                                <ZoomableGroup>
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map(geo => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}

                                                    style={{
                                                        default: {
                                                            fill: "#D6D6DA",
                                                            outline: "none"
                                                        },
                                                        hover: {
                                                            fill: "#F53",
                                                            outline: "none"
                                                        },
                                                        pressed: {
                                                            fill: "#E42",
                                                            outline: "none"
                                                        }
                                                    }}
                                                />
                                            ))
                                        }
                                    </Geographies>
                                    {countryviews.map((country, key) => {

                                        <Marker name={country.key}  >
                                            <circle radius={10} fill="#F53" stroke='#fff' strokeWidth={2}></circle>
                                        </Marker>

                                    })}
                                </ZoomableGroup>
                            </ComposableMap>


                        </div>
                        <div className={styles.countries_table} >
                            <table>
                                <thead>
                                    <tr>
                                        <th >Country</th>
                                        <th>Percentage</th>
                                        <th>Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countryviews.map((country, key) =>
                                        <tr key={key}>
                                            <td className={styles.countries_name}>{country.key}</td>
                                            <td>{country.percentage}%</td>
                                            <td>{country.count}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.more_insights}>
                            <a>More Insights&gt;</a>
                        </div>
                    </div>
                    
                    <div className={styles.devices_container}>
                        <h4 className={styles.heading}>Devices</h4>
                        <span>Viewership in the last 7 days.</span>
                        <div className={styles.doughnut_graph}>
                            <Doughnut options={options} data={doughnutdata} />
                        </div>
                        <div className={styles.more_insights}>
                            {/* <a>More Insights&gt;</a> */}
                        </div>
                    </div>
                </div>
            </>)}

        </div>
    )
}