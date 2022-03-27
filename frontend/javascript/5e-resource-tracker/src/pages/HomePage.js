import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div class="container px-4 py-5" id="home">
      <h2 class="pb-2 border-bottom">5e Resource Tracker</h2>
      <div class="row g-3 py-5 row-cols-2 rows-cols-lg-3">
        <div class="feature col">
          <IconContext.Provider
            value={{
              color: "blue",
              className: "global-class-name",
              size: "4em",
            }}
          >
            <div>
              <BsFillPeopleFill />
            </div>
          </IconContext.Provider>{" "}
          <h2>Personagens</h2>
          <p>
            Crie e edite personagens com nível, classe e especialização. Use as
            habilidades de seu personagem gastando seus recursos de classe, e
            filtrando elas por nome e tags.
          </p>
          <Link to="/character">
            <button type="button" class="btn btn-primary">
              Acessar
            </button>
          </Link>
        </div>
        <div class="feature col">
          <IconContext.Provider
            value={{
              color: "blue",
              className: "global-class-name",
              size: "4em",
            }}
          >
            <div>
              <GiDiceTwentyFacesTwenty />
            </div>
          </IconContext.Provider>{" "}
          <h2>Classes</h2>
          <p>
            Consulte as classes disponíveis e suas habilidades sem criar um
            personagem, filtrando elas por nomes e tags.
          </p>
          <Link to="/class">
            <button type="button" class="btn btn-primary">
              Acessar
            </button>
          </Link>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default HomePage;
