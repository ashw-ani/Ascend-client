import React from "react";
import styles from "./Chartcontainer.module.css";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "Points",
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
];

const options = {
  chart: {
    height: 300,
    type: "line",
    zoom: {
      enabled: false,
    },

    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ",",
          headerCategory: "category",
          headerValue: "value",
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
      autoSelected: "zoom",
    },
  },
  markers: {
    size: [3],
  },
  colors: ["#ff0000"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
    // colors: { "#fff" },
  },
  title: {
    text: "Progress Tracker",
    align: "left",
  },
  grid: {},
  xaxis: {
    categories: [
      "07/31-08/06",
      "08/07-08/13",
      "08/21-08/27",
      "08/28-09/03",
      "09/04-09/10",
      "09/11-09/17",
      "09/18-09/24",
      "09/25-10/01",
      "10/02-10/08",
      "10/09-10/15",
      "10/16-10/22",
      "Current Week",
    ],
  },
};

const Chartcontainer = () => {
  return (
    <div className={styles.chartcontainer}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default Chartcontainer;
