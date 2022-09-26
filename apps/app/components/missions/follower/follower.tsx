import {Page} from "../../../hooks/useCore";

const Line = ({ text, isActive }) => {
  return <p className={`font-inter ml-5 text-md italic mb-3 ${isActive ? 'text-green-sheen' : 'text-dark-liver'}`} > {text}</p>
}

export default function Follower({ current }) {

  return <div className=" mt-8 ml-4">
    <h2 className="text-left font-inter font-bold mb-2">CADRAGE</h2>
    <Line text='Création compagnie' isActive={current == Page.CREATION_COMPAGNIE} />
    <Line text='Motivation de la gouvernance' isActive={current == Page.MOTIVATION} />
    <Line text='Stratégie de la PME' isActive={current == Page.STRATEGY}/>
    <Line text='État des lieux' isActive={current == Page.LIEU}/>
    <Line text='Identification partie prenante' isActive={current == Page.IDENTIFICATION}/>
    <h2 className="text-left font-inter font-bold mt-4">DIALOGUE PARTIE PRENANTE</h2>
  </div>
}
