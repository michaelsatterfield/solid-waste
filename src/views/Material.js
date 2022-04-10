import React, { useContext, useState, useEffect } from "react";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MyContext from "../state/MyContext";
import test_image from "../assets/test_image.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Material(props) {
  const context = useContext(MyContext);
  const [material, setMaterial] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    getMaterial();
  });

  let getMaterial = async () => {
    let material = await context.materials.find((obj) => {
      return obj.id === props.match.params.material;
    });
    let category = await context.categories.find((obj) => {
      return obj.id === material.category;
    });

    setMaterial(material);
    setCategory(category);
  };
  return (
    <div style={{ paddingTop: "1px", paddingBottom: "134px" }}>
      <div className="back_button">
        <Link className="back_button_text" to={`/category/${category.id}`}>
          <KeyboardArrowLeft fontSize={"large"} />
          <p>{category.name || "Loading.."}</p>
        </Link>
      </div>

      <div className="header_banner">
        <p className="header_banner_title">
          {category.wasteType || "Waste Type"}
        </p>
      </div>
      <div className="material_content">
        <p className="waste_type_title">
          <div dangerouslySetInnerHTML={{ __html: material.name }}></div>
          {/* {material.name} */}
        </p>
        <img
          alt="material"
          className="material_image"
          src={material.image || test_image}
        />
        <p className="material_description">
          <div
            dangerouslySetInnerHTML={{ __html: category.instructions }}
          ></div>
          {/* {category.instructions} */}
        </p>
        {category.depots?.length ? (
          <Accordion style={{ background: "#f2f2f2", marginBottom: "23px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Drop-Off Locations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {category.depots.map((location) => {
                  return (
                    <li style={{ marginTop: "8px", fontSize: "15px" }}>
                      {location}
                    </li>
                  );
                })}
              </ul>
            </AccordionDetails>
          </Accordion>
        ) : null}
        {category.events?.length ? (
          <Accordion style={{ background: "#f2f2f2" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Drop-Off Events</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {category.events?.map((event) => {
                return <p>event</p>;
              })}
            </AccordionDetails>
          </Accordion>
        ) : null}
      </div>
    </div>
  );
}
