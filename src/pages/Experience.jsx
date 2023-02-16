import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#7E4AF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Alyra
            <p>Expertise en développement NFT.</p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#7E4AF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Wild Code School
            <p>
              Formation développeur.se blockchain + alternance développeur.se
              concepteur.trice d'application.
            </p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#7E4AF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Simplon.co
            <p>
              Certification-Titre professionnel niveau III - Développeur·se web
              et web mobile.
            </p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#7E4AF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="mars 2022 - sept 2022"
          iconStyle={{ background: "#8e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Développeuse web & blockchain
            <p>CineCapsule · Contrat en alternance</p>
            <p>
              Développer des DApps et smarts contracts | projets web 2.0 vers
              web 3.0 | Financement des streams de festivals de films sur la
              blockchain.
            </p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#7E4AF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="sept 2021 - dec 2021"
          iconStyle={{ background: "#8e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Développeuse blockchain junior
            <p>Digital Copilote · Stage</p>
            <p>
              Créer une DApp Polygon pour accepter les paiements onChain via
              MetaMask.
            </p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline lineColor="#7E4AF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="fev 2020 - mars 2020"
          iconStyle={{ background: "#8e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Développeuse web front-end junior
            <p>SponsorBoost · Stage</p>
            <p>
              Créer des interfaces web pour les clients de SponsorBoost pour
              gérer leurs campagnes de sponsoring.
            </p>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
