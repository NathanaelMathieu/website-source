import "./Projects.scss";
import React, { Component } from "react";
import { ImageCard } from "../components";
import Layout from "../Layout.js";
import cubeBrick from "../resources/projects/cube/brick_sd.jpg";
import cubeHall from "../resources/projects/cube/hall_sd.jpg";
import cubeIso1 from "../resources/projects/cube/iso1_sd.jpg";
import cubeIso2 from "../resources/projects/cube/iso2_sd.jpg";
import cubeIso3 from "../resources/projects/cube/iso3_sd.jpg";
import cubeIso4 from "../resources/projects/cube/iso4_sd.jpg";
import cubeLights from "../resources/projects/cube/lights_sd.jpg";
import cubeSide from "../resources/projects/cube/side1_sd.jpg";

export default class Projects extends Component {
  componentDidMount() {
    document.title = "Projects | Nathanael Mathieu";
  }

  render() {
    return (
      <Layout>
        <div className="ProjectContainer">
          <ImageCard image={cubeIso1} route={"projects/cube"}
          textEnabled clickable />
          <ImageCard image={cubeLights}
          textEnabled/>
          <ImageCard image={cubeIso2} route={"projects/cube"}/>
          <ImageCard image={cubeBrick} route={"projects/cube"}/>
          <ImageCard image={cubeIso3} />
          <ImageCard image={cubeHall} route={"projects/cube"}/>
          <ImageCard image={cubeIso4} />
          <ImageCard image={cubeLights} route={"projects/cube"}/>
          <ImageCard image={cubeSide} route={"projects/cube"}/>
          {/* This is where the project previews will go */}
        </div>
      </Layout>
    );
  }
}
