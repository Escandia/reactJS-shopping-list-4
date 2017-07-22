import React from 'react';
import Article from './Article';
import './stylesheets/index.scss';

class App extends React.Component {

  render() {
    return (


      <div className="App">
        <div className="App-header">
          <h2>Shopping List</h2>
        </div>

        <p className="App-intro">
          Make a choice of all the items you would like to buy!!
        </p>

        <Article
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
          nombre="Tacos al pastor"
          coment="A taco is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling."
          price={1}
          />

        <Article
          image="https://www.dairygoodness.ca/var/ezflow_site/storage/images/dairy-goodness/home/recipes/cheesy-chicken-quesadillas/8182154-38-eng-CA/cheesy-chicken-quesadillas.jpg"
          nombre="Quesadilla"
          coment="A quesadilla is a tortilla, usually a corn tortilla but also sometimes made with a wheat tortilla, which is filled with cheese and then grilled."
          price={2}
        />

        <Article
          image="http://images.media-allrecipes.com/userphotos/560x315/417213.jpg"
          nombre="Tamales"
          coment="A tamale is a traditional Mesoamerican dish made of masa or dough, which is steamed in a corn husk or banana leaf. "
          price={2}
        />


        <Article
          image="http://2.bp.blogspot.com/-wjIhvpk2wuY/UR_U28o1A8I/AAAAAAAAAN8/wG3T48rqNLA/s1600/4916-0w0h0_Modelo_Negra_Modelo_Mexican_Beer.jpg"
          nombre="Modelo Negra"
          coment="Modelo Negra's rich, smooth taste brings out the flavors of these Mexican-inspired recipes."
          price={3}
        />


      </div>
    );
  }
}

export default App;
