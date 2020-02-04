import "./Projects.scss";
import React, { Component } from "react";
import { ImageCard } from "../components";
import Layout from "../Layout.js";
import cubeBrick from "../resources/cube/brick_sd.jpg";
import cubeHall from "../resources/cube/hall_sd.jpg";
import cubeIso1 from "../resources/cube/iso1_sd.jpg";
import cubeIso2 from "../resources/cube/iso2_sd.jpg";
import cubeIso3 from "../resources/cube/iso3_sd.jpg";
import cubeIso4 from "../resources/cube/iso4_sd.jpg";
import cubeLights from "../resources/cube/lights_sd.jpg";
import cubeSide from "../resources/cube/side1_sd.jpg";

export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <ImageCard sourceImage={cubeIso1} route={"projects/cube"}
          textEnabled clickable />
          <ImageCard sourceImage={cubeLights}
          textEnabled/>
          <ImageCard sourceImage={cubeIso2} route={"projects/cube"}/>
          <ImageCard sourceImage={cubeBrick} route={"projects/cube"}/>
          <ImageCard sourceImage={cubeIso3} />
          <ImageCard sourceImage={cubeHall} route={"projects/cube"}/>
          <ImageCard sourceImage={cubeIso4} />
          <ImageCard sourceImage={cubeLights} route={"projects/cube"}/>
          <ImageCard sourceImage={cubeSide} route={"projects/cube"}/>
          {/* This is where the project previews will go */}
        </div>
      </Layout>
    );
  }
}
