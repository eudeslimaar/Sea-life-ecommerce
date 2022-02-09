import React, { Component } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a
            className="social-github"
            href="https://github.com/eudeslimaar"
            target="blank"
          >
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/eudeslimaar/"
            target="blank"
          >
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2022 todos los Derechos reservados, 
          <a href="https://eudeslima.com/" target="blank">
            {" "}
            Eudes lima.
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
