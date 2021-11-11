import "../components/styles/style.css";
import Day from '../components/icon/Day.svg';
import React, { useState } from "react";
import DayToPlanCard from '../components/DayToPlanCard/DayToPlanCard'

const TourPlan2 = () => {

    const imageUrl =
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

    const jsx = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`
    };

    const [daysBtn, setDaysBtn] = useState("daysBtn");

    const filterShow = () => {
        setDaysBtn(daysBtn === "daysBtn" ? "daysBtnActives" : "daysBtn");
    }
    return (
        <>
            <div className="wrapper" style={jsx}></div>
            <div className="flex" style={{marginBottom:"5%"}}>
                <div className="move-top">
                    <p className="tour-title">Manali Trip</p>
                    <p className="tour-place-title">Kolkata - Manali </p>
                </div>
                <div className="move-top-btn" >
                    <button className="tour-days-btn">4 Days</button>
                </div>
            </div>

            <div className="container" >
                <div className="flex">
                    <p className="big-titles">Day to day Plan</p>
                    <img src={Day} alt="" className="Day-logo" />
                </div>
                <div className="flex">
                   
                </div>

                <DayToPlanCard />
                <DayToPlanCard />
                <DayToPlanCard />

                <div className="flex">
                    <button className="view-detail-btn">View details</button>
                    <button className="edit-detail-btn" >Edit</button>
                </div>

                <button className="trip-btn">continue -> </button>

                <DayToPlanCard />

                <div className="flex">
                    <button className="view-detail-btn">View details</button>
                    <button className="edit-detail-btn" >Edit</button>
                </div>
            </div>
        </>
    )
}

export default TourPlan2