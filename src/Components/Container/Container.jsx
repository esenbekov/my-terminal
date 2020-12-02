import  React from "react";
import mod from "./Container.module.css";
import FavoriteFeatures from "./FavoriteFeatures/FavoriteFeatures";
import Features from "./Features/Features";
import Catalog from "./Catalog/Catalog";
import Route from "react-router-dom";

const Container = ()=> {
    return (
        <div className={mod.container}>
            <FavoriteFeatures/>
            <Features/>
        </div>
    )
}

export default Container;