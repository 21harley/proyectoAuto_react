import { Chart } from "react-google-charts";

const GaugeTemper = ({ gauge_data }) => {
    const options = {
        width: 270, height: 270,
        greenFrom: 20, greenTo: 120,
        yellowFrom: 120, yellowTo: 200,
        redFrom: 200, redTo: 300,
        majorTicks: ["0", "20", "40", "60", "80", "90", "100", "120", "140", "160", "180", "200", "220", "240", "260", "280", "300"],
        minorTicks: 10,
        max: 300,
    }


    return (
        <div style={{margin:"10px",}}>
            <label>Temperatura</label>
            <Chart
                chartType="Gauge"
                data={gauge_data}
                options={options}
            />
        </div>

    )
}

export default GaugeTemper