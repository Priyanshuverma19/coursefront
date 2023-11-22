import React from 'react'
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend } from "chart.js"
import{Line,Doughnut} from "react-chartjs-2"
// import { RiDatabaseFill } from 'react-icons/ri';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend );

export const LineChart = (views=[]) => {
    const labels= getLastYearMonths();
    const options={
        responsive: true,
        Plugin:{
            legend:{
                position:"bottom",
            },
            title:{
                display:true,
                text:"Yearly Views"
            }
        }
    }
    const data={
        labels,
        datasets:[
            {
                labels:"Views",
                data:views,
                borderColor:"rgba(107,70,193,0.5)",
                backgroundColor:"#6b46c1",
            }
        ]
    };
  return<Line options={options} data={data}/>
  
}
export const DoughnutChart=({users=[]})=>{
    const data={
        labels:["Subscribed","Not Subscribed"],
        datasets:[
            {
                labels:"Views",
                data:users,
                borderColor:["rgba(62,12,171)","rgba(214,43,129)"],
                backgroundColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
                boderWidth:1,
            }
        ]
    };
    return<Doughnut data={data}/>
}

function getLastYearMonths(){
    const labels=[];

    const month=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentMonth= new Date().getMonth();
    const remain= 11-currentMonth;
    for(let i=currentMonth;i<month.length;i--){
            const element= month[i];
            labels.unshift(element);
            if(i===0) break;
        }
        for(let i=11;i>remain;i--){
            if(i===currentMonth) break;
            const element= month[i];
            labels.unshift(element);
           
        }
        return labels;

}