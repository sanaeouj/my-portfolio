import './App.css';
import Navbar from './Components/NavBar';
import Mycomponent from './Components/Mycomponent';
import Contact from './Components/Coordonnes'
import Skill from './Components/Skills'


function App() {
  return (
      <>
      <div id='Cv'>
      <div id='first'>
      <div id="name">
        <div><img src="
        " alt="sanaaae" /></div>
          </div>
<h1>My Contact Information</h1>
      <Contact Contact iconName='mobile' contactText="00212653374285" />
      <Contact Contact iconName='envoyer-un-e-mail.png' contactText="sanae.ouajhain@gmail.com" />
      <Contact Contact iconName='Linkedin.png' contactText="@sanae-ouajhain-6bbbab97" />
      <Contact Contact iconName='gite' contactText="github.com/sanaeouj" />
      <Contact Contact iconName='cartes-et-drapeaux' contactText="Temara" />
      <h1>langues</h1>
<ul><li>Anglais :Basique</li>
<li>Français : Courant</li>
<h1>Skills</h1>
<Skill skillname="HTML5/CSS" stars="4"/>
<Skill skillname="JavaScript /Express.js" stars="4"/>
<Skill skillname="MongoDB" stars="4"/>
<Skill skillname="React.Js " stars="4"/>
<Skill skillname="Node.Js" stars="4"/>
<Skill skillname="PHP /Symphony" stars="2"/>
</ul>
<h1>Certifications</h1>
<ul><li>Learn JavaScript Course</li>
<li>Devenir développeur / développeuse</li>
<li>web front-end</li>
<li>Learn Node.js Course</li>
<li>Learn Node.js: Fundamentals</li>
<li>Building Interactive JavaScript
Websites Course</li></ul>
      </div>
    <div id='second'>  
  <div id='Namee'>  <h1> Sanae Ouajhain </h1><br />
        <h2>Développeur Full Stack </h2><br /> <br /></div>
      <Navbar />
        <h1>Experience Professionnel </h1>
      <Mycomponent
        title="Stage En Full Stack MERN - ARKS Rabat"
        parag=" Création des Applications avec le Stack Mern"
        date="Juillet 2023-Aujourd’hui"
      />
          <Mycomponent
        title="Télé-technicien - Foundever Rabat"
        parag=" Traitement des demandes des clients
        Détection et résolution des anomalies systèmes :
        Support technique aux clients"
        date="Février 2016-Aout  2023"
      />
        <Mycomponent 
        title="Aide développeur Web -Stage
        Oﬃce National des Hydrocarbures et des Mines"
        parag=" Création d'une Application de Gestion d'absentéisme"
        date="Mars 2017 - Juin 2017"/>
            <Mycomponent 
        title="Conseiller technique - Webhelp Rabat"
        parag=" Fournir un support technique de qualité 
        Traiter les problèmes et les questions des clients par le biais du téléphone"
        date="Décembre 2014 - Février 2016"/>
 <Mycomponent
        title="Aide développeur Web - B.Aérospace Casablanca "
        parag=" Créer et Gérer les sites Web 
        Effectuer des évaluations hebdomadaires de tous les sites Web et logiciels afin de cerner les problèmes potentiels et les risques de défaillances"
        date="Septembre,2014 - Decembre,2014"
      />
       <Mycomponent
        title="Aide développeur Web - Propixel Rabat"
        parag=" Créer et Gérer les sites Web 
        Entretenir et mettre à jour les sites Web des clients, au besoin"
        date="Mars 2014 - Juillet 2014"
      />
    
       <h1>Formation Academique </h1>
       <Mycomponent
        title="Master spécialisé en ingénierie de développement logiciel"
        parag= " Université Mohammed V Rabat"
        date="2017"
      />
      <Mycomponent
        title="Licence en sciences mathématiques informatiques Génie Logiciel
        "
        parag=" Université Mohammed V Rabat                          
        "
        date="2014"
      />
      <Mycomponent
        title="Baccalauréat en sciences de la vie et de la terre"
        parag="Ecole Al Hassania Rabat"
        date="2008"
      />
        
       <h1></h1>
         <Mycomponent
        title="Formation Full Stack MERN - ARK-X Rabat   
        "
        parag="Ecole Al Hassania Rabat"
        date="De juillet 2023 à décembre 2023"
      /> 
      <h1>Certificats et Formations Complémentaires</h1>
      <Mycomponent
      title=" Certificat d'accomplissement développeuse web front-end  "
      parag="LinkedIn En ligne "
      date="octobre 2021 à décembre 2021"
    /> <Mycomponent
    title="Formation Front End - 3w academy Casablanca   "
    parag="Développement d'Application TO-List et application web de Chat
    (Outils :   HTML/CSS, Bootstrap, JavaScript, Git, Reactjs)  
Formation PHP orienté objet / Symfony - Endev Casablanca  "
    date="De juin 2021 à novembre 2021 "
  />
  <Mycomponent 
  title="Formation en PHP orienté objet et Symfony "
    parag="Création d'un projet gestion de                                  
    container en Symfony"
    date="  De juin 2020 à août 2020 -"/></div>
      </div>
    </>
    
  );
}

export default App;
